import { Component, OnInit, Input } from '@angular/core';
import { Challenge } from '@app/models/challenge';
import * as moment from 'moment';
import { isNumber } from 'util';

@Component({
  selector: 'app-challenge-detail-header',
  templateUrl: './challenge-detail-header.component.html',
  styleUrls: ['./challenge-detail-header.component.scss']
})
export class ChallengeDetailHeaderComponent implements OnInit {

  @Input() challenge: Challenge;
  isDone: boolean = false;

  constructor() { }

  ngOnInit() {
    const now = moment();
    const challengDueDate = moment(this.challenge.dueDate).add(1, 'd').subtract(1, 'minute');
    if(now > challengDueDate) {
      this.isDone = true;
    } else {
      this.isDone = false;
    }
  } 

}
