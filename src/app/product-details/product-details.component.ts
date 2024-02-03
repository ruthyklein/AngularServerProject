import { Component , Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product } from '../product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{
  // @Input()
  public product!: Product
  public productId!: number

  constructor(private route: ActivatedRoute, private _productService: ProductService){}
  
  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.productId = param['id'];
      this._productService.getProductById(this.productId).subscribe({
        next: (res) => {
          this.product = res
        },
        error: (err) => {
          console.log(err);
        }
      })
    })
  }

}
