import { Component, Input } from '@angular/core';
import { Rider, Horse } from 'src/app/models';

@Component({
  selector: 'sn-scorelist-rider',
  templateUrl: './rider.component.html',
  styleUrls: ['./rider.component.scss']
})
export class ScorelistRiderComponent {
  @Input() draw: number;
  @Input() rider: Rider;
  @Input() horse: Horse;

  constructor() { }
}
