// @ts-ignore
import { Component } from "@angular/core";

@Component({
  selector: "my-first-component",
  template: `
    <button (click)="myModal.show()">Show more information</button>
    <my-modal #myModal>
      <div class="title">
        <h2>My First Modal</h2>
        <h3>And this is my subtitle</h3>
      </div>
      <p>
        Exercitation consectetur ipsum irure consequat sunt pariatur pariatur
        reprehenderit Lorem laboris.
      </p>
    </my-modal>
  `,
})
export class MyFirstComponent {}
