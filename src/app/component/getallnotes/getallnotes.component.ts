import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/Services/NoteService/noteservice.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {

  noteArray = []

  constructor(private noteService : NoteserviceService){}
  ngOnInit() {
    this.getAllNotes();
  }

  getAllNotes(){
    console.log("Get all note api !!!");
    this.noteService.getAllNotes().subscribe((result : any) => {
      // console.log(result.data.data);
      this.noteArray = result.data.data;
      console.log(this.noteArray);
      this.noteArray.reverse();
      
    })
  }

  sendData(){
    this.getAllNotes(); // re-populate 
  }

}
