import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSignUpComponent } from './second-sign-up.component';

describe('SecondSignUpComponent', () => {
  let component: SecondSignUpComponent;
  let fixture: ComponentFixture<SecondSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondSignUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
