import { Component, OnInit } from '@angular/core';
import {Address} from '../_models/address';
import {AddressService} from '../_services/address.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  addresses: Address[];

  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
    this.addressService.findAll().subscribe(data => {
      this.addresses = data;
    });
  }

}
