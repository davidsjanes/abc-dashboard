import { Component } from '@angular/core';

@Component({
  selector: 'app-product-nav',
  standalone: false,
  templateUrl: './product-nav.component.html',
  styleUrl: './product-nav.component.scss'
})
export class ProductNavComponent {

  isNext: boolean = false;

  nextCategory() {
    this.isNext = !this.isNext;
  }

  prevCategory() {
    this.isNext = false;
  }

}
