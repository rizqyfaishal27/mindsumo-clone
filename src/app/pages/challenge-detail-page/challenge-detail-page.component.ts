import { Component, OnInit, Input } from '@angular/core';
import { Challenge } from '@app/models/challenge';
import { Skill } from '@app/models/skill';
import { User } from '@app/models/user';
import { ActivatedRoute } from '@angular/router';
import { AppStateService } from '@app/services/app-state.service';

@Component({
  selector: 'app-challenge-detail-page',
  templateUrl: './challenge-detail-page.component.html',
  styleUrls: ['./challenge-detail-page.component.scss']
})
export class ChallengeDetailPageComponent implements OnInit {

  @Input() challenge: Challenge;

  constructor(
    public appStateService: AppStateService,
    private route: ActivatedRoute
  ) { }

  getChallengeDetail(): void {
    this.route.data
      .subscribe(data => {
        const challenge = data.challenge;
        this.challenge = new Challenge(
          challenge.id,
          challenge.title,
          challenge.skills.map(skill => new Skill(skill.id, skill.skill_name)),
          challenge.price,
          new User(
            challenge.author.id,
            challenge.author.first_name,
            challenge.author.last_name,
            challenge.author.email,
            challenge.author.updated_at,
            challenge.author.created_at,
            challenge.author.avatar,
            challenge.author.username,
            challenge.author.birthdate,
            challenge.author.hometown,
            challenge.author.phone_number,
            challenge.author.facebook_id,
            challenge.author.twitter_id,
            challenge.author.skills.map(skill => new Skill(skill.id, skill.skill_name)),
            challenge.author.activities_and_interest,
            challenge.author.organization_team_clubs,
            challenge.author.privacy_setting
          ),
          challenge.created_at,
          challenge.updated_at,
          challenge.status,
          challenge.banner_image,
          challenge.deliverables,
          challenge.description
        );
      }, error => {
        console.log(error); 
      })
  }


  ngOnInit() {
    this.getChallengeDetail();
  }

}
