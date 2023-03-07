import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginCmpComponent } from './login-cmp/login-cmp.component';
import {AuthGuard} from './auth.guard'
import { HomeGuard } from './home.guard';
import { SignUpComponent } from './sign-up/sign-up.component';
import {RandomDataResolverService} from './services/resolver.service';
import { GeneralDetailsComponent } from './general-details/general-details.component';
import { ReactiveSignupComponent } from './reactive-signup/reactive-signup.component';
import { SecondSignUpComponent } from './second-sign-up/second-sign-up.component';
import { AuthLearnerGuard } from './auth-learner.service';
const routes: Routes = [
  {path:'',canActivate:[AuthGuard],component:LoginCmpComponent},
  {path:'home',canActivate:[HomeGuard],component:HomeComponent,resolve:{data:RandomDataResolverService}},
  {path:'regoptions',component:ReactiveSignupComponent},
  {path:'learner-age-check',component:SecondSignUpComponent},
  {path:'register-learner',canActivate:[AuthLearnerGuard],component:SignUpComponent},
   {path:'register-teacher',canActivate:[AuthLearnerGuard],component:SignUpComponent},
   {path:'register-parent',canActivate:[AuthLearnerGuard],component:SignUpComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
