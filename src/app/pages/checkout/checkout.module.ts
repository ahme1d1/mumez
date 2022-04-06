import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { SharedModule } from '@shared/shared.module';
import { ShippingInformationsComponent } from './components/shipping-informations/shipping-informations.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ThanksComponent } from './components/thanks/thanks.component';

@NgModule({
  declarations: [CheckoutComponent, ShippingInformationsComponent, OrderSummaryComponent, PaymentMethodComponent, ConfirmationComponent, ThanksComponent],
  imports: [CommonModule, CheckoutRoutingModule, SharedModule],
})
export class CheckoutModule {}
