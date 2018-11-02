import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartDraftingButtonComponent } from './start-drafting-button.component';

describe('StartDraftingButtonComponent', () => {
  let component: StartDraftingButtonComponent;
  let fixture: ComponentFixture<StartDraftingButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartDraftingButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartDraftingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
