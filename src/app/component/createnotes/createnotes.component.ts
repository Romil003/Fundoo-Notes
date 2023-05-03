import { Component, EventEmitter, Output } from '@angular/core';
import { NoteserviceService } from 'src/app/Services/NoteService/noteservice.service';

@Component({
  selector: 'app-createnotes',
  templateUrl: './createnotes.component.html',
  styleUrls: ['./createnotes.component.scss']
})
export class CreatenotesComponent {
@Output() newNote = new EventEmitter<any>()
  title : any
  description : any
  show : boolean = false;

  constructor(private noteService : NoteserviceService){}
  showing(){
    this.show = true;
  }

  addNotes(){
    console.log("adding notes api");
    let reqData = {
      title : this.title,
      description : this.description
    }

    this.noteService.createNote(reqData).subscribe((result) => {
      console.log(result);
      this.show = false;
      this.title = '';
      this.description = '';
      this.newNote.emit(reqData);
    })
    
  }

  // sendData() {
  //   let reqData = {
  //     title : this.title,
  //     description : this.description
  //   }
  //   this.newNote.emit(reqData);
  // }
}
