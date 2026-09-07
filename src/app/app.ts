import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('hello-world-app');

  constructor(private router: Router) {
  }

  goTo(link: string, navigationData?: string) {
    const route = navigationData ? `/${link}/${navigationData}` : `/${link}`;
    this.router.navigate([route]);
  }
}
