import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  interval$ = interval(1000);
  intervalSub !: Subscription
  constructor() { }

  ngOnInit(): void {
    //this.intervalSub=interval(1000)
    //  .subscribe((res)=>{  //subscibe is imp to get data
    //    console.log(res);
    //  })
  }
  
  ngOnDestroy(): void {
  //  this.intervalSub.unsubscribe();//obeservable is expensive so need to unsubscribe
  }

}
