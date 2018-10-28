import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '@app/models/skill';

@Component({
  selector: 'app-skill-filter',
  templateUrl: './skill-filter.component.html',
  styleUrls: ['./skill-filter.component.scss']
})
export class SkillFilterComponent implements OnInit {

  @Input() skill: Skill;

  constructor() { }

  ngOnInit() {
  }

}
