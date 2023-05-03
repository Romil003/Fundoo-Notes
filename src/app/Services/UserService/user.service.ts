import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token : any
  constructor(private httpService : HttpService) { }

  signupService(reqData : any){
    this.token = localStorage.getItem('token');

    const httpOption = {
      headers : new HttpHeaders({ 
        ContentType : 'application/json',
        Authorization : this.token
      })
    }
    console.log("Creating data from user service =>");
    return this.httpService.postService('user/userSignUp',reqData,false,httpOption)
  }

  loginService(reqData : any){
    console.log("Try to log in => ")
    return this.httpService.postService('user/login',reqData,false,{})
  }

  resetPasswordService(reqData : any){
    console.log("Trying to reset password !!!");
    return this.httpService.postService('user/reset',reqData,false,{});
  }
}
