import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/Services/DataService/data.service';
import { NoteserviceService } from 'src/app/Services/NoteService/noteservice.service';

@Component({
  selector: 'app-createnotes',
  templateUrl: './createnotes.component.html',
  styleUrls: ['./createnotes.component.scss']
})
export class CreatenotesComponent implements OnInit {
@Output() newNote = new EventEmitter<any>()
  title : any
  description : any
  show : boolean = false;

  colorSelected : any

  constructor(private noteService : NoteserviceService,private dataService : DataService){}
  ngOnInit(){
    
  }
  showing(){
    this.show = true;
  }

  addNotes(){
    this.colorSelected = this.dataService.selectedColor;
    console.log("adding notes api");
    let reqData = {
      title : this.title,
      description : this.description,
      color : this.colorSelected
    }

    this.noteService.createNote(reqData).subscribe((result) => {
      console.log(result);
      this.show = false;
      this.title = '';
      this.description = '';
      this.newNote.emit(reqData);
    })
    
  }

}
