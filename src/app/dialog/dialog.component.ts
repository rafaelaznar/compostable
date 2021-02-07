import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialog: MatDialog) {

  }



  ngOnInit(): void {
  }

  public openDialog(msg: string) {
    console.log(msg);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '250px';
    dialogConfig.data = { message: msg };
    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


