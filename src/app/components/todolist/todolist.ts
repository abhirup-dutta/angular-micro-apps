import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  imports: [FormsModule],
  templateUrl: './todolist.html',
  styleUrl: './todolist.scss',
})
export class Todolist {
  todolist = signal<string[]>(['Walk the dog', 'Water the plants', 'Wash the dishes']);
  todoentered = signal<string>('');

  onEnterTask(task: string) {
    this.todoentered.set(task.trim());
  }

  onSubmitTask() {
    this.todolist.update((todolist) => {
      return [...todolist, this.todoentered()];
    });
    this.todoentered.set('');
  }

  onDeleteTask(indexForDeletion: number) {
    this.todolist.update((todolist) => {
      return todolist.filter((todo, index) => index !== indexForDeletion);
    });
  }
}
