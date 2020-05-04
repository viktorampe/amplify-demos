import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogcreatepost',
  templateUrl: './dialogcreatepost.component.html',
  styleUrls: ['./dialogcreatepost.component.scss']
})
export class DialogcreatepostComponent implements OnInit {

  postTitle: string;

  constructor(
    public dialogRef: MatDialogRef<DialogcreatepostComponent>,
  ) { }


  ngOnInit(): void {
  }

  createPost() {
    this.dialogRef.close(this.postTitle)
  }

}
