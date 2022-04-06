import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { SwiperModule } from 'swiper/angular';
import { SharedModule } from '@shared/shared.module';
import { SingleComponent } from './single/single.component';

@NgModule({
  declarations: [BlogComponent, SingleComponent],
  imports: [CommonModule, BlogRoutingModule, SwiperModule, SharedModule],
})
export class BlogModule {}
