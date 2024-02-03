import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { log } from 'console';
import { Router } from '@angular/router';



@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductDetailsComponent, AddProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{
  public isShowAddForm!: boolean
  public isShowDetails!: boolean
  public selectedProductToShow!: Product
  public productsList: Product[] = []


  constructor(private router:Router, private _productService: ProductService) { }

  ngOnInit(): void {
    this._productService.getProductFromServer().subscribe({
      next:(res)=>{
        this.productsList=res;
        
      },
      error:(err)=>{
        console.log(err);
        
      }});
  }
  showDetails(product: Product) {
    this.router.navigate(['/product-list', product.id])
    // this.isShowDetails = true
    // this.selectedProductToShow = product
  }

  showAddForm() {
    this.isShowAddForm = true
  }
}

