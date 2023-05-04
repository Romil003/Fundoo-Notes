import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {

  token : any = localStorage.getItem('token');

  httpOption = {
    headers : new HttpHeaders({ 
      ContentType : 'application/json',
      Authorization : this.token
    })
}

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


    const httpOption = {
      headers : new HttpHeaders({ 
        ContentType : 'application/json',
        Authorization : this.token
      })
  }
  return this.httpservice.getService('notes/getNotesList',true,httpOption)
}

  updateNote(reqData:any) {
    this.token = localStorage.getItem('token');

    const httpOption = {
      headers : new HttpHeaders({ 
        ContentType : 'application/json',
        Authorization : this.token
      })
  }

  return this.httpservice.postService('notes/updateNotes',reqData,true,httpOption)

}

deleteOneNote(reqData : any){
  this.token = localStorage.getItem('token');

  const httpOption = {
    headers : new HttpHeaders({ 
      ContentType : 'application/json',
      Authorization : this.token
    })
}

return this.httpservice.postService('notes/trashNotes',reqData,true,httpOption)
}

getTrashNoteList(){
 return this.httpservice.getService('notes/getTrashNotesList',true,this.httpOption)
}

archiveOneNote(reqData : any){
  return this.httpservice.postService('notes/archiveNotes',reqData,true,this.httpOption);
}

getArchiveNotesList(){
  return this.httpservice.getService('notes/getArchiveNotesList',true,this.httpOption);
}

}
