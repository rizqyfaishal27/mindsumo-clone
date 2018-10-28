import { Component, OnInit, Input } from '@angular/core';
import { Challenge } from '@app/models/challenge';

@Component({
  selector: 'app-challenge-content',
  templateUrl: './challenge-content.component.html',
  styleUrls: ['./challenge-content.component.scss']
})
export class ChallengeContentComponent implements OnInit {

  @Input() challenge: Challenge;

  constructor() { }

  ngOnInit() {
    console.log(this.challenge)
  }

}
