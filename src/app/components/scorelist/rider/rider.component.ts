import { Component, Input, OnInit } from '@angular/core';
import { Rider } from 'src/app/models';

@Component({
  selector: 'sn-scorelist-rider',
  templateUrl: './rider.component.html',
  styleUrls: ['./rider.component.scss']
})
export class ScorelistRiderComponent implements OnInit {
  @Input() draw: number;
  @Input() sum: string;
  @Input() position: string;
  @Input() rider: Rider;
  public dnf: boolean;

  constructor() { }

  ngOnInit() {
    this.dnf = this.position === 'EL' || this.position === 'WD' || this.position === 'RET' || this.position === 'DSQ';
  }
}
