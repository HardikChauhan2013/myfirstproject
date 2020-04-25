import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  couterValue = 1;

  inc() {
    this.couterValue++;
  }
}
