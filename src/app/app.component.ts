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
        const re: RegExp = new RegExp('^\\t?([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+(.*?)$', 'g'); // this reads the Scores line from a data.fei.org scrape
        let lines: string[] = data.split(/\r?\n/);
        let currentEntry: string[] = [];
        lines.forEach((l, i) => {
          currentEntry.push(l);
          if (re.exec(l) != null) {
            scores.push(new Score(currentEntry[1], currentEntry[3], l));
            currentEntry = [];
          }
        });
      });
    return scores;
  }
}
