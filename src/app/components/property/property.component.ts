import {Component, OnInit} from '@angular/core';
import {PropertyService} from '../../services/property.service';
import {Listing} from '../../models/listing';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {
  Listings: Listing[] = [];

  constructor(private propertyService: PropertyService) {
  }

  ngOnInit() {
    this.propertyService.getListings().subscribe(data =>
      data.forEach((i) => {
        this.Listings.push(new Listing(i));
      })
    );
  }
}
