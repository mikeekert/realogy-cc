import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing/listing.component';
import { PropertyComponent } from './property.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListingComponent, PropertyComponent],
  exports: [ListingComponent, PropertyComponent]
})
export class PropertyModule { }
