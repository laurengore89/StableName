import { Component, Input } from '@angular/core';
import { ScoreHorseRider } from 'src/app/models';

@Component({
  selector: 'sn-scorelist-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScorelistScoreComponent {
  @Input() draw: number;
  @Input() scorehorserider: ScoreHorseRider;

  constructor() { }
}
