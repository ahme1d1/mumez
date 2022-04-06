import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { AddressModalComponent } from './components/address-modal/address-modal.component';
import { ShareComponent } from './components/share/share.component';
import { StarRateComponent } from './components/star-rate/star-rate.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AngularSvgIconModule } from 'angular-svg-icon';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { ImageComponent } from './components/image/image.component';
import { SocialsComponent } from './components/socials/socials.component';
import { FilterComponent } from './components/filter/filter.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { AgeCardComponent } from './components/age-card/age-card.component';
import { FeaturesComponent } from './components/features/features.component';

@NgModule({
  declarations: [
    ImageComponent,
    SocialsComponent,
    FilterComponent,
    ProductCardComponent,
    AgeCardComponent,
    FeaturesComponent,
    StarRateComponent,
    ShareComponent,
    AddressModalComponent,
    PlaceholderComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    LazyLoadImageModule,
    RouterModule,
    NgxSliderModule,
  ],
  exports: [
    HttpClientModule,
    AngularSvgIconModule,
    ImageComponent,
    NgxSliderModule,
    SocialsComponent,
    FilterComponent,
    ProductCardComponent,
    AgeCardComponent,
    FeaturesComponent,
    StarRateComponent,
    ShareComponent,
    AddressModalComponent,
    PlaceholderComponent,
  ],
})
export class SharedModule {}
