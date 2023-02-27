// @ts-ignore
import { Component, Input, TemplateRef } from "@angular/core";

@Component({
  selector: "my-list",
  template: `
    <ul>
      <li *ngFor="let item of items">
        <ng-template
          [ngTemplateOutlet]="template"
          [ngTemplateOutletContext]="{ item: item }"
        ></ng-template>
      </li>
    </ul>
  `,
})
export class ListComponent {
  @Input() template: TemplateRef<any>;
  @Input() items: any[] = [];
}
