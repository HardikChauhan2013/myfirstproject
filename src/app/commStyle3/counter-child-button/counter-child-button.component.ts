import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter-child-button',
  templateUrl: './counter-child-button.component.html',
  styleUrls: ['./counter-child-button.component.css']
})
export class CounterChildButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  counterValueChanged = new EventEmitter()

  couterValue = 0;

  inc() {
    console.log('Counter Value', this.couterValue);
    this.couterValue++;
    this.counterValueChanged.emit(this.couterValue);
  }

}
