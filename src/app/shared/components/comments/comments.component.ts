import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit, OnDestroy {
  commentsArr !: Array<any>
  constructor(
    private _postsService : PostsService
  ) { }
  ngOnInit(): void {
    this._postsService.CommentsTodo()
     .subscribe((res:Array<any>) =>{
       console.log(res)
       this.commentsArr = res
     })
  }
  ngOnDestroy(): void {
    
  }
  

}
