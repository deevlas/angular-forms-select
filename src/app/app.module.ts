import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AllUsersComponent } from './entity/user/components/all-users/all-users.component';
import { UserComponent } from './entity/user/components/user/user.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { bootRoutes } from './routing';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AboutComponent } from './components/about/about.component';
import { PostsComponent } from './entity/post/posts/posts.component';
import { CommentsComponent } from './entity/comment/comments/comments.component';
import { SinglePostComponent } from './entity/post/single-post/single-post.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './components/search/search.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AllUsersComponent,
    HeaderComponent,
    ContactsComponent,
    AboutComponent,
    PostsComponent,
    CommentsComponent,
    SinglePostComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(bootRoutes),
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
