import { Component, OnInit } from '@angular/core';
import {Person} from '../_models/person';
import {Firm} from '../_models/firm';
import {FirmService} from '../_services/firm.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PersonService} from '../_services/person.service';
import {Address} from '../_models/address';
import {Obtaining} from '../_models/obtaining';


@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {

  type: string;
  details2: string;
  legalForm2: string;
  person: Person = new Person();
  firm: Firm = new Firm();
  addresses: Address[] = [];
  address: Address = new Address(null, null, null, null, null, null, null);
  obtaining: Obtaining = new Obtaining();

  isSuccessful = false;
  isAddingFailed = false;
  errorMessage = '';

  constructor(private personService: PersonService, private firmService: FirmService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
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

  onSubmit() {
    if (this.addresses.length === 0) {
      alert('Wymagany jest minimum jeden adres');
    } else if (this.obtaining.obtainingWay != null && this.obtaining.details == null && this.obtaining.obtainingWay !== 'strona_www' && this.obtaining.obtainingWay !== 'none') {
      alert('Należy wypełnić informacje o rekomendacji');
    } else {
      if (this.legalForm2 !== undefined && this.firm.legalForm === 'inne') {this.firm.legalForm = this.legalForm2; }
      if (this.firm.legalForm === 'none') { this.firm.legalForm = null; }
      if (this.details2 !== undefined && this.details2 !== null && this.obtaining.details === 'inne') {this.obtaining.details = this.details2; }
      if (this.obtaining.obtainingWay === 'strona_www') { this.obtaining.details = null; }
      if (this.obtaining.obtainingWay === 'none') { this.obtaining = new Obtaining(); }


      if (this.type === 'OsobaFizyczna') {
        if (this.obtaining != null) {
          this.person.obtaining = this.obtaining;
        }
        this.person.addresses = this.addresses;
        this.personService.addPerson(this.person).subscribe(result => this.goToContactList());

      } else {
        if (this.obtaining != null) {
          this.firm.obtaining = this.obtaining;
        }
        this.firm.addresses = this.addresses;
        this.firmService.addFirm(this.firm).subscribe(result => this.goToContactList());
      }
    }
  }

  reset() {
    this.details2 = null;
    this.person = new Person();
    this.firm = new Firm();
    this.addresses = [];
    this.address = new Address(null, null, null, null, null, null, null);
    this.obtaining = new Obtaining();
    this.legalForm2 = null;
  }

  goToContactList() {
    this.router.navigate(['/contactList']);
  }

  fillAddressData(add: Address) {
    this.address = new Address(add.id, add.addressType, add.street, add.houseNumber, add.apartmentNumber, add.zipCode, add.city);
  }
}
