import { Component, OnInit } from '@angular/core';

import {AddressService} from '../_services/address.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FirmService} from '../_services/firm.service';
import {Address} from '../_models/address';
import {Obtaining} from '../_models/obtaining';
import {Firm} from '../_models/firm';

@Component({
  selector: 'app-firm-edit',
  templateUrl: './firm-edit.component.html',
  styleUrls: ['./firm-edit.component.css']
})
export class FirmEditComponent implements OnInit {

  legalForm2: string;
  firmId: number;
  details2: string;
  firm: Firm;
  allAddresses: Address[];
  addresses: Address[];
  obtaining: Obtaining;
  address: Address = new Address(null, null, null, null, null, null, null);

  constructor(private firmService: FirmService, private addressService: AddressService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.firmId = +params['id'];
    });

    this.firmService.getFirm(this.firmId).subscribe(result => {
      this.firm = result;
      this.addresses = result.addresses;
      this.obtaining = result.obtaining;

      if (this.obtaining.obtainingWay === 'Media społecznościowe') {
        this.details2 = this.obtaining.details;
      }

      if (this.firm.legalForm !== 'spółka akcyjna' && this.firm.legalForm !== 'spółka cywilna' &&
        this.firm.legalForm !== 'spółka prawna' && this.firm.legalForm !== 'spółka z o.o.' && this.firm.legalForm !== 'none') {
        this.legalForm2 = this.firm.legalForm;
        this.firm.legalForm = 'inne';
      }
    });



    this.addressService.findAll().forEach(x => {
      this.allAddresses = x;
    });
  }

  isNaN(val: any): boolean{
    return !(val instanceof Array) && (val - parseFloat(val) + 1) >= 0;
  }

  isZipCode(zip: string) {
    return /[0-9]{2}\-[0-9]{3}/.test(zip);
  }

  isAddressFilled(address: Address): boolean{
    return address.addressType != null && address.street != null && address.apartmentNumber != null &&
      address.houseNumber != null && address.zipCode != null && address.city != null;
  }

  addAddress() {
    if (this.isAddressFilled(this.address) && this.isZipCode(this.address.zipCode)) {

      this.allAddresses.forEach(add => {
        if (add.id >= this.address.id) {
          this.address.id = add.id + 1;
        }
      });

      this.addresses.push(this.address);
      this.address = new Address(null, null, null, null, null, null, null);
    } else {
      alert('Wypełnij poprawnie wszystkie pola adresu!');
    }
  }

  clear() {
    this.address = new Address(null, null, null, null, null, null, null);
  }

  delete(address: Address) {
    const index: number = this.addresses.indexOf(address);
    if (index !== -1) {
      this.addresses.splice(index, 1);
    }
  }

  fillAddressData(add: Address) {
    this.address = new Address(add.id, add.addressType, add.street, add.houseNumber, add.apartmentNumber, add.zipCode, add.city);
  }

  saveAddress(address: Address) {
    this.addresses.forEach(add => {
      if (add.id === address.id) {
        add.addressType = address.addressType;
        add.street = address.street;
        add.houseNumber = address.houseNumber;
        add.apartmentNumber = address.apartmentNumber;
        add.zipCode = address.zipCode;
        add.city = address.city;
      }
    });
  }
  goToFirmDetails() {
    this.router.navigate(['/firmDetails', (this.firmId)]);
  }

  onSubmit() {
    if (this.addresses.length === 0) {
      alert('Wymagany jest minimum jeden adres');
    } else {
      if (this.obtaining.obtainingWay != null && this.obtaining.details == null && this.obtaining.obtainingWay !== 'Strona www' && this.obtaining.obtainingWay !== 'none') {
        alert('Należy wypełnić informacje o rekomendacji');
      } else {
        if (this.legalForm2 !== undefined && this.firm.legalForm === 'inne') {this.firm.legalForm = this.legalForm2; }
        if (this.firm.legalForm === 'none') { this.firm.legalForm = null; }
        if (this.details2 !== undefined && this.details2 !== null && this.obtaining.details === 'inne') {this.obtaining.details = this.details2; }
        if (this.obtaining.obtainingWay === 'Strona www') { this.obtaining.details = null; }
        if (this.obtaining.obtainingWay === 'none') { this.obtaining = new Obtaining(); }
        this.firm.obtaining = this.obtaining;

        this.firm.addresses = this.addresses;
        this.firmService.updateFirm(this.firmId, this.firm).subscribe(() => this.goToFirmDetails());
      }
    }
  }

  showObtainingTextArea(obtaining: Obtaining): boolean {
    return obtaining.obtainingWay !== 'Rekomendacja' && obtaining.obtainingWay !== 'konferencja i szkolenie' &&
      obtaining.obtainingWay !== 'Strona www' && obtaining.obtainingWay !== 'none' && obtaining.details !== 'facebook'
      && obtaining.details !== 'twitter' && obtaining.details !== 'linkedin' && obtaining.details !== 'instagram';
  }

  showLegalFormTextArea(legalForm: string): boolean {
    return legalForm !== 'spółka akcyjna' && legalForm !== 'spółka cywilna' && legalForm !== 'spółka prawna' &&
      legalForm !== 'spółka z o.o.' && legalForm !== 'none';
  }
}
