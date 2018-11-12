import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile-page',
  templateUrl: './edit-profile-page.component.html',
  styleUrls: ['./edit-profile-page.component.scss']
})
export class EditProfilePageComponent implements OnInit {

  tabs: any = [
    {
      isActive: true,
      text: 'Personal'
    },
    {
      isActive: false,
      text: 'Images'
    },
    {
      isActive: false,
      text: 'Other'
    }
  ]


  constructor() { }

  onTabClick(text) {
    for(let tab of this.tabs) {
      tab.isActive = false;
    }
    for(let tab of this.tabs) {
      if(tab.text == text) {
        tab.isActive = true;
      } else {
        tab.isActive = false;
      }
    }
  }

  ngOnInit() {
  }

}
