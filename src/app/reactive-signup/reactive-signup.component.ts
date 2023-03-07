import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsDataService } from '../services/forms-data.service';

@Component({
  selector: 'app-reactive-signup',
  templateUrl: './reactive-signup.component.html',
  styleUrls: ['./reactive-signup.component.css']
})
export class ReactiveSignupComponent implements OnInit{

  category = ['Learner','Teacher','Parent'];
  signUpForm: FormGroup;
  constructor(
    private router:Router,
    private formsDataService : FormsDataService
  ){}


  ngOnInit(){
    let res : any = this.formsDataService.getFormData();
    let previousFill;
    if(res){
      console.log(res,"res is the herere");
      previousFill = res.category
    }
    console.log(previousFill,"previousFill");
    this.signUpForm = new FormGroup({
      'category':new FormControl(previousFill,[Validators.required])
    });
  }

  onSubmit(){
    console.log(this.signUpForm,"here is the sign up form");
  }

  next(){
    this.formsDataService.completeForm = Object.assign({},this.formsDataService.completeForm,this.signUpForm.value);
    this.formsDataService.setFormData(this.formsDataService.completeForm);
    
    if(this.signUpForm.value.category === 'Teacher' || this.signUpForm.value.category ==='Parent'){
      let routePath =this.signUpForm.value.category.toLowerCase();
        this.router.navigate([`/register-${routePath}`])
    }
    else{
      this.router.navigate(['/learner-age-check'])
    }
    
  }

}
