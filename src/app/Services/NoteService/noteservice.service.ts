import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {

  token : any

  constructor(private httpservice : HttpService) { }

  createNote(reqData : any){
    this.token = localStorage.getItem('token');

    const httpOption = {
      headers : new HttpHeaders({ 
        ContentType : 'application/json',
        Authorization : this.token
      })
    }
    return this.httpservice.postService('notes/addNotes',reqData,true,httpOption)
  }

  getAllNotes(){
    this.token = localStorage.getItem('token');

    const httpOption = {
      headers : new HttpHeaders({ 
        ContentType : 'application/json',
        Authorization : this.token
      })
  }
  return this.httpservice.getService('notes/getNotesList',true,httpOption)
}

}
