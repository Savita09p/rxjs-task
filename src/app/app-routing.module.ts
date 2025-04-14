import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { PostsComponent } from './shared/components/posts/posts.component';
import { TodosComponent } from './shared/components/todos/todos.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
