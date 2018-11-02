import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeDetailHeaderComponent } from './challenge-detail-header.component';

describe('ChallengeDetailHeaderComponent', () => {
  let component: ChallengeDetailHeaderComponent;
  let fixture: ComponentFixture<ChallengeDetailHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeDetailHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeDetailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
