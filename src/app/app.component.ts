import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Datablock } from './models/datablock';

@Component({
  selector: 'sn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'StableName';
  datablock: Datablock;

  private readonly patternOlympic = '^\\t?([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+(.*?)$';
  private readonly patternBadminton = '^\\t?([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d,\\.]*?\\sGBP)?\\s+\\s+(.*?)$';
  private readonly patternGrandPrixDressage = '^\\s*[\\d\\.]*?\\s[GBP]*\\s+[\\d\\.]*?\\s+[\\d\\.]*?\\s+[\\d\\.]*?\\s+[\\d\\.]*?\\s+[\\d\\.]*?\\s+([\\d\\.]*?)$';

  constructor(private http: HttpClient) {
    this.datablock = new Datablock(http, '', '', '', '');
    //this.datablock = new Datablock(http, 'assets/input.txt', '2015_CI_0097_C_S_01_01', '2015 Badminton', this.patternBadminton);
  }
}
