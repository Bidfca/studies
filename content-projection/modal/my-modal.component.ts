// @ts-ignore
import { Component } from "@angular/core";

@Component({
  selector: "my-modal",
  template: `
    <div class="overlay" *ngIf="isOpen" (click)="hide()"></div>
    <div class="modal" *ngIf="isOpen">
      <div class="header">
        <button class="close" (click)="hide()">X</button>
        <h2>{{ title }}</h2>
      </div>
      <div class="content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class MyModalComponent {
  isOpen: boolean = false;

  show() {
    this.isOpen = true;
  }

  hide() {
    this.isOpen = false;
  }
}
