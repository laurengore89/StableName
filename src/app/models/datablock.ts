import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { Score, FlatScore, Horse, Rider, HorseDTO, RiderDTO } from '.';

import horsesjson from '../data/horses.json';
import ridersjson from '../data/riders.json';

class FlatBlock {
    public scores: FlatScore[];
    public horses: Horse[];
    public riders: Rider[];

    constructor(db: Datablock) {
        this.horses = db.horses;
        this.riders = db.riders;
        this.scores = [];
        db.scores.forEach(s => {
            this.scores.push(s.FlatScore());
        });
    }
}

export class Datablock {
    public scores: Score[];
    public horses: Horse[];
    public riders: Rider[];

    constructor(private http: HttpClient, filename: string) {
        if (filename !== '') {
            this.processRawTextToScores(filename);
        }
    }

    private processRawTextToScores(filename: string): void {
        this.http.get(filename, { responseType: 'text' })
            .subscribe(data => {
                this.scores = [];
                const re: RegExp = new RegExp('^\\t?([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+(.*?)$', 'g'); // this reads the scores line from a data.fei.org scrape
                const lines: string[] = data.split(/\r?\n/);
                let currentEntry: string[] = [];
                lines.forEach((l, i) => {
                    currentEntry.push(l);
                    const matches = re.exec(l);
                    if (matches != null) {
                        this.scores.push(new Score(currentEntry, matches));
                        currentEntry = [];
                    }
                });

                // see if there are any horses/riders in the scores we don't list yet
                this.horses = [];
                horsesjson.forEach((h: HorseDTO) => this.horses.push(new Horse(h)));
                this.riders = [];
                ridersjson.forEach((r: RiderDTO) => this.riders.push(new Rider(r)));
                this.scores.forEach(s => {
                    if (this.horses.find(h => h.Fei() === s.Horse().Fei()) === undefined) {
                        this.horses.push(s.Horse());
                    }
                    if (this.riders.find(r => r.Fei() === s.Rider().Fei()) === undefined) {
                        this.riders.push(s.Rider());
                    }
                });

                saveAs(new Blob([JSON.stringify(new FlatBlock(this))], {type: 'application/json'}), 'datablock.json');
            });
    }
}
