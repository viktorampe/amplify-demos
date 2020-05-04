import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BloglistComponent } from './components/blogs/bloglist/bloglist.component';
import { BlogdetailComponent } from './components/blogs/blogdetail/blogdetail.component';
import { PostdetailComponent } from './components/posts/postdetail/postdetail.component';


const routes: Routes = [
  {path: 'blogs', component: BloglistComponent},
  {path: 'blog/:id', component: BlogdetailComponent},
  {path: 'post/:id', component: PostdetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
