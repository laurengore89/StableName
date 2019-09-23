import { Component, OnInit, Input } from '@angular/core';

import { Horse, Score, Competition, EventSeries } from 'src/app/models';
import { DbService } from 'src/app/services';

@Component({
    selector: 'sn-scorelist-scoretable',
    templateUrl: './scoretable.component.html',
    styleUrls: ['./scoretable.component.scss']
})
export class ScorelistScoretableComponent implements OnInit {
    @Input() horsefei: string;
    @Input() riderfei: string;
    public scoresShow: string[];

    constructor(private dbService: DbService) {
    }

    ngOnInit() {
        const eventserieses = this.dbService.EventSerieses();
        const competitions = this.dbService.Competitions();
        const horse = this.dbService.GetHorse(this.horsefei);

        let scores: Score[] = horse.scores.filter(s => s.Rider.Fei === this.riderfei && s.Result.p !== 'PEND').sort((a, b) => { if (a.Competition.Fei > b.Competition.Fei) { return -1; } else if (b.Competition.Fei > a.Competition.Fei) { return 1; } return 0; });

        this.scoresShow = scores.map(s => eventserieses.find(e => e.Id === competitions.find(c => c.Fei === s.Competition.Fei).EventSeries).Name + '\xa0' + competitions.find(c => c.Fei === s.Competition.Fei).Year + ':' + (s.Result.p === 'EL' || s.Result.p === 'WD' || s.Result.p === 'RET' || s.Result.p === 'DSQ' ? s.Result.p + '\xa0-\xa0' + s.Result.o : s.Result.p + ': ' + s.Result.a + ' | ' + (s.Result.b + s.Result.c) + ' | ' + (s.Result.d + s.Result.e + (s.Result.f === undefined ? 0 : s.Result.f) + (s.Result.g === undefined ? 0 : s.Result.g))));
    }

}
