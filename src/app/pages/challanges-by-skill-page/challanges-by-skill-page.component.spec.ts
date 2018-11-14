import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallangesBySkillPageComponent } from './challanges-by-skill-page.component';

describe('ChallangesBySkillPageComponent', () => {
  let component: ChallangesBySkillPageComponent;
  let fixture: ComponentFixture<ChallangesBySkillPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallangesBySkillPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallangesBySkillPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
