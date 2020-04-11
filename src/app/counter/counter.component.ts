import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counterValue=1

  constructor() { }

  ngOnInit(): void {
  }

  increment(){
    this.counterValue++;
  }

  decremnet(){
    this.counterValue--;
  }

  update(value)
  {
    this.counterValue = value
  }
}
