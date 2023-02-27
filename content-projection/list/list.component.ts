// @ts-nocheck
import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  OnChanges,
} from "@angular/core";

@Component({
  selector: "my-list",
  template: `
    <ng-template #defaultTemplate let-item="item">
      <h3 class="itemName">
        <a *ngIf="getRouterLink" [routerLink]="getRouterLink(item)">{{
          item.name
        }}</a>
        <a *ngIf="!getRouterLink">{{ item.name }}</a>
      </h3>
      <div class="itemDescription">{{ item.description }}</div>
      <button *ngIf="showDelete" (click)="deleteItem.emit(item)">Delete</button>
    </ng-template>
    <div class="group" *ngFor="let groupName of groupNames">
      <h2 *ngIf="groupName !== 'NONE'">{{ groupName }}</h2>
      <ul>
        <li
          *ngFor="let item of groups[groupName].items; let i = index"
          [class.alt]="i % 2 === 0"
          [class.active]="item.isActive"
          (click)="itemSelect.emit(item)"
        >
          <ng-template
            [ngTemplateOutlet]="template || defaultTemplate"
            [ngTemplateOutletContext]="{ item: item }"
          ></ng-template>
        </li>
      </ul>
    </div>
  `,
})
export class ListComponent implements OnChanges {
  @Input() template: TemplateRef<any>;
  @Input() items: Item[] = [];
  @Input() getRouterLink: (item: any) => string[];
  @Input() groupBy: string = null;
  @Input() showDelete = true;

  @Output() itemSelect = new EventEmitter();
  @Output() deleteItem = new EventEmitter();

  groups: { [key: string]: Item[] } = { NONE: [] };
  groupNames: string[] = [];

  ngOnChanges(): void {
    this.groupNames = [];
    this.groups = this.items.reduce(
      (groups: { [key: string]: Item[] }, item: Item) => {
        const groupName = item[this.groupBy] || "NONE";
        if (!groups[groupName]) {
          groups[groupName] = [];
          this.groupNames.push(groupName);
        }
        groups[groupName].push(item);
        return groups;
      },
      {}
    );
  }
}

export interface Item {
  name: string;
  description: string;
  isActive: boolean;
}
