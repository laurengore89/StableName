import { Component } from '@angular/core';
import { Horse, Height } from './models';
import { Studbook, Colour } from './enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StableName';
  horses: Horse[];

  constructor() {
    this.horses = [];
    this.horses.push(new Horse('Quicklook V', 'Pebbles', 'Mare', new Height(16, 1), 2005, Colour.Grey, Studbook.AES));
    this.horses.push(new Horse('Urkel', '', 'Stallion', new Height(17, 0), 2001, Colour.Grey, Studbook.KWPN));
    this.horses.push(new Horse('Unabresse M', '', 'Mare', new Height(0, 0), 2001, Colour.Bay, Studbook.KWPN));
    this.horses.push(new Horse('Quick Star', '', 'Stallion', new Height(15, 2.25), 1982, Colour.Bay, Studbook.FR));
  }
}
