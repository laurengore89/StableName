import { Component, Input } from '@angular/core';
import { Horse } from 'src/app/models';

@Component({
  selector: 'sn-scorelist-horse',
  templateUrl: './horse.component.html',
  styleUrls: ['./horse.component.scss']
})
export class ScorelistHorseComponent {
  @Input() horse: Horse;

  constructor() { }
}
