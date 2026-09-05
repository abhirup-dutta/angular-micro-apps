import { Component } from '@angular/core';
import {signal, computed} from '@angular/core';

@Component({
  selector: 'app-stars',
  imports: [],
  templateUrl: './stars.html',
  styleUrl: './stars.scss',
})
export class Stars {

  total = 5;

  activeCount = signal<number>(3);
  inactiveCount = computed(() => {
    return this.total - this.activeCount();
  });

  onRating(rate: number) {
    this.activeCount.set(rate);
  }

}
