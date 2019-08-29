import { Component, Input, OnInit} from '@angular/core';
import { Rider, Horse, Competition, EventSeries } from '../../../models';

@Component({
  selector: 'sn-riderlist-rider',
  templateUrl: './rider.component.html',
  styleUrls: ['./rider.component.scss']
})
export class RiderlistRiderComponent implements OnInit {
  @Input() rider: Rider;
  @Input() comps: Competition[];
  @Input() eventserieses: EventSeries[];
  horsesShow: Horse[];

  ngOnInit() {
    this.horsesShow = this.rider.horses.sort((a, b) => { if (this.rider.scores.filter(s => s.Horse.Fei === a.Fei).sort((x, y) => { if (x.Competition.Fei > y.Competition.Fei) { return -1; } else if (y.Competition.Fei > x.Competition.Fei) { return 1; } return 0; })[0].Competition.Fei > this.rider.scores.filter(s => s.Horse.Fei === b.Fei).sort((x, y) => { if (x.Competition.Fei > y.Competition.Fei) { return -1; } else if (y.Competition.Fei > x.Competition.Fei) { return 1; } return 0; })[0].Competition.Fei) { return -1; } else if (this.rider.scores.filter(s => s.Horse.Fei === b.Fei).sort((x, y) => { if (x.Competition.Fei > y.Competition.Fei) { return -1; } else if (y.Competition.Fei > x.Competition.Fei) { return 1; } return 0; })[0].Competition.Fei > this.rider.scores.filter(s => s.Horse.Fei === a.Fei).sort((x, y) => { if (x.Competition.Fei > y.Competition.Fei) { return -1; } else if (y.Competition.Fei > x.Competition.Fei) { return 1; } return 0; })[0].Competition.Fei) { return 1; } if (this.rider.scores.filter(s => s.Horse.Fei === a.Fei).sort((x, y) => { if (x.Competition.Fei > y.Competition.Fei) { return -1; } else if (y.Competition.Fei > x.Competition.Fei) { return 1; } return 0; })[0].Competition.Fei > this.rider.scores.filter(s => s.Horse.Fei === b.Fei).sort((x, y) => { if (x.Competition.Fei > y.Competition.Fei) { return -1; } else if (y.Competition.Fei > x.Competition.Fei) { return 1; } return 0; })[0].Competition.Fei) { return -1; } else if (this.rider.scores.filter(s => s.Horse.Fei === b.Fei).sort((x, y) => { if (x.Competition.Fei > y.Competition.Fei) { return -1; } else if (y.Competition.Fei > x.Competition.Fei) { return 1; } return 0; })[0].Competition.Fei > this.rider.scores.filter(s => s.Horse.Fei === a.Fei).sort((x, y) => { if (x.Competition.Fei > y.Competition.Fei) { return -1; } else if (y.Competition.Fei > x.Competition.Fei) { return 1; } return 0; })[0].Competition.Fei) { return 1; } return 0; });
  }
}

