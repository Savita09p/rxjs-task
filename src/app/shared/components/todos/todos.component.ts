import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, OnDestroy {
intervalSub !: Subscription;
postsTitlesArr !: Array<string>
completedTodoArr !:Array<any>
  constructor(
    private _postsService : PostsService
  ) { }

  ngOnInit(): void {
  //  this.intervalSub = this._postsService.fetchAllPosts()
  //      .subscribe((res : Array<any>) => {
  //        this.postsTitlesArr = res
  //      })

    this._postsService.completedTodos()
      .subscribe((res : Array<any>)=>{
        //this.completedTodoArr=res.filter(todo =>completed === true)
        console.log(res);
        this.postsTitlesArr = res
      })

  }

  ngOnDestroy(): void {
  //  this.intervalSub.unsubscribe()
  }


}
