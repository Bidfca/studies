// @ts-ignore
import { Component } from "@angular/core";

@Component({
  selector: "my-first-component",
  template: `
    <button (click)="showModal()">Show more information</button>
    <div class="overlay" *ngIf="isOpen" (click)="hideModal()"></div>
    <div class="modal" *ngIf="isOpen">
      <h2>My First Modal</h2>
      <p>
        Exercitation consectetur ipsum irure consequat sunt pariatur pariatur
        reprehenderit Lorem laboris.
      </p>
      <button class="close" (click)="hideModal()">Dismiss</button>
    </div>
  `,
})
export class MyFirstComponent {
  isOpen: boolean = false;

  showModal() {
    this.isOpen = true;
  }

  hideModal() {
    this.isOpen = false;
  }
}
