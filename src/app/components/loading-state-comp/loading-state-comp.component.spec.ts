import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingStateCompComponent } from './loading-state-comp.component';

describe('LoadingStateCompComponent', () => {
  let component: LoadingStateCompComponent;
  let fixture: ComponentFixture<LoadingStateCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingStateCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingStateCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
