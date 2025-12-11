import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.html',
})
export class CounterPage {
  counter = 10;
  counterSignal = signal(10);

  // constructor() {
  //   setInterval(() => {
  //     // this.increaseBy(1);
  //     console.log('Tick');
  //   }, 2000);
  // }

  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }
  resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
