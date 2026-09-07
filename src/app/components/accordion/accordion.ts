import { Component, signal, input, OnInit } from '@angular/core';
import {AccordionItem} from '../shared/types/accordion-item';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-accordion',
  imports: [NgClass],
  templateUrl: './accordion.html',
  styleUrl: './accordion.scss',
})
export class Accordion implements OnInit {
  allowsAnyNumber = input.required<boolean>();

  accordionItems = signal<AccordionItem[]>([
    new AccordionItem(
      'What is Angular?',
      'Angular is a popular open-source, TypeScript-based web application framework developed and maintained by Google for building modern single-page applications (SPAs). It provides developers with a robust, opinionated set of tools and libraries to handle everything from user interfaces to data management, routing, and server communication.',
    ),
    new AccordionItem(
      'What is RxJS?',
      'RxJS (Reactive Extensions for JavaScript) is a powerful library for reactive programming that uses Observables to handle asynchronous data streams and events. It is treated as the standard for managing complex async logic in JavaScript, especially within the Angular framework, where it is deeply integrated into core features like HTTP requests and form handling.',
    ),
    new AccordionItem(
      'What are Signals?',
      "In Angular, a signal is a wrapper around a value that can notify interested consumers when that value changes. Introduced to fundamentally modernize Angular's reactivity model, signals provide fine-grained reactivity. This means Angular can track exactly where a piece of state is used and update only that specific part of the UI, rather than checking the entire component tree.",
    ),
  ]);

  expansionTracker = signal<boolean[]>([]);

  ngOnInit() {
    this.initializeIndexTracker();
  }

  initializeIndexTracker() {
    this.accordionItems().forEach((item) => {
      this.expansionTracker.update((curArr) => {
        return [...curArr, false];
      });
    });
  }

  toggleItem(targetIndex: number) {
    this.expansionTracker.update((curExpansionTracker) => {

      return curExpansionTracker.map((isAccordionItemExpanded, expansionTrackerIndex) => {

        /*
         * [1] FIRST CHECK: Target Index
         * Toggle the expansion/close at the target index, on user-click.
         *
         * [2] SECOND CHECK: Other Indices
         * Do we allow multiple expanded items in the accordion?
         * If yes, then let the other items be as-is.
         * On the other hand, if only one item is allowed to be expanded at a time,
         * then, we force-close the other items, ie, set the Expanded to false.
         */
        return (expansionTrackerIndex === targetIndex) ? (!isAccordionItemExpanded) : (
          (this.allowsAnyNumber()) ? isAccordionItemExpanded : false
        );

       });

    });
  }
}
