import { Routes } from '@angular/router';
import { Stars } from './components/stars/stars';
import { Wordle } from './components/wordle/wordle';
import { Todolist } from './components/todolist/todolist';
import { Accordion } from './components/accordion/accordion';
import { ProgressBar } from './components/progress-bar/progress-bar';

export const routes: Routes = [
  {
    path: 'stars',
    component: Stars,
  },
  {
    path: 'wordle',
    component: Wordle,
  },
  {
    path: 'todolist',
    component: Todolist,
  },
  {
    path: 'accordion/multiple-open-tabs',
    component: Accordion,
    data: { allowsAnyNumber: true },
  },
  {
    path: 'accordion/only-one-open-tab',
    component: Accordion,
    data: { allowsAnyNumber: false },
  },
  {
    path: 'progress-bar',
    component: ProgressBar,
  },
  {
    path: '',
    redirectTo: 'stars',
    pathMatch: 'full',
  },
];
