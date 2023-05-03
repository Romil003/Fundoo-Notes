import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserService/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signupForm! : FormGroup;
  
  showpwd : boolean = false;

  constructor(private formBuilder: FormBuilder, private userService : UserService,private _snackBar: MatSnackBar) {
  }

  ngOnInit(){
    this.signupForm = this.formBuilder.group({
      firstname : ['',[Validators.required]],
      lastname : ['',[Validators.required]],
      username : ['',Validators.required],
      password : ['',[Validators.required,Validators.minLength(8)]],
      confirmpassword : ['',[Validators.required,Validators.minLength(8)]],
    })
  }


  signup(){
    if(this.signupForm.valid){
      console.log("Creating account with below data =>", this.signupForm.value);
      let reqData = {
        firstName : this.signupForm.value.firstname,
        lastName : this.signupForm.value.lastname,
        email : this.signupForm.value.username,
        password : this.signupForm.value.password,
        service : "advance"

      }

      this.userService.signupService(reqData).subscribe((result : any) => {
        console.log(result);
        this._snackBar.open("Register Successful","Undo",{
          duration : 2000
        })
      })
    }
    else {
      console.log("Data not generated!!!!");
      this._snackBar.open("Please fill all details properly","Undo",{
        duration : 2000
      })
    }
  }

  showPassword() {
    // const passwordInput = document.getElementById("password") as HTMLInputElement;
    // const showPasswordClick = this.signupForm.get("showpassword");

    // if(showPasswordClick?.value){
    //   passwordInput.type = "text";
    // } else {
    //   passwordInput.type = "password";
    // }

    // if(this.signupForm.value.password === 'password'){
    //   this.signupForm.value.password = 'text';
    //   this.showpwd = true;
    // } else {
    //   this.signupForm.value.password = 'password';
    //   this.showpwd = false;
    // }

    this.showpwd = !this.showpwd ;
  }

}
