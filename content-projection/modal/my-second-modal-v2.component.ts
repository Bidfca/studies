// @ts-ignore
import { Component } from "@angular/core";

@Component({
  selector: "my-second-component",
  template: `
    <button (click)="myModal.show()">Click here to see more</button>
    <my-modal title="My Second Modal" #myModal>
      <p>
        Pariatur deserunt mollit qui commodo magna dolor. Lorem est elit labore
        ipsum eu. Nisi anim laborum laborum tempor consectetur qui nostrud minim
        consectetur et mollit dolore Lorem. Laboris enim nulla minim labore
        velit enim irure aliquip incididunt anim sint nulla pariatur.
      </p>
    </my-modal>
  `,
})
export class MySecondComponent {}
