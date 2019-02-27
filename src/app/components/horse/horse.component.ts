import { Component, Input } from '@angular/core';
import { Horse } from '../../models';

@Component({
  selector: 'sn-horse',
  templateUrl: './horse.component.html',
  styleUrls: ['./horse.component.scss']
})
export class HorseComponent {
  @Input() horse: Horse;
}
