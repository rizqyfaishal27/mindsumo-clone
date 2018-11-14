import { Component, OnInit } from '@angular/core';
import { AppStateService } from '@app/services/app-state.service';
import { DomSanitizer } from '@angular/platform-browser';
import { UserProfileService } from '@app/services/user-profile.service';
import { Router } from '@angular/router';
import { User } from '@app/models/user';
import { Auth } from '@app/models/auth';

@Component({
  selector: 'app-edit-profile-page',
  templateUrl: './edit-profile-page.component.html',
  styleUrls: ['./edit-profile-page.component.scss']
})
export class EditProfilePageComponent implements OnInit {
  isSubmitting: boolean = false;
  isOtherUpdated: boolean = false;
  isPersonalUpdated: boolean = false;
  isImageUpdated: boolean = false;

  personal: any = {

  }
  images: any = {

  }

  others: any = {

  }

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


  constructor(
    public appStateService: AppStateService,
    private sanitaze: DomSanitizer,
    private userProfileService: UserProfileService,
    private router: Router
  ) { }

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
    if(this.appStateService.getState().isLogin) {
      const user = this.appStateService.getState().authData.user;
      this.personal = {
        firstName: user.firstName,
        lastName: user.lastName,
        birthdate: user.birthdate,
        phoneNumber: user.phoneNumber,
        hometown: user.hometown
      }
      this.images = {
        avatar: user.avatar,
        tempAvatar: null
      }
      this.others = {
        activitiesAndInterest: user.activitiesAndInterest,
        organizationTeamClubs: user.organizationTeamClubs
      }
    } else {
      this.router.navigateByUrl('/');
    }
    
  }

  onBrowseClick(e) {
    e.preventDefault();
    const element: HTMLElement = document.getElementById("tempAvatar") as HTMLElement;
    element.click();
  }

  onPictureChange(e) {
    const file = e[0];
    this.readFile(file)
      .then(imageData => {
        this.images = {
          avatar: this.sanitaze.bypassSecurityTrustUrl(imageData.dataURL),
          tempAvatar: imageData.file
        }
      })
  }

  onPersonalSubmit() {
    this.isSubmitting = true;
    this.isPersonalUpdated = false;
    this.userProfileService.$savePersonalData({
      first_name: this.personal.firstName,
      last_name: this.personal.lastName,
      birthdate: this.personal.birthdate,
      hometown: this.personal.hometown,
      phone_number: this.personal.phoneNumber
    })
      .subscribe(data => {
        this.isSubmitting = false;
        this.isPersonalUpdated = true;
        this.personal = {
          firstName: data.first_name,
          lastName: data.last_name,
          birthdate: data.birthdate,
          phoneNumber: data.phone_number,
          hometown: data.hometown
        }
        const userData: User = this.appStateService.getState().authData.user;
        const token: string = this.appStateService.getState().authData.token;
        userData.firstName = data.first_name;
        userData.lastName = data.last_name;
        userData.birthdate = data.birthdate;
        userData.phoneNumber = data.phone_number;
        userData.hometown = data.hometown;
        this.appStateService.setAuthUserData(
          new Auth(
            token,
            userData
          )
        )
      })
  }

  onImageSubmit() {
    this.isSubmitting = true;
    this.isImageUpdated = false;
    console.log(this.images);
    const formData: FormData = new FormData();
    formData.append('avatar', this.images.tempAvatar);
    this.userProfileService.$saveImageData(formData)
      .subscribe(data => {
        this.isSubmitting = false;
        this.isImageUpdated = true;
        this.images = {
          avatar: data.avatar,
          tempAvatar: null
        }
        const userData: User = this.appStateService.getState().authData.user;
        const token: string = this.appStateService.getState().authData.token;
        userData.avatar = data.avatar;
        this.appStateService.setAuthUserData(
          new Auth(
            token,
            userData
          )
        )
      })
  }

  onOtherSubmit() {
    this.isSubmitting = true;
    this.isOtherUpdated = false;
    this.userProfileService.$saveOtherData({
      activities_and_interest: this.others.activitiesAndInterest,
      organization_team_clubs: this.others.organizationTeamClubs
    })
      .subscribe(data => {
        this.isSubmitting = false;
        this.isOtherUpdated = true;
        this.others = {
          activitiesAndInterest: data.activities_and_interest,
          organizationTeamClubs: data.organization_team_clubs
        }
        const userData: User = this.appStateService.getState().authData.user;
        const token: string = this.appStateService.getState().authData.token;
        userData.organizationTeamClubs = data.organization_team_clubs;
        userData.activitiesAndInterest = data.activities_and_interest;
        this.appStateService.setAuthUserData(
          new Auth(
            token,
            userData
          )
        )
      })
  }

  readFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      // Read the image via FileReader API and save image result in state.
      reader.onload = function (e) {
        // Add the file name to the data URL
        let dataURL = e.target.result;
        dataURL = dataURL.replace(";base64", `;name=${file.name};base64`);
        const returnVal: any = {
          file: file,
          dataURL: dataURL
        };
        resolve(returnVal);
      };

      reader.readAsDataURL(file);
    });
  }

}
