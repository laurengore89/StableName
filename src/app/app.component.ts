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

//   constructor(private http: HttpClient) {
//     this.datablock = new Datablock(http, '', '', '', '');
//   }

  constructor(private http: HttpClient) {
    this.datablock = new Datablock(http, 'assets/bd2019.txt', '2019_BADMINTON', '5LBn', RegexPattern.Eventing);
  }
}
