import { Component, Input, OnInit } from '@angular/core';
import { Rider, Datablock, Horse } from '../../models';

@Component({
  selector: 'sn-rider',
  templateUrl: './rider.component.html',
  styleUrls: ['./rider.component.scss']
})
export class RiderComponent implements OnInit {
  @Input() rider: Rider;
  @Input() datablock: Datablock;
  horses: Horse[];

  ngOnInit(): void {
    this.horses = [];
    this.datablock.scores.filter(s => s.Rider.Fei === this.rider.Fei).map(s => s.Horse.Fei).forEach(f => {
      if (this.horses.find(h => h.Fei === f) === undefined) {
        this.horses.push(this.datablock.horses.find(h => h.Fei === f));
      }
    });
  }
}

