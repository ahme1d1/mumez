import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { AddressesComponent } from './addresses/addresses.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DetailsComponent } from './details/details.component';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';
import { OrdersSingleComponent } from './orders/orders-single/orders-single.component';
import { OrdersComponent } from './orders/orders.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { WishlistComponent } from './wishlist/wishlist.component';
const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'details' },
      { path: 'details', component: DetailsComponent },
      { path: 'change-password', component: ChangePasswordComponent },
      { path: 'addresses', component: AddressesComponent },
      {
        path: 'orders',
        component: OrdersComponent,
        children: [
          { path: '', component: OrdersListComponent },
          { path: 'single', component: OrdersSingleComponent },
        ],
      },
      { path: 'reviews', component: ReviewsComponent },
      { path: 'wishlist', component: WishlistComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
