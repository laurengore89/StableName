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
    this.horsesShow = this.rider.horses.sort((a, b) => { if (this.rider.scores.filter(s => s.Horse.Fei === a.Fei).length > this.rider.scores.filter(s => s.Horse.Fei === b.Fei).length) { return -1; } else if (this.rider.scores.filter(s => s.Horse.Fei === b.Fei).length > this.rider.scores.filter(s => s.Horse.Fei === a.Fei).length) { return 1; } return 0; });
  }
}

