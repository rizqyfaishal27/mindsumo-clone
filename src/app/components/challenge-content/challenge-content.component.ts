import { Component, OnInit, Input } from '@angular/core';
import { Challenge } from '@app/models/challenge';
import * as moment from 'moment';


@Component({
  selector: 'app-challenge-content',
  templateUrl: './challenge-content.component.html',
  styleUrls: ['./challenge-content.component.scss']
})
export class ChallengeContentComponent implements OnInit {

  @Input() challenge: Challenge;
  today: any = moment.now();

  constructor() { }

  ngOnInit() {
    console.log(this.challenge)
  }

}
