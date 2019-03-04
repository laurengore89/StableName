import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Horse, HorseDTO, Rider, RiderDTO, Score } from './models';
import horsesjson from './data/horses.json';
import ridersjson from './data/riders.json';

@Component({
  selector: 'sn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'StableName';
  horses: Horse[];
  riders: Rider[];
  scores: Score[];

  constructor(private http: HttpClient) {
    this.horses = [];
    horsesjson.forEach((h: HorseDTO) => this.horses.push(new Horse(h)));

    this.riders = [];
    ridersjson.forEach((r: RiderDTO) => this.riders.push(new Rider(r)));

    this.scores = this.processRawTextToScores('assets/testinput.txt');
  }

  private processRawTextToScores(filename: string): Score[] {
    let scores: Score[] = [];
    this.http.get(filename, { responseType: 'text' })
      .subscribe(data => {
        const re: RegExp = new RegExp('^\\t?([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+(.*?)$', 'g'); // this reads the scores line from a data.fei.org scrape
        let lines: string[] = data.split(/\r?\n/);
        let currentEntry: string[] = [];
        lines.forEach((l, i) => {
          currentEntry.push(l);
          if (re.exec(l) != null) {
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
            scores.push(new Score(currentEntry[1], currentEntry[3], l));
            currentEntry = [];
          }
        });
      });
    return scores;
  }
}
