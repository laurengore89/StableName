import { Component, Input } from '@angular/core';
import { Horse } from '../models';
import { Colour, Sex } from '../enums';

@Component({
    selector: 'app-display-horse',
    templateUrl: './horse.component.html'
  })
  export class HorseComponent {
      @Input() horse: Horse;
      Colour = Colour;
      Sex = Sex;
  }
