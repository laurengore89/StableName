import { HttpClient } from '@angular/common/http';
import { Score, Horse, Rider, HorseDTO, RiderDTO } from '.';

import horsesjson from '../data/horses.json';
import ridersjson from '../data/riders.json';

export class Datablock {
    public scores: Score[];
    public horses: Horse[];
    public riders: Rider[];

    constructor(private http: HttpClient) {
        this.scores = this.processRawTextToScores('assets/testinput.txt');
    }

    private processRawTextToScores(filename: string): Score[] {
        let scores: Score[] = [];
        this.http.get(filename, { responseType: 'text' })
            .subscribe(data => {
                const re: RegExp = new RegExp('^\\t?(([\\d\\.]*?)\\s+){9}(.*?)$', 'g'); // this reads the scores line from a data.fei.org scrape
                let lines: string[] = data.split(/\r?\n/);
                let currentEntry: string[] = [];
                lines.forEach((l, i) => {
                    currentEntry.push(l);
                    let matches = re.exec(l);
                    if (matches != null) {
                        scores.push(new Score(currentEntry, matches));
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
            });
        return scores;
    }
}
