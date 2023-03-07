import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginCmpComponent } from './login-cmp/login-cmp.component';
import { AuthGuard } from './auth.guard';
import { HomeGuard } from './home.guard';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RandomDataResolverService } from './services/resolver.service';
import { GeneralDetailsComponent } from './general-details/general-details.component';
import { ReactiveSignupComponent } from './reactive-signup/reactive-signup.component';
import { SecondSignUpComponent } from './second-sign-up/second-sign-up.component';
// import { LocalStorageService } from './localStorage.service';
import { AuthLearnerGuard } from './auth-learner.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginCmpComponent,
    SignUpComponent,
    GeneralDetailsComponent,
    ReactiveSignupComponent,
    SecondSignUpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard,HomeGuard,RandomDataResolverService,AuthLearnerGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
