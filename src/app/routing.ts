import {AllUsersComponent} from './entity/user/components/all-users/all-users.component';
import {Routes} from '@angular/router';
import {ContactsComponent} from './components/contacts/contacts.component';
import {AboutComponent} from './components/about/about.component';
import {PostsComponent} from './entity/post/posts/posts.component';
import {HeaderComponent} from './components/header/header.component';
import {CommentsComponent} from './entity/comment/comments/comments.component';
import {UserComponent} from './entity/user/components/user/user.component';
import {SinglePostComponent} from './entity/post/single-post/single-post.component';
import {SearchComponent} from './components/search/search.component';


export const bootRoutes: Routes = [
  // {path: '', component: HeaderComponent},
  {path: 'users', component: AllUsersComponent},
  {path: 'search', component: SearchComponent},
  {path: 'users/:id', component: UserComponent,
      children: [
        {
          path: '', component: PostsComponent},
        {
          path: 'posts/:id', component: SinglePostComponent,
            children: [{
              path: '', component: CommentsComponent
            }]
        }]
    },
  {path: 'contacts', component: ContactsComponent},
  {path: 'about', component: AboutComponent}
  // {path: 'posts/:id', component: CommentsComponent}
  ];
