import { Component, OnInit } from '@angular/core';
import { TYPES } from '@app/models/mock-challenge-types';

import { SkillService } from '@app/services/skill.service';
import { Skill } from '@app/models/skill';
import { Challenge } from '@app/models/challenge';
import { User } from '@app/models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  types = TYPES;
  skills: Skill[];
  challenges: Challenge[];

  constructor(
    private skillService: SkillService,
    private route: ActivatedRoute
  ) { }

  getSkills(): void {
   this.route.data
      .subscribe(data => {
        const skills = data.skills;
        this.skills = skills
        .filter(skill => skill.is_primary)
        .map(skill => 
            new Skill(skill.id, skill.skill_name, skill.is_primary)); 
        });
  }

  getChallenges(): void {
    this.route.data
      .subscribe(data => {
        const challenges = data.challenges;
        this.challenges = challenges
          .map(challenge => 
            new Challenge(
              challenge.id,
              challenge.title,
              challenge.skills.map(skill => new Skill(skill.id, skill.skill_name, skill.is_primary)),
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
                challenge.author.skills.map(skill => new Skill(skill.id, skill.skill_name, skill.is_primary)),
                challenge.author.activities_and_interest,
                challenge.author.organization_team_clubs,
                challenge.author.privacy_setting
              ),
              challenge.created_at,
              challenge.updated_at,
              challenge.status,
              challenge.banner_image,
              challenge.deliverables,
              challenge.description,
              challenge.is_anonymous_author,
              challenge.next_challenge_id,
              challenge.next_challenge_title            
            )
          );
      })
  }
  
  ngOnInit() {
    this.getChallenges();
    this.getSkills();
  }

}
