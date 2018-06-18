import {Component, Input, OnInit} from '@angular/core';
import {PropertyService} from '../../services/property.service';
import {Listing, ListingApiResponse} from '../../models/listing';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {
  Listings: Listing[] = [];

  constructor(private propertyservice: PropertyService) {
  }

  ngOnInit() {
    this.propertyservice.getListings().subscribe(data =>
      data.forEach((i) => {
        this.Listings.push(new Listing(i));
        console.log(this.Listings);
      })
    );
  }
}
