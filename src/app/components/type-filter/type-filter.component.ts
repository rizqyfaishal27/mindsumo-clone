import { Component, OnInit, Input } from '@angular/core';
import { ChallengeType } from '@app/models/challenge-type';

@Component({
  selector: 'app-type-filter',
  templateUrl: './type-filter.component.html',
  styleUrls: ['./type-filter.component.scss']
})
export class TypeFilterComponent implements OnInit {

  @Input() type: ChallengeType;

  constructor() { }

  ngOnInit() {
  }

}
