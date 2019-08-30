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
        this.horsesShow = Horse.sortHorsesByRecent(this.rider.horses, this.rider.scores);
    }
}

