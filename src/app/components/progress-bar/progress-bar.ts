import { Component, signal, computed} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.scss',
})
export class ProgressBar {
  readonly MAX_PROGRESS = 10;
  readonly PROGRESS_LENGTH_UNIT = 1;
  readonly PROGRESS_TIME_INTERVAL = 500;

  progress = signal<number>(0);
  remaining = computed(() => {
    return this.MAX_PROGRESS - this.progress();
  });
  progressPercent = computed(() => {
    return (this.progress() * 100) / this.MAX_PROGRESS;
  });

  intervalId : any;

  startNewProgressInterval() {
    this.intervalId = setInterval(() => {

      if (this.progress() >= this.MAX_PROGRESS) {
        this.stopCurrentProgressInterval();
      } else {
        this.progress.update((cur) => cur + this.PROGRESS_LENGTH_UNIT);
      }

    }, this.PROGRESS_TIME_INTERVAL);
  }

  stopCurrentProgressInterval(): void {
    clearInterval(this.intervalId);
    this.intervalId = undefined;
  }

  onPause(): void {
    this.stopCurrentProgressInterval();
  }

  onResume(): void {
    if (this.progress() <= this.MAX_PROGRESS) {
      if (this.intervalId) {
        this.stopCurrentProgressInterval();
      }
      this.startNewProgressInterval();
    }
  }
}
