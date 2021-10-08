import { ProductService } from './../product.service';
import { ProductReadDataSource } from './product-read-datasource';
import { Product } from './../product.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})

export class ProductReadComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Product>;
  dataSource: ProductReadDataSource;

  products: Product[] = []

  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private productService: ProductService) {
    this.dataSource = new ProductReadDataSource(this.productService);
  }
  
  ngAfterViewInit(): void {
    this.dataSource.data = this.products;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

}
