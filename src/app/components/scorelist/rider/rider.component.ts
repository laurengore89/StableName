import { Component, Input } from '@angular/core';
import { Rider, Horse } from 'src/app/models';

@Component({
  selector: 'sn-scorelist-rider',
  templateUrl: './rider.component.html',
  styleUrls: ['./rider.component.scss']
})
export class ScorelistRiderComponent {
  @Input() draw: number;
  @Input() sum: string;
  @Input() rider: Rider;

  constructor() { }
}
