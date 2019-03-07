import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { Competition, Score, ScoreDTO, Horse, HorseDTO, Rider, RiderDTO, Result } from '.';

import datajson from '../data/datablock.json';

class DatablockDTO {
    public competitions: Competition[];
    public scores: ScoreDTO[];
    public horses: HorseDTO[];
    public riders: RiderDTO[];

    constructor(db: Datablock) {
        this.competitions = db.competitions;
        this.horses = [];
        db.horses.forEach(h => {
            this.horses.push(h.Dto());
        });
        this.riders = [];
        db.riders.forEach(r => {
            this.riders.push(r.Dto());
        });
        this.scores = [];
        db.scores.forEach(s => {
            this.scores.push(s.Dto());
        });
    }
}

export class Datablock {
    public competitions: Competition[];
    public scores: Score[];
    public horses: Horse[];
    public riders: Rider[];

    constructor(private http: HttpClient, filename: string, competitionFei: string, competitionName: string, competitionPattern: string) {
        this.buildFromJson();

        if (filename !== '' && competitionFei !== '' && competitionName !== '' && competitionPattern !== '') {
            this.processRawTextToScores(filename, competitionFei, competitionName, competitionPattern);
        }
    }

    private buildFromJson() {
        this.horses = [];
        datajson.horses.forEach((h: HorseDTO) => this.horses.push(new Horse(h)));
        this.riders = [];
        datajson.riders.forEach((r: RiderDTO) => this.riders.push(new Rider(r)));
        this.scores = [];
        datajson.scores.forEach((s: ScoreDTO) => {
            let scoreFacts: string[] = [s._result._position, s._rider, '', s._horse, '', ''];
            this.scores.push(new Score(s._competition, scoreFacts, s._result));
        });
        this.competitions = datajson.competitions;
    }

    private processRawTextToScores(filename: string, competitionFei: string, competitionName: string, competitionPattern: string): void {
        this.http.get(filename, { responseType: 'text' })
            .subscribe(data => {
                const lines: string[] = data.split(/\r?\n/);
                let currentEntry: string[] = [];
                lines.forEach((l, i) => {
                    currentEntry.push(l);
                    const re: RegExp = new RegExp(competitionPattern, 'g');
                    const matches = re.exec(l);
                    // result is the scores line e.g. '	40.9	0	0	0	0	0	0	 		40.9 / 40.9'
                    // scores line breakdown:
                    // dressage score, XC faults, XC time, SJ faults, SJ time, SJ jumpoff faults, SJ jumpoff time, final score / final score + jumpoff score
                    // final score entry can be replaced by a letter code e.g. 'XC-R' if the horse did not complete
                    // see https://inside.fei.org/system/files/Eventing%20results%20description%202018_0.pdf for full specification
                    if (matches != null) {
                        let result = new Result();
                        result._dressage = Number(matches[1]);
                        result._xcfault = Number(matches[2]);
                        result._xctime = Number(matches[3]);
                        result._sjfault = Number(matches[4]);
                        result._sjtime = Number(matches[5]);
                        if (matches.length === 10) {
                            result._jumpofffault = Number(matches[6]);
                            result._jumpofftime = Number(matches[7]);
                            result._outcome = matches[8];
                        } else if (matches.length === 8) {
                            result._outcome = matches[7];
                        }
                        this.scores.push(new Score(competitionFei, currentEntry, result));
                        currentEntry = [];
                    }
                });

                // known competition?
                if (this.competitions.find(c => c.Fei === competitionFei) === undefined) {
                    this.competitions.push(new Competition(competitionFei, competitionName));
                }

                // see if there are any horses/riders/competitions in the scores we don't list yet
                this.scores.forEach(s => {
                    if (this.horses.find(h => h.Fei() === s.Horse().Fei()) === undefined) {
                        this.horses.push(s.Horse());
                    }
                    if (this.riders.find(r => r.Fei() === s.Rider().Fei()) === undefined) {
                        this.riders.push(s.Rider());
                    }
                });

                saveAs(new Blob([JSON.stringify(new DatablockDTO(this))], {type: 'application/json'}), 'datablock.json');
            });
    }
}
