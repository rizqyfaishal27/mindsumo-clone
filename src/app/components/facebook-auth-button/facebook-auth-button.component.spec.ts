import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookAuthButtonComponent } from './facebook-auth-button.component';

describe('FacebookAuthButtonComponent', () => {
  let component: FacebookAuthButtonComponent;
  let fixture: ComponentFixture<FacebookAuthButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookAuthButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookAuthButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
