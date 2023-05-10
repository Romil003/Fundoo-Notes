import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { GetallnotesComponent } from '../getallnotes/getallnotes.component';
import { IconsComponent } from '../icons/icons.component';
import { DataService } from 'src/app/Services/DataService/data.service';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  @Output() noteEdit = new EventEmitter<any>()
@Input() noteList : any
@Input() isDeleted : any
@Input() isArchived : any;

title : any
description : any

currentValue : any
constructor(public dialog: MatDialog , public dataService : DataService) {}

  ngOnInit(){
    this.showSearchValue();
  }

openDialog(note : any): void {
  const dialogRef = this.dialog.open(UpdateComponent, {
    data: note,
  },);

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    console.log(result);
    this.noteEdit.emit(result);
    
  });
}

refreshPage(){
  this.noteEdit.emit();
}

showSearchValue(){
  this.dataService.currentMessage.subscribe((result )=>{
    this.currentValue = result;
  })
}


}
