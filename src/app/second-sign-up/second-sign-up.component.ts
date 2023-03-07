import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsDataService } from '../services/forms-data.service';

@Component({
  selector: 'app-second-sign-up',
  templateUrl: './second-sign-up.component.html',
  styleUrls: ['./second-sign-up.component.css']
})
export class SecondSignUpComponent implements OnInit{
  @ViewChild('mySecondForm') secondForm : NgForm; 
  
  secondFormData = { 
    country:'',
    age:''
   };
   constructor(
    private router:Router,
    private formsDataService:FormsDataService
   ){}
  ngOnInit(): void {
    let res : any = this.formsDataService.getFormData();
    if(res){
      console.log(res,"res is the herere");
      this.secondFormData.country = res.country;
      this.secondFormData.age = res.age;
    }
  }
   onSubmit(form:NgForm){
    console.log(form,"this is the form");
   }
   next(form:NgForm){
    console.log(form.value,"form value");
    this.formsDataService.completeForm = Object.assign({},this.formsDataService.completeForm,form.value)
    this.formsDataService.setFormData(this.formsDataService.completeForm); 
    this.router.navigate(['/register-learner'],{state:form.value.country});
   }
   navigatePrev(){
    this.router.navigate(['/regoptions']);
   }
}
