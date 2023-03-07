import { Component } from '@angular/core';
import { SignUpComponent } from '../sign-up/sign-up.component';
@Component({
  selector: 'app-general-details',
  templateUrl: './general-details.component.html',
  styleUrls: ['./general-details.component.css']
})
export class GeneralDetailsComponent {
  generalformData = { address: '', phone: '' };
  completeData = {};
  constructor(
    private signUpCmp : SignUpComponent
  ){}
  onSubmit() {
    if(this.generalformData.address=="" || this.generalformData.phone == ""){
      alert("please fill all the details");
    }
    this.completeData = Object.assign({}, this.generalformData, this.signUpCmp.formData);
    console.log(this.completeData);
  }
}
