import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeDetailPageComponent } from './challenge-detail-page.component';

describe('ChallengeDetailPageComponent', () => {
  let component: ChallengeDetailPageComponent;
  let fixture: ComponentFixture<ChallengeDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
