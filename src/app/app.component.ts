import { Component } from '@angular/core';
import { Horse } from './models/horse';
import { Height } from './models/height';
import { Studbook } from './enums/studbook';
import { Colour } from './enums/colour';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StableName';
  horses: Horse[] = [];

  myHorse = new Horse('Quicklook V', 'Pebbles', 'Mare', new Height(16, 1), 2005, Colour.Grey, Studbook.AES);
  myHorse2 = new Horse('Urkel', '', 'Stallion', new Height(17, 0), 2001, Colour.Grey, Studbook.KWPN);
  myHorse3 = new Horse('Unabresse M', '', 'Mare', new Height(0, 0), 2001, Colour.Bay, Studbook.KWPN);
  myHorse4 = new Horse('Quick Star', '', 'Stallion', new Height(15, 2.25), 1982, Colour.Bay, Studbook.FR);
}
