import {Component, Input, OnInit} from '@angular/core';
import {Listing} from '../../../models/listing';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  @Input() Listing: Listing;

  constructor() {
  }

  ngOnInit() {
  }

}
