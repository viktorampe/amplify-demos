import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BloglistComponent } from './components/blogs/bloglist/bloglist.component';
import { BlogdetailComponent } from './components/blogs/blogdetail/blogdetail.component';
import { PostdetailComponent } from './components/posts/postdetail/postdetail.component';
import { DialogcreateblogComponent } from './ui/dialogcreateblog/dialogcreateblog.component';
import { DialogcreatepostComponent } from './ui/dialogcreatepost/dialogcreatepost.component';
import { DialogcreatecommentComponent } from './ui/dialogcreatecomment/dialogcreatecomment.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    BloglistComponent,
    BlogdetailComponent,
    PostdetailComponent,
    DialogcreateblogComponent,
    DialogcreatepostComponent,
    DialogcreatecommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
