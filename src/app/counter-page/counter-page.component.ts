import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent implements OnInit {

  constructor() { }

  counterValue=1

  ngOnInit(): void {
  }

  inc(){
    this.counterValue++
  }

}
