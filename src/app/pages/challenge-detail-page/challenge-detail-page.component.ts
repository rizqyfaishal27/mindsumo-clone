import { Component, OnInit, Input } from '@angular/core';
import { Challenge } from '@app/models/challenge';
import { CHALLENGES } from '@app/models/mock-challenges';

@Component({
  selector: 'app-challenge-detail-page',
  templateUrl: './challenge-detail-page.component.html',
  styleUrls: ['./challenge-detail-page.component.scss']
})
export class ChallengeDetailPageComponent implements OnInit {

  @Input() challenge: Challenge;

  constructor() { }

  ngOnInit() {
    this.challenge = CHALLENGES[0];
  }

}
