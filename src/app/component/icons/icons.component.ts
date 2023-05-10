import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/Services/DataService/data.service';
import { NoteserviceService } from 'src/app/Services/NoteService/noteservice.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Output() repopulatePage = new EventEmitter<any>()
  @Output() selectedDataEmitter = new EventEmitter<string>();
  @Input() note1 : any
  @Input() isDeleted : any;
  @Input() isArchived : any
  display : boolean = true
  showUnarchive : boolean = false

  // isSelected : boolean = false

  colorName : any;
  isNoteIdPresent : boolean = false
  noteID : any
  isTrashed : boolean = false
  isOnlyArchived : boolean = false
  constructor(private noteService :NoteserviceService,private dataService : DataService){}

  ngOnInit(){
    this.isTrashed = this.isDeleted

    this.isOnlyArchived = this.isArchived
    if(this.isDeleted){
      this.display = false;
    }
    else{
      this.display = true;
    }

    if(this.isArchived){
      this.showUnarchive = true;
    } else{
      this.showUnarchive = false;
    }
  }

  // onSelect(){
  //   this.dataService.selectedColor = this.colorName;
  // }

  deleteNote(){
 
    let reqData ={
      noteIdList:[this.note1.id],
      isDeleted:true
      }
    
    this.noteService.deleteOneNote(reqData).subscribe((result)=>{
      console.log(result);
      this.repopulatePage.emit(result);
    })
  }

  archiveNote(){

    let reqData = {
      noteIdList:[this.note1.id],
      isArchived:true
    }

    this.noteService.archiveOneNote(reqData).subscribe((result)=>{
      console.log(result);
      this.repopulatePage.emit(result);
      
    })
  }

  permanentDelete(){

    let reqData ={
      noteIdList:[this.note1.id],
      title : this.note1.title,
      description : this.note1.description
    }

    this.noteService.permanentDeleteNote(reqData).subscribe((result) => {
      console.log(result);
      this.repopulatePage.emit(result);
      
    })
  }

  restoreNote(){
    let reqData ={
      noteIdList:[this.note1.id],
      isDeleted:false
      }
    
    this.noteService.deleteOneNote(reqData).subscribe((result)=>{
      console.log(result);
      this.repopulatePage.emit(result);
    })
  }

  unarchiveNote(){

    let reqData = {
      noteIdList:[this.note1.id],
      isArchived:false
    }

    this.noteService.archiveOneNote(reqData).subscribe((result)=>{
      console.log(result);
      this.repopulatePage.emit(result);
      
    })
  }

  onColorClick(color : any){

    if(this.note1 == null){
    this.dataService.selectedColor = color;
    }
    // else if(this.note1 != null){

    // }
     else {
      this.changingBgColor(color);
    } 

  }

  changingBgColor(color:any){
      this.colorName = color;

      let reqData = {
        noteIdList:[this.note1.id],
        color : this.colorName
      }
    
      this.noteService.changeBackgroundColorOfNote(reqData).subscribe((result) => {
        console.log("changing color of notes");
        this.repopulatePage.emit(result);
      })
}

updateColor(color : any){
  this.selectedDataEmitter.emit(color);
}

}
