import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/API.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogcreateblogComponent } from 'src/app/ui/dialogcreateblog/dialogcreateblog.component';
import { DialogcreatecommentComponent } from 'src/app/ui/dialogcreatecomment/dialogcreatecomment.component';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.scss']
})
export class PostdetailComponent implements OnInit {

  postId: string;
  post: any;

  constructor(
    private apiService: APIService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
     // get customer id from route
     this.route.paramMap.subscribe(params => {
      this.postId = params.get('id');
      this.fetchPost();
    });

    // subscribe on createcomment
    this.apiService.OnCreateCommentListener.subscribe(()=> {
      this.fetchPost();
    })

  }



  openCreateBlogDialog(){
    const dialogRef = this.dialog.open(DialogcreatecommentComponent, {
      width: '450px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.apiService.CreateComment({content: result, postID: this.post.id});
      }
    });
  }

  fetchPost() {
    this.apiService.GetPost(this.postId)
      .then((post)=> {
        this.post = post;
        console.log(post)
      })
      .catch(err => console.log(err))
  }

  deletePost() {
    this.apiService.DeletePost({id: this.post.id})
      .then(data => {
        console.log(data);
        this.router.navigate(['/blog', this.post.blog.id])
      })
      .catch(err => console.log(err));
  }

}
