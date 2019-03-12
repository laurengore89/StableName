import { Component, Input, OnInit } from '@angular/core';
import { Horse, Datablock, Rider } from '../../models';

@Component({
  selector: 'sn-horse',
  templateUrl: './horse.component.html',
  styleUrls: ['./horse.component.scss']
})
export class HorseComponent implements OnInit {
  @Input() horse: Horse;
  @Input() datablock: Datablock;
  riders: Rider[];

  ngOnInit(): void {
    this.riders = [];
    this.datablock.scores.filter(s => s.Horse.Fei === this.horse.Fei).map(s => s.Rider.Fei).forEach(f => {
      if (this.riders.find(r => r.Fei === f) === undefined) {
        this.riders.push(this.datablock.riders.find(r => r.Fei === f));
      }
    });
  }
}
