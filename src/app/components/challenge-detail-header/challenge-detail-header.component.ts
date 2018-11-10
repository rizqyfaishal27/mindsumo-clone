import { Component, OnInit, Input } from '@angular/core';
import { Challenge } from '@app/models/challenge';

@Component({
  selector: 'app-challenge-detail-header',
  templateUrl: './challenge-detail-header.component.html',
  styleUrls: ['./challenge-detail-header.component.scss']
})
export class ChallengeDetailHeaderComponent implements OnInit {

  @Input() challenge: Challenge;

  constructor() { }

  ngOnInit() {
  }

}
