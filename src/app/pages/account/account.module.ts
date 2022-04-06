import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { OrdersComponent } from './orders/orders.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DetailsComponent } from './details/details.component';
import { AddressesComponent } from './addresses/addresses.component';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';
import { OrdersSingleComponent } from './orders/orders-single/orders-single.component';
import { ReviewModalComponent } from './components/review-modal/review-modal.component';
import { WishlistComponent } from './wishlist/wishlist.component';

@NgModule({
  declarations: [
    AccountComponent,
    OrdersComponent,
    ReviewsComponent,
    ChangePasswordComponent,
    DetailsComponent,
    AddressesComponent,
    OrdersListComponent,
    OrdersSingleComponent,
    ReviewModalComponent,
    WishlistComponent,
  ],
  imports: [CommonModule, AccountRoutingModule, SharedModule],
})
export class AccountModule {}
