import { Component } from '@angular/core';
import { Horse, HorseDTO, Rider, RiderDTO } from './models';
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

  constructor() {
    this.horses = [];
    horsesjson.forEach((h: HorseDTO) => this.horses.push(new Horse(h)));

    this.riders = [];
    ridersjson.forEach((r: RiderDTO) => this.riders.push(new Rider(r)));
  }
}
