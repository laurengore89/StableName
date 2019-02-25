import { Component, OnInit, Input } from '@angular/core';
import { Horse } from '../models';

@Component({
  selector: 'sn-horse',
  templateUrl: './horse.component.html',
  styleUrls: ['./horse.component.scss']
})
export class HorseComponent implements OnInit {

  @Input() horse: Horse;

  constructor() { }

  ngOnInit() {
  }

}
