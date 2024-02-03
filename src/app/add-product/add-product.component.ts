import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent implements OnInit{
  public addForm!: FormGroup;

  constructor(private _productService: ProductService) { }
  ngOnInit(): void {
    this.addForm = new FormGroup({
      "id": new FormControl(0, [Validators.required, Validators.minLength(9)]),
      "name": new FormControl("", [Validators.required, Validators.minLength(3)]),
      "price": new FormControl(0, [Validators.required]),
      "outOfStock": new FormControl(true)
    })
  }
  save() {
    let p: Product = this.addForm.value
    this._productService.addProduct(p).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);

      }
    })
  }
}
