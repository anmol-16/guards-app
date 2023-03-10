import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCmpComponent } from './login-cmp.component';

describe('LoginCmpComponent', () => {
  let component: LoginCmpComponent;
  let fixture: ComponentFixture<LoginCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginCmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
