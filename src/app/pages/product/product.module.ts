import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductSliderComponent } from './components/product-slider/product-slider.component';
import { ProductReviewComponent } from './components/product-review/product-review.component';

import { SwiperModule } from 'swiper/angular';
import { SharedModule } from '@shared/shared.module';
import { ProductAsideComponent } from './components/product-aside/product-aside.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductSliderComponent,
    ProductReviewComponent,
    ProductAsideComponent,
  ],
  imports: [CommonModule, ProductRoutingModule, SharedModule, SwiperModule],
})
export class ProductModule {}
