export class Address {
  id: string;
  addressType: string;
  street: string;
  houseNumber: string;
  apartmentNumber: string;
  zipCode: string;
  city: string;

  constructor(id: string, addressType: string, street: string, houseNumber: string, apartmentNumber: string, zipCode: string, city: string) {
    this.id = id;
    this.addressType = addressType;
    this.street = street;
    this.houseNumber = houseNumber;
    this.apartmentNumber = apartmentNumber;
    this.zipCode = zipCode;
    this.city = city;
  }
}
