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
    this.datablock = new Datablock(http, '', '', '', '');
  }

  // constructor(private http: HttpClient) {
  //   this.datablock = new Datablock(http, 'assets/input.txt', '2018_CI_0608_C_S_01_01', '5LP', RegexPattern.Eventing);
  // }
}
