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
                        // [0] is final scored position at that event
                        // [1] is rider's FEI ID e.g. '10005015'
                        // [2] is rider's name and nationality e.g. 'Michael JUNG (GER)'
                        // [3] is horse's FEI ID e.g. 'GER40255'
                        // [4] is horse's name e.g. 'LA BIOSTHETIQUE - SAM FBW'
                        // [5], if it exists, is horse's studbook e.g. 'DSP'
                        // [last] is the scores line e.g. '	40.9	0	0	0	0	0	0	 		40.9 / 40.9'
                        // scores line breakdown:
                        // dressage score, XC faults, XC time, SJ faults, SJ time, SJ jumpoff faults, SJ jumpoff time, final score / final score + jumpoff score
                        // final score entry can be replaced by a letter code e.g. 'XC-R' if the horse did not complete
                        // see https://inside.fei.org/system/files/Eventing%20results%20description%202018_0.pdf for full specification
                        scores.push(new Score(currentEntry[1], currentEntry[3], matches));
                        currentEntry = [];
                    }
                });

                // see if there are any horses/riders in the scores we don't list yet
                this.horses = [];
                horsesjson.forEach((h: HorseDTO) => this.horses.push(new Horse(h)));
                this.riders = [];
                ridersjson.forEach((r: RiderDTO) => this.riders.push(new Rider(r)));
                this.scores.forEach(s => {
                    if (this.horses.find(h => h.Fei() === s.Horse()) === undefined) {
                        this.horses.push(this.buildHorseFromFei(s.Horse()));
                    }
                    if (this.riders.find(r => r.Fei() === s.Rider()) === undefined) {
                        this.riders.push(this.buildRiderFromFei(s.Rider()));
                    }
                });
            });
        return scores;
    }

    private buildHorseFromFei(fei: string): Horse {
        return new Horse(new HorseDTO(fei, fei, '', '', 0.0, 0, '', '', ''));
    }

    private buildRiderFromFei(fei: string): Rider {
        return new Rider(new RiderDTO(fei, fei, '', 0, ''));
    }
}
