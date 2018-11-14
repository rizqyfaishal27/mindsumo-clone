import { Component, OnInit } from '@angular/core';
import { TYPES } from '@app/models/mock-challenge-types';

import { SkillService } from '@app/services/skill.service';
import { Skill } from '@app/models/skill';
import { Challenge } from '@app/models/challenge';
import { User, UserSubmission } from '@app/models/user';
import { ActivatedRoute } from '@angular/router';
import { ChallengeService } from '@app/services/challenge.service';

@Component({
  selector: 'app-challanges-by-skill-page',
  templateUrl: './challanges-by-skill-page.component.html',
  styleUrls: ['./challanges-by-skill-page.component.scss']
})
export class ChallangesBySkillPageComponent implements OnInit {

  types = TYPES;
  skills: Skill[];
  challenges: Challenge[];
  nextChallengesLink: string = null;
  isLoadingNextChallenges: boolean = false;

  constructor(
    private skillService: SkillService,
    private route: ActivatedRoute,
    private challengeService: ChallengeService
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

  getNextChallenges(): void {
    this.isLoadingNextChallenges = true;
    this.challengeService.$getNextChallenges(this.nextChallengesLink)
      .subscribe(data => {
        console.log(data);
        this.isLoadingNextChallenges = false;
        this.nextChallengesLink = data.next;
        this.challenges = [
          ...this.challenges,
          ...this.generateChallengesObject(data)
        ]
      })
  }

  generateChallengesObject(challenges) {
    return challenges.results
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
              challenge.author.privacy_setting,
              challenge.author.submissions.map(submission => new UserSubmission(submission.id, submission.challenge))
            ),
          challenge.created_at,
          challenge.updated_at,
          challenge.status,
          challenge.banner_image,
          challenge.deliverables,
          challenge.description,
          challenge.is_anonymous_author,
          challenge.next_challenge_id,
          challenge.next_challenge_title,
          challenge.total_submission,
          challenge.due_date
        )
      );
  }

  getChallenges(): void {
    this.route.data
      .subscribe(data => {
        console.log(data);
        const challenges = data.challenges;
        this.nextChallengesLink = challenges.next;
        this.challenges = this.generateChallengesObject(challenges);
      })
  }
  
  ngOnInit() {
    this.getChallenges();
    this.getSkills();
  }
}
