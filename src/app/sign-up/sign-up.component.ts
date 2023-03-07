import { Component,Injectable, OnInit } from '@angular/core';
import { FormGroup,NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../localStorage.service';
import { FormsDataService } from '../services/forms-data.service';

@Injectable({
  providedIn:'root'
})
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  formData = { 
    firstName: '',
    lastName:'',
    email: '',
    password:'',
    country:'',
   };
   constructor(
    private localStorageService:LocalStorageService,
    private formsDataService:FormsDataService,
    private router:Router
   ){


    // const navigation = this.router.getCurrentNavigation();
    // console.log(navigation,"navigation property");
    // console.log(typeof navigation,"navigation property");
    

    // const data =  navigation.extras && navigation.extras.state;
    // console.log(data,"type of data");
    // if (typeof data === 'string') {
    //   this.formData.country = data;
    // }
    // console.log(data,"constructor value");
    
   }
   
  ngOnInit(): void {
    if(this.formsDataService.getFormData()){
      let res:any = this.formsDataService.getFormData();
      console.log(res,"res  inn sign up page last");
      this.formData.country = res.country;
    }

  }

  onSubmit(form:NgForm) {
    console.log(form,"form value");
    this.formsDataService.completeForm = Object.assign({},this.formsDataService.completeForm,form.value)
    this.formsDataService.setFormData(this.formsDataService.completeForm);
    console.log(this.formsDataService.completeForm,"complete form Value");
    
  }
 resetForm(form:NgForm){
  form.reset();  
 }

 backNavigate(){
  console.log(this.router.url,"this.router.urlthis.router.url");
  
  if(this.router.url === '/register-learner'){
    this.router.navigate(['/learner-age-check']);
  }
  else  if(this.router.url === '/register-teacher'){
    this.router.navigate(['/regoptions']);
  }
  else  if(this.router.url === '/register-parent'){
    this.router.navigate(['/regoptions']);
  }
 }
}











 // if(this.formData.firstName=="" || this.formData.email == "" || this.formData.lastName == ""|| this.formData.password == "" || this.formData.country == ""){
    //   alert("please fill all the details");
    // }
    // if(form.valid == false){
    //   alert("Please fill the details correctly");
    //   return;
    // }
    // let obj = form.value;
    // let parsedObj = JSON.stringify(obj);
    // console.log(parsedObj,"parsedOnject");
    // this.localStorageService.setItem("user-details",parsedObj);
    // console.log(form);