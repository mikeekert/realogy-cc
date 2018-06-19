import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ListingApiResponse} from '../models/listing';


@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  getListings() {
    return this.http.get<ListingApiResponse[]>('/assets/listings.json');
  }

  constructor(private http: HttpClient) {
  }
}

