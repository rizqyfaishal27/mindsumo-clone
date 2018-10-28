import { Component, OnInit } from '@angular/core';
import { SKILLS } from '@app/models/mock-skills';
import { TYPES } from '@app/models/mock-challenge-types';
import { CHALLENGES } from '@app/models/mock-challenges';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  skills = SKILLS;
  types = TYPES;
  challenges = CHALLENGES;

  constructor() { }

  ngOnInit() {
    console.log(this.challenges)
  }

}
