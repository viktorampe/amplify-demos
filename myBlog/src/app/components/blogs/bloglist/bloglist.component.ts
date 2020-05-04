import { Component, OnInit } from '@angular/core';
import { APIService } from '../../../API.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogcreateblogComponent } from 'src/app/ui/dialogcreateblog/dialogcreateblog.component';


@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.scss']
})
export class BloglistComponent implements OnInit {

  blogs: any[];

  constructor(
    private apiService: APIService,
    private router: Router,
    public dialog: MatDialog,
  ) { }

  async ngOnInit() {
    // fetch blogs
    this.fetchBlogs();
    // Subscribe for realtime data updates
    this.apiService.OnCreateBlogListener.subscribe((event: any) => {
      const data = event.value.data.onCreateBlog;
      this.blogs = [...this.blogs, data];
    });

    this.apiService.OnCreatePostListener.subscribe(()=> {
      this.fetchBlogs()
    })
  }

  navigateToDetails(blog: any) {
    this.router.navigate(['/blog', blog.id]);
  }

  fetchBlogs() {
    this.apiService.ListBlogs()
      .then((event) => {
        this.blogs = event.items;
      })
      .catch(err => console.log(err))
  }

  openCreateBlogDialog(){
    const dialogRef = this.dialog.open(DialogcreateblogComponent, {
      width: '450px',
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.apiService.CreateBlog({name: result})
          .then(res => console.log(res))
          .catch(err => console.log(err))
      }
    });
  }

}

