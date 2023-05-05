import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NoteserviceService } from 'src/app/Services/NoteService/noteservice.service';
import { GetallnotesComponent } from '../getallnotes/getallnotes.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  
  title : any
  description : any
  constructor(
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private noteService : NoteserviceService
  ) {
    this.title = data.title
    this.description = data.description
  }

  onNoClick(): void {
    let reqData = {
      noteId : this.data.id,
      title : this.title,
      description : this.description
    }

    this.noteService.updateNote(reqData).subscribe((result) => {
      console.log(result);
      
      this.dialogRef.close();
    
    })
    // this.getNotes.getAllNotes();
  }

}
