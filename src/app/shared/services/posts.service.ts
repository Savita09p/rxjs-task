import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  BASE_URL : string = environment.baseurl;
  POST_URL : string = `${environment.baseurl}/posts`;
  constructor(
    private _http : HttpClient
  ) { }

  fetchAllPosts(): Observable<any> {
    return this._http.get<any>(this.POST_URL)
  }
}
