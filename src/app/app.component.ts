import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) {
    this.horses = [];
    horsesjson.forEach((h: HorseDTO) => this.horses.push(new Horse(h)));

    this.riders = [];
    ridersjson.forEach((r: RiderDTO) => this.riders.push(new Rider(r)));

    this.testfun();
  }
  public testfun(): void {
    this.http.get('assets/testinput.txt', { responseType: 'text' })
      .subscribe(data => {
        console.log(data);
      });
  }
}
