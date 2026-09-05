import { Component, signal } from '@angular/core';
import {PastGuess} from '../shared/types/past-guess';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wordle',
  imports: [FormsModule, CommonModule],
  templateUrl: './wordle.html',
  styleUrl: './wordle.scss',
})
export class Wordle {
  answer = 'SPEND';
  max = 5;

  pastGuessList = signal<PastGuess[]>([]);
  guessWord = signal<string>('');
  hasWon = signal<boolean>(false);

  onPopulateGuess(guess: string) {
    this.guessWord.set(guess.trim().toUpperCase().slice(0, 5));
  }

  onSubmitGuess() {
    // Add to display guess grid
    let guessUnit = new PastGuess(this.guessWord());
    guessUnit.matchWith(this.answer);
    this.pastGuessList.update((guessList) => {
      return [...guessList, guessUnit];
    });

    // Check if winning word
    if (this.guessWord() === this.answer) {
      this.hasWon.set(true);
    }

    // Reset the box to empty
    this.guessWord.set('');
  }
}
