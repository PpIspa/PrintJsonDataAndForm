import { Component, Input } from '@angular/core';
import { Product, ProductPreview } from 'src/app/types/product';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  //o inizializzi l'array con array vuoto -> product: Product[] = [];
  //oppure si usa il !
  @Input() product!: ProductPreview[];


  printList(): ProductPreview[] {
    //return this.product.map(x => ({ title: x.title, id: x.id }))
    return this.product = this.product.map(({ title, id }) => ({ title, id }))

  }

}
