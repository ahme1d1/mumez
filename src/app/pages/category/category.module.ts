import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { SwiperModule } from 'swiper/angular';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [CategoryComponent],
  imports: [CommonModule, CategoryRoutingModule, SwiperModule, SharedModule],
})
export class CategoryModule {}
