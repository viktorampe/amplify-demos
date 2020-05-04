import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogcreatecomment',
  templateUrl: './dialogcreatecomment.component.html',
  styleUrls: ['./dialogcreatecomment.component.scss']
})
export class DialogcreatecommentComponent implements OnInit {

  content: string;

  constructor(
    public dialogRef: MatDialogRef<DialogcreatecommentComponent>,
  ) { }


  ngOnInit(): void {
  }

  createComment() {
    this.dialogRef.close(this.content)
  }

}
