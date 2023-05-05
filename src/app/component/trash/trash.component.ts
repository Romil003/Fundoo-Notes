import { Component, Input, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/Services/NoteService/noteservice.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  trashArray : any;

  constructor(public noteService : NoteserviceService){}

  ngOnInit(): void {
    this.displayTrashNotes();
  }

 displayTrashNotes(){
  this.noteService.getTrashNoteList().subscribe((result : any)=>{
    console.log(result);
    this.trashArray = result.data.data;
    
  })
 }

 showingTrashNotes(){
  this.displayTrashNotes();
 }

   


}
