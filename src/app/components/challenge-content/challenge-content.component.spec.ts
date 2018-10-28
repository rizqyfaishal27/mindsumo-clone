import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeContentComponent } from './challenge-content.component';

describe('ChallengeContentComponent', () => {
  let component: ChallengeContentComponent;
  let fixture: ComponentFixture<ChallengeContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
