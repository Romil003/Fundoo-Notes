import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BaseUrl='http://fundoonotes.incubation.bridgelabz.com/api/'
  constructor(private httpClient: HttpClient) { }

  postService(url:string,reqPayload:any,token:boolean,httpAuthOptions:any){
    console.log("Data in http service =>",reqPayload);
    return this.httpClient.post(this.BaseUrl + url,reqPayload,token && httpAuthOptions)
  }
  
  getService(url:string,token:boolean,httpAuthOptions:any){
    console.log("Getting data from database =>");
    return this.httpClient.get(this.BaseUrl+url,token && httpAuthOptions);
  }
}
