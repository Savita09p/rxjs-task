import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from '../../services/posts.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  usersArr !: Array<any>
  postsTitlesArr !: Array<string>
  constructor(
    private _postsService : PostsService
  ) { }

  ngOnInit(): void {
    this._postsService.UsersTodo()
     .subscribe((res:Array<any>) =>{
       console.log(res)
       this.usersArr = res
     })
  }
  ngOnDestroy(): void {
    
  }
}
