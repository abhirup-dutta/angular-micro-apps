import  { Component, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, of, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-bar',
  imports: [ReactiveFormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',
})
export class SearchBar {
  searchControl = new FormControl();
  users = signal<any>([]);
  http = inject(HttpClient);
  touched = signal<boolean>(false);

  ngOnInit() {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(query => this.search(query))
    ).subscribe(results => {
        this.users.set(results?.users ?? []);
      });
  }

  search(data:string) {
    if(!this.touched()) {
      this.touched.set(true);
    }
    if(this.touched() === true && !data) {
      return of(null);
    }
    return this.http.get<any>(`https://dummyjson.com/users/search?q=${data}`);
  }
}
