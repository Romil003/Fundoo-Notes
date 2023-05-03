import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserService/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  loginForm! : FormGroup

  constructor(private route : Router,private formBuilder : FormBuilder, private userService : UserService,private _snackBar: MatSnackBar){}

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      email : ['',Validators.required],
      password : ['',Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid) {

      let reqData = {
        email : this.loginForm.value.email,
        password : this.loginForm.value.password,
        service : "advance"
      }

      this.userService.loginService(reqData).subscribe((result:any) => {
        console.log(result);
        this._snackBar.open("Log-in successful","",{
          duration : 2000
        })

        localStorage.setItem('token',result.id);

        this.route.navigateByUrl('/dashboard');
      })
    } else {
      console.log("User not get logged-in !!!");
      this._snackBar.open("Log-in unsuccessful!!!!",'Undo',{
        duration :3000
      })
    }
  }

}
