import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = [];
  displayedColumns = ['id', 'name', 'price', 'action'];
  paginator = {
    page: 1,
    size: 2,
    length: 0
  }
  constructor( private productService: ProductService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  private loadItems() {
    this.productService.read(this.paginator)
    .subscribe(prods => {
      this.paginator.length = prods.total
      this.products = prods.data;
    })
  }

  changePage(event: any) {
    this.paginator.page = event.pageIndex+1;
    this.paginator.size = event.pageSize;

    this.loadItems();
  }

}
