import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
intervalSub !: Subscription;
postsTitle !: Array<string>
  constructor(
    private _postsService : PostsService
  ) { }

  ngOnInit(): void {
     this._postsService.fetchAllPosts()
       .subscribe((res : Array<any>) => {
          this.postsTitle = res.map(post => {
            return post.title
          })
       })
  }


}
