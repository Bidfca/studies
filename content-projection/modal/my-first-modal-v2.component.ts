// @ts-ignore
import { Component } from "@angular/core";

@Component({
  selector: "my-first-component",
  template: `
    <button (click)="myModal.show()">Show more information</button>
    <my-modal title="My First Modal" #myModal>
      <p>
        Exercitation consectetur ipsum irure consequat sunt pariatur pariatur
        reprehenderit Lorem laboris.
      </p>
    </my-modal>
  `,
})
export class MyFirstComponent {}
