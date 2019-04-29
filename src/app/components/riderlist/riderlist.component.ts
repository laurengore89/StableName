import { Component, Input, OnInit } from '@angular/core';
import { Rider, Datablock } from 'src/app/models';

@Component({
  selector: 'sn-riderlist',
  templateUrl: './riderlist.component.html',
  styleUrls: ['./riderlist.component.scss']
})
export class RiderlistComponent implements OnInit {
  @Input() datablock: Datablock;
  ridersShow: Rider[];

  ngOnInit() {
    this.ridersShow = this.datablock.riders.sort((a, b) => { if (a.scores.length > b.scores.length) { return -1; } if (a.scores.length < b.scores.length) { return 1; } return 0; }).slice(0, 25);
    this.ridersShow = this.datablock.riders.filter(rider => this.datablock.scores.some(s => s.Rider.Fei === rider.Fei && s.Competition.Fei === '2019_BADMINTON')).sort((a, b) => { if (a.scores.length > b.scores.length) { return -1; } if (a.scores.length < b.scores.length) { return 1; } return 0; });
    // this.ridersShow = this.datablock.riders.filter(rider => rider.Fei === '10013701');
  }
}
