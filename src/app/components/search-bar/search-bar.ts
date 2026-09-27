import { Component, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Observable, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-bar',
  imports: [ReactiveFormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',
})
export class SearchBar {
  searchControl = new FormControl();
  http = inject(HttpClient);
  resultUsers = signal<any>(null);

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((data) => this.search(data)),
      )
      .subscribe(res => {
        this.resultUsers.set(res?.users ?? []);
      });
  }

  search(data: string) {
    return this.http.get<any>(`https://dummyjson.com/users/search?q=${data}`);
  }
}
