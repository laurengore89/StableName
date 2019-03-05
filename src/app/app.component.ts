import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Datablock } from './models/datablock';

@Component({
  selector: 'sn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'StableName';
  datablock: Datablock;

  constructor(private http: HttpClient) {
    this.datablock = new Datablock(http, 'assets/testinput.txt');
  }
}
