import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { GetallnotesComponent } from '../getallnotes/getallnotes.component';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent {
  @Output() noteEdit = new EventEmitter<any>()
@Input() noteList : any

title : any
description : any

constructor(public dialog: MatDialog) {}

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

}
