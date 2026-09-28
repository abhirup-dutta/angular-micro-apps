import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  imports: [],
  templateUrl: './traffic-light.html',
  styleUrl: './traffic-light.scss',
})
export class TrafficLight {

  durationList = [2000, 500, 3000];
  lightIndex = signal<number>(0);
  timer: any;

  ngOnInit() {
    this.startCycle();
  }

  startCycle() {
    let duration = this.durationList[this.lightIndex()];
    this.timer = setTimeout(() => {
      this.lightIndex.update(prev => (prev + 1)% this.durationList.length);
      this.startCycle();
    }, duration);
  }
}
