
export class AccordionItem {

  heading: string = '';
  description: string = '';
  isExpanded: boolean = false;

  constructor(heading: string, description: string) {
    this.heading = heading;
    this.description = description;
    this.isExpanded = false;
  }

  toggle(): void {
    this.isExpanded = !this.isExpanded;
  }
}
