export class Listing {
  Cost: number;
  Address: string;
  Bed: number;
  Bath: string;
  Taxes: number;
  Status: string;
  Type: string;
  Added: string;
  Image: string;

  constructor(api: ListingApiResponse) {
    this.Cost = api.cost;
    this.Address = api.address;
    this.Bed = api.bed;
    this.Bath = api.bath;
    this.Taxes = api.taxes;
    this.Status = api.status;
    this.Type = api.type;
    this.Added = api.added;
    this.Image = api.image;
  }
}

export interface ListingApiResponse {
  cost: number;
  address: string;
  bed: number;
  bath: string;
  taxes: number;
  status: string;
  type: string;
  added: string;
  image: string;
}
