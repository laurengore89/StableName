import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { Score, FlatScore, Horse, HorseDTO, Rider, RiderDTO } from '.';

import datajson from '../data/datablock.json';

class FlatBlock {
    public scores: FlatScore[];
    public horses: HorseDTO[];
    public riders: RiderDTO[];

    constructor(db: Datablock) {
        this.horses = [];
        db.horses.forEach(h => {
            this.horses.push(h.Flat());
        });
        this.riders = [];
        db.riders.forEach(r => {
            this.riders.push(r.Flat());
        });
        this.scores = [];
        db.scores.forEach(s => {
            this.scores.push(s.Flat());
        });
    }
}

export class Datablock {
    public scores: Score[];
    public horses: Horse[];
    public riders: Rider[];

    constructor(private http: HttpClient, filename: string) {
        this.buildFromJson();

        if (filename !== '') {
            this.processRawTextToScores(filename);
        }
    }

    private buildFromJson() {
        this.horses = [];
        datajson.horses.forEach((h: HorseDTO) => this.horses.push(new Horse(h)));
        this.riders = [];
        datajson.riders.forEach((r: RiderDTO) => this.riders.push(new Rider(r)));
        this.scores = [];
        datajson.scores.forEach((s: FlatScore) => {
            let scoreFacts: string[] = ['', s._rider, '', s._horse, '', ''];
            let matchString = s._result._dressage + ' ' + s._result._sjfault + ' ' + s._result._sjtime + ' ' + s._result._xcfault + ' ' + s._result._xctime + ' ' + s._result._jumpofffault + ' ' + s._result._jumpofftime + ' ' + 'PLACEHOLDER';
            const re: RegExp = new RegExp('^\\t?([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+(.*?)$', 'g');
            let matches = re.exec(matchString);
            if (matches == null) {
                throw new Error('score ' + scoreFacts[1] + ',' + scoreFacts[3] + ' [' + matchString + '] no matches');
            }
            this.scores.push(new Score(scoreFacts, matches));
        });
    }

    private processRawTextToScores(filename: string): void {
        this.http.get(filename, { responseType: 'text' })
            .subscribe(data => {
                const lines: string[] = data.split(/\r?\n/);
                let currentEntry: string[] = [];
                lines.forEach((l, i) => {
                    currentEntry.push(l);
                    const re: RegExp = new RegExp('^\\t?([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+(.*?)$', 'g');
                    const matches = re.exec(l);
                    if (matches != null) {
                        this.scores.push(new Score(currentEntry, matches));
                        currentEntry = [];
                    }
                });

                // see if there are any horses/riders in the scores we don't list yet
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