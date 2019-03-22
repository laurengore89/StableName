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
    // this.horsesShow = this.rider.horses;
    // this.horsesShow = this.rider.horses.filter(h => h.Name === 'My Last One');
    this.horsesShow = this.rider.horses.filter(h => this.rider.scores.filter(s => s.Competition.Fei === '2019_BADMINTON').some(s => s.Horse.Fei === h.Fei));
  }
}

