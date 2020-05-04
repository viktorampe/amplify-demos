import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogcreateblog',
  templateUrl: './dialogcreateblog.component.html',
  styleUrls: ['./dialogcreateblog.component.scss']
})
export class DialogcreateblogComponent implements OnInit {

  blogTitle: string;

  constructor(
    public dialogRef: MatDialogRef<DialogcreateblogComponent>,
  ) { }


  ngOnInit(): void {
  }

  createBlog() {
    this.dialogRef.close(this.blogTitle)
  }

}
