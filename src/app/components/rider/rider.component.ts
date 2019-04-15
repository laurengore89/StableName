import { Component, Input, OnInit} from '@angular/core';
import { Rider, Horse } from '../../models';

@Component({
  selector: 'sn-rider',
  templateUrl: './rider.component.html',
  styleUrls: ['./rider.component.scss']
})
export class RiderComponent implements OnInit {
  @Input() rider: Rider;
  horsesShow: Horse[];

  ngOnInit() {
    // this.horsesShow = this.rider.horses.filter(h => h.Fei === '104BY63');
    this.horsesShow = this.rider.horses.filter(h => h.scores.some(s => s.Horse.Fei === h.Fei && s.Rider.Fei === this.rider.Fei && s.Competition.Fei === '2019_BADMINTON')).sort((a, b) => { if (this.rider.scores.filter(s => s.Horse.Fei === a.Fei).length > this.rider.scores.filter(s => s.Horse.Fei === b.Fei).length) { return -1; } else if (this.rider.scores.filter(s => s.Horse.Fei === b.Fei).length > this.rider.scores.filter(s => s.Horse.Fei === a.Fei).length) { return 1; } return 0; });
  }
}

