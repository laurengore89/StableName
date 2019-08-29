import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Datablock } from './models';
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
    // just load whatever's in datablock.json
    this.datablock = new Datablock(http, '', '', '', '');

    // load whatever's in datablock.json,
    // then add new or updated show entries from an input file
    // and print it out so it can be saved as the new datablock.json
    // this.datablock = new Datablock(http, 'assets/input.txt', '2018_CI_0608_C_S_01_01', '5LP', RegexPattern.Eventing);

    // generate a new datablock.json containing only the data for a single event
    // and print it out so it can be used in a production formguide build
    // this.datablock.createSubset('2019_Burghley');
  }
}
