import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveSignupComponent } from './reactive-signup.component';

describe('ReactiveSignupComponent', () => {
  let component: ReactiveSignupComponent;
  let fixture: ComponentFixture<ReactiveSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
