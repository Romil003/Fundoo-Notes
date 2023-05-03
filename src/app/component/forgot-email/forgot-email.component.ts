import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-forgot-email',
  templateUrl: './forgot-email.component.html',
  styleUrls: ['./forgot-email.component.scss']
})
export class ForgotEmailComponent implements OnInit  {

  emailForm! : FormGroup

  constructor(private formBuilder : FormBuilder,private userService : UserService){}

  ngOnInit(){
    this.emailForm = this.formBuilder.group({
      email : ['',Validators.required]
    })
  }

  sendMailToResetPassword(){
    if(this.emailForm.valid){

      let reqData = {
        email : this.emailForm.value.email
      }

      this.userService.resetPasswordService(reqData).subscribe((result) => {
        console.log(result);
        console.log("Mail send to user");
      })
    } else {
      console.log("Email not found !!!");
      
    }
  }

}
