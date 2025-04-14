import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(
    private _postsService : PostsService
  ) { }

  ngOnInit(): void {
    this._postsService.fetchAllPosts()
      .subscribe(res => {
        console.log(res);
      })
  }

}
