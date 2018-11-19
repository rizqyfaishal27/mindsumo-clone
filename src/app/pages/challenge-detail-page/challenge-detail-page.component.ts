import { Component, OnInit, Input } from '@angular/core';
import { Challenge } from '@app/models/challenge';
import { Skill } from '@app/models/skill';
import { User, UserSubmission } from '@app/models/user';
import { ActivatedRoute } from '@angular/router';
import { AppStateService } from '@app/services/app-state.service';
import { SubmissionService } from '@app/services/submission.service';

@Component({
  selector: 'app-challenge-detail-page',
  templateUrl: './challenge-detail-page.component.html',
  styleUrls: ['./challenge-detail-page.component.scss']
})
export class ChallengeDetailPageComponent implements OnInit {

  challenge: Challenge;
  isLoading: boolean = true;
  isSubmitting: boolean = false;
  errors: any = {};

  submission: any = {
    title: "",
    text: "",
    file: ""
  }

  constructor(
    public appStateService: AppStateService,
    private route: ActivatedRoute,
    private submissionService: SubmissionService,
  ) { }

  showAuthDialog() {
    this.appStateService.setIsShowAuthDialog(true);
  }

  checkIfUserAlreadySubmitted(challengeId: number) {
    return this.appStateService.getState().authData.user.submissions
                .map(sub => sub.challenge).indexOf(challengeId) != -1;
  }

  getChallengeDetail(): void {
    this.route.data
      .subscribe(
        (data) => {
        this.isLoading = false;
        const challenge = data.challenge;
        if(challenge == null) {
          this.challenge = null;
        } else {
          this.challenge = new Challenge(
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
              challenge.author.submissions.map(submission => new UserSubmission(submission.id, submission.challenge)),
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
          );
        }
      },
      (error) => {
        this.isLoading = false;
        this.challenge = null;
      })
  }


  ngOnInit() {
    this.getChallengeDetail();
  }

  onSubmit() {
    const formData: FormData = new FormData();
    formData.append('submission_title', this.submission.title);
    formData.append('submission_text', this.submission.text);
    formData.append('challenge', (this.challenge.id.toString()));
    this.isSubmitting = true;
    if(this.submission.file != "") {
      formData.append('submission_file', this.submission.file[0]);
    }
    this.submissionService.$saveSubmission(formData)
      .subscribe(response => {
        this.isSubmitting = false;
        let currentAuthData = this.appStateService.getState().authData;
        currentAuthData.user.submissions = [
          ...currentAuthData.user.submissions,
          new UserSubmission(response.id, response.challenge)
        ]
        this.appStateService.setAuthUserData(currentAuthData);
      }, error => {
        this.isSubmitting = false;
        if(error.status == 400) {
          this.errors = {
            ...error.error
          }
        }
      })
  }

}
