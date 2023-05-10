import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/Services/NoteService/noteservice.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  archiveArray : any
  isArchived : boolean = true;

  constructor(public noteService : NoteserviceService){}

  ngOnInit(){
    this.displayArchiveNotes();
  }

  displayArchiveNotes(){
    this.noteService.getArchiveNotesList().subscribe((result:any)=>{
      console.log(result);
      this.archiveArray = result.data.data;
    })
  }

  showingArchiveNotesRefresh(){
    this.displayArchiveNotes();
  }

}
