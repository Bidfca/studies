// @ts-nocheck
import { Component, Input, TemplateRef } from "@angular/core";
import { Product, ProductService } from "./products";
import { Observable } from "rxjs";

@Component({
  selector: "my-product-list",
  template: `
    <ng-template #productTemplate let-product="item">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
    </ng-template>
    <my-list [items]="products$ | async" [template]="#productTemplate">
    </my-list>
  `,
})
export class ListComponent {
  products$: Observable<Product> = this.productService.products$;
  constructor(private productService: ProductsService) {
    productService.load();
  }
}
