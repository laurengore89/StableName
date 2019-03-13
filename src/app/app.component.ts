import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Datablock } from './models/datablock';
import { RegexPattern } from './enums';

@Component({
  selector: 'sn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'StableName';
  datablock: Datablock;

  constructor(private http: HttpClient) {
    this.datablock = new Datablock(http, '', '', '', '');
    //this.datablock = new Datablock(http, 'assets/input.txt', '2016_OG_0001_D_S_01_01', '2016 Rio Olympic Dressage Grand Prix', RegexPattern.OlympicGP);
  }
}
