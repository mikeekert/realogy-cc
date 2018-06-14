import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing/listing.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListingComponent],
  exports: [ListingComponent]
})
export class PropertyModule { }
