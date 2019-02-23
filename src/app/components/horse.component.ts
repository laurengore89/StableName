import { Component, Input } from '@angular/core';
import { Horse } from '../models';

@Component({
    selector: 'app-display-horse',
    templateUrl: './horse.component.html'
  })
  export class HorseComponent {
      @Input() horse: Horse;
  }
