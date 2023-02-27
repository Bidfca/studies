// @ts-ignore
import { Component } from "@angular/core";

@Component({
  selector: "my-second-component",
  template: `
    <button (click)="showMoreInfo()">Click here to see more</button>
    <div class="modal" *ngIf="modalIsOpen">
      <div class="header">
        <button class="close" (click)="close()">X</button>
        <h2>My Second Modal</h2>
      </div>
      <div class="content">
        <p>
          Pariatur deserunt mollit qui commodo magna dolor. Lorem est elit
          labore ipsum eu. Nisi anim laborum laborum tempor consectetur qui
          nostrud minim consectetur et mollit dolore Lorem. Laboris enim nulla
          minim labore velit enim irure aliquip incididunt anim sint nulla
          pariatur.
        </p>
      </div>
    </div>
  `,
})
export class MySecondComponent {
  modalIsOpen: boolean = false;

  showMoreInfo() {
    this.modalIsOpen = true;
  }

  close() {
    this.modalIsOpen = false;
  }
}
