import { Component, Input } from '@angular/core';
import { NoteserviceService } from 'src/app/Services/NoteService/noteservice.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent {

  @Input() note1 : any
  
  constructor(private noteService :NoteserviceService){}

  deleteNote(){
 
    let reqData ={
      noteIdList:[this.note1.id],
      isDeleted:true
      }
    
    this.noteService.deleteOneNote(reqData).subscribe((result)=>{
      console.log(result);
    })
  }

  archiveNote(){

    let reqData = {
      noteIdList:[this.note1.id],
      isArchived:true
    }

    this.noteService.archiveOneNote(reqData).subscribe((result)=>{
      console.log(result);
      
    })
  }
}
