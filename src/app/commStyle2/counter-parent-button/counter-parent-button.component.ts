import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-parent-button',
  templateUrl: './counter-parent-button.component.html',
  styleUrls: ['./counter-parent-button.component.css']
})
export class CounterParentButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  couterValue = 1;

  inc() {
    this.couterValue++;
    console.log(this.couterValue)
  }

}
