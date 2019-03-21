import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Datablock, Rider } from './models';
import { RegexPattern } from './enums';

@Component({
  selector: 'sn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'StableName';
  datablock: Datablock;
  ridersShow: Rider[];

  constructor(private http: HttpClient) {
    this.datablock = new Datablock(http, '', '', '', '');
    this.ridersShow = this.datablock.riders.filter(rider => this.datablock.scores.some(s => s.Rider.Fei === rider.Fei)).sort((a, b) => { if (a.scores.length > b.scores.length) { return -1; } if (a.scores.length < b.scores.length) { return 1; } return 0; }).slice(0, 25);
    // this.ridersShow = this.datablock.riders.filter(rider => this.datablock.scores.some(s => s.Rider.Fei === rider.Fei && s.Competition.Fei === '2019_BADMINTON')).sort((a, b) => { if (a.scores.length > b.scores.length) { return -1; } if (a.scores.length < b.scores.length) { return 1; } return 0; });
  }

  // constructor(private http: HttpClient) {
  //   this.datablock = new Datablock(http, 'assets/input.txt', '2013_CI_0076_C_S_01_01', 'By', RegexPattern.Eventing);
  // }
}
