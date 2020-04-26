import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-parent-input',
  templateUrl: './counter-parent-input.component.html',
  styleUrls: ['./counter-parent-input.component.css']
})
export class CounterParentInputComponent implements OnInit {

  constructor() { }

  receivedValue = 0;

  ngOnInit(): void {
  }

  counterValueHandler(data) {
    console.log('Data Recevied : ', data);
    this.receivedValue = data;
  }

}
