import { Component, Input, OnInit } from '@angular/core';
import { Horse } from 'src/app/models';

@Component({
  selector: 'sn-scorelist-horse',
  templateUrl: './horse.component.html',
  styleUrls: ['./horse.component.scss']
})

export class ScorelistHorseComponent implements OnInit {
  @Input() horse: Horse;
  @Input() position: string;
  @Input() outcome: string;
  public dnf: boolean;

  constructor() { }

  ngOnInit() {
    this.dnf = this.position === 'EL' || this.position === 'WD' || this.position === 'RET' || this.position === 'DSQ';
  }
}
