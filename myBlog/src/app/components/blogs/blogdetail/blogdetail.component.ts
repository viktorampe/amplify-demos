import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/API.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogcreateblogComponent } from 'src/app/ui/dialogcreateblog/dialogcreateblog.component';
import { DialogcreatepostComponent } from 'src/app/ui/dialogcreatepost/dialogcreatepost.component';

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.scss']
})
export class BlogdetailComponent implements OnInit {

  blogId: string;
  blog: any;
  posts: any[];

  constructor(
    private apiService: APIService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    // get customer id from route
    this.route.paramMap.subscribe(params => {
      this.blogId = params.get('id');
      this.fetchBlog();
    });

    this.apiService.OnCreatePostListener.subscribe(()=> {
      this.fetchBlog()
    })
  }

  navigateToPostDetails(post: any) {
    this.router.navigate(['/post', post.id])
  }

  openCreatePostDialog(){
    const dialogRef = this.dialog.open(DialogcreatepostComponent, {
      width: '450px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.apiService.CreatePost({title: result, blogID: this.blog.id})
          .catch(err => console.log(err))
      }
    });
  }

  fetchBlog() {
    this.apiService.GetBlog(this.blogId)
      .then((blog)=> {
        this.blog = blog;
        console.log(blog)
      })
  }

  deleteBlog() {
    this.apiService.DeleteBlog({id: this.blog.id})
      .then((data) =>{
        console.log(data);
        this.router.navigate(['/blogs'])
      })
      .catch(err => console.log(err))
  }

}


//  "Variable 'input' has an invalid value. Expected type 'Map' but was 'String'. Variables for input objects must be an instance of type 'Map'."
