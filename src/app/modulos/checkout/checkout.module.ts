import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './components/checkout.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [CheckoutComponent]
})
export class CheckoutModule { }