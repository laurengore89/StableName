import { Component, Input } from '@angular/core';
import { Horse } from '../models';
import { Colour } from '../enums';

@Component({
    selector: 'display-horse',
    templateUrl: './horse.component.html'
  })
  export class HorseComponent {
      @Input() horse: Horse;
      Colour = Colour;
  }
