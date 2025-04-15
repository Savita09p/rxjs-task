import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { PostsComponent } from './shared/components/posts/posts.component';
import { TodosComponent } from './shared/components/todos/todos.component';
import { UsersComponent } from './shared/components/users/users.component';
import { CommentsComponent } from './shared/components/comments/comments.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  { 
    path:'',
    redirectTo:'home',
    pathMatch:'full'

  },
  {
    path:'posts',
    component:PostsComponent
  },
  {
    path:'todos',
    component:TodosComponent
  },
  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'comments',
    component:CommentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
