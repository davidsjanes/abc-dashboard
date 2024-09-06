import { Component, Input } from '@angular/core';
import { SlideoutService } from 'src/app/services/slideout/slideout.service';
import { ProductNavComponent } from '../product-nav/product-nav.component';

@Component({
  selector: 'app-site-nav',
  templateUrl: './site-nav.component.html',
  styleUrls: ['./site-nav.component.scss']
})

export class SiteNavComponent {

  @Input() isCompact = false;

  constructor(private SlideoutService: SlideoutService) {}

  openProductsSlideout() {
    this.SlideoutService.open(ProductNavComponent, ['slideout-nav'], ['Products']);
  }

}