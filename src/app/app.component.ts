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
    //this.datablock = new Datablock(http, 'assets/input.txt', '2015_CI_0074_S_S_01_03', '2015 Cannes Longines Global Champions Tour Grand Prix', RegexPattern.Jumping);
    this.ridersShow = this.datablock.riders.filter(rider => this.datablock.scores.some(s => s.Rider.Fei === rider.Fei)).sort((a, b) => { if (a.Fei > b.Fei) { return 1; } if (a.Fei < b.Fei) { return -1; } return 0; });
  }
}
