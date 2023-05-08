import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NoteserviceService } from 'src/app/Services/NoteService/noteservice.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Output() repopulatePage = new EventEmitter<any>()
  @Input() note1 : any
  display : boolean = true
  showUnarchive : boolean = false

  isSelected : boolean = false
   colorName : any;
  
  constructor(private noteService :NoteserviceService){}

  ngOnInit(){
    if(this.note1.isDeleted==true){
      this.display = false;
    }
    else{
      this.display = true;
    }

    if(this.note1.isArchived==true){
      this.showUnarchive = true;
    } else{
      this.showUnarchive = false;
    }
  }

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

  selectingColor() {
    this.isSelected = true;
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


}
