import { Component, Input } from '@angular/core';
import { Rider } from '../../models';

@Component({
  selector: 'sn-rider',
  templateUrl: './rider.component.html',
  styleUrls: ['./rider.component.scss']
})
export class RiderComponent {
  @Input() rider: Rider;
}

