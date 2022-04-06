import { CartSidebarComponent } from './cart-sidebar/cart-sidebar.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MobileNavComponent,
    CartSidebarComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    MobileNavComponent,
    CartSidebarComponent,
  ],
})
export class LayoutModule {}
