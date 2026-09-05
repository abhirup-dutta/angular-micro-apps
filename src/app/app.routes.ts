import { Routes } from '@angular/router';
import { Stars } from './components/stars/stars';
import { Wordle } from './components/wordle/wordle';
import { Todolist } from './components/todolist/todolist';
import { Accordion } from './components/accordion/accordion';

export const routes: Routes = [
  {
    path: 'stars',
    component: Stars
  },
  {
    path: 'wordle',
    component: Wordle
  },
  {
    path: 'todolist',
    component: Todolist
  },
  {
    path: 'accordion',
    component: Accordion
  },
  {
    path: '',
    redirectTo: 'stars',
    pathMatch: 'full'
  }
];
