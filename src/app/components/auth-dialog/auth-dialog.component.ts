import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss']
})
export class AuthDialogComponent implements OnInit {

  @Input show: boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
