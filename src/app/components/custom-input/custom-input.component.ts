import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {

  @Input() type: string;
  @Input() svgIcon: string;
  @Input() placeholder: string;

  constructor() { }

  ngOnInit() {
  }

}
