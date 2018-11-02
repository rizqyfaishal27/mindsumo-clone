import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '@app/models/skill';

@Component({
  selector: 'app-skill-tag',
  templateUrl: './skill-tag.component.html',
  styleUrls: ['./skill-tag.component.scss']
})
export class SkillTagComponent implements OnInit {

  @Input() skill: Skill;

  constructor() { }

  ngOnInit() {
  }

}
