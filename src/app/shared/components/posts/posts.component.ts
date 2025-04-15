import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  intervalSub !: Subscription ;
postsTitlesArr !: Array<string>
  constructor(
    private _postsService : PostsService
  ) { }

  ngOnInit(): void {
    this._postsService.fetchAllPosts()
      .subscribe((res : Array<any>)=> {
        console.log(res);
        this.postsTitlesArr = res 
        //this.postsTitlesArr = res.map(post => post.title)
      });
  };

}
