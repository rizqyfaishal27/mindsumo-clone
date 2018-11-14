import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment.prod';
import { AppStateService } from './services/app-state.service';
import { environment as env } from '@env/environment';
import { AuthService } from './services/auth.service';
import { Auth } from './models/auth';
import { User, UserSubmission } from './models/user';
import { Skill } from './models/skill';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'Suara.in';

  constructor(
    public appStateService: AppStateService,
  ) {}

  ngOnInit() {
  }
  
  
}
