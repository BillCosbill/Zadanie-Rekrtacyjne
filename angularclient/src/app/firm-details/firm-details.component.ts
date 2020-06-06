import { Component, OnInit } from '@angular/core';
import {Address} from '../_models/address';
import {Obtaining} from '../_models/obtaining';
import {ActivatedRoute} from '@angular/router';
import {Firm} from '../_models/firm';
import {FirmService} from '../_services/firm.service';

@Component({
  selector: 'app-firm-details',
  templateUrl: './firm-details.component.html',
  styleUrls: ['./firm-details.component.css']
})
export class FirmDetailsComponent implements OnInit {

  firmId: number;
  firm: Firm = new Firm();
  addresses: Address[];
  obtaining: Obtaining = new Obtaining();

  constructor(private firmService: FirmService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.firmId = +params['id'];
    });

    this.firmService.getFirm(this.firmId).subscribe(result => {
      this.firm = result;
      this.addresses = result.addresses;
      this.obtaining = result.obtaining;
    });
  }
}
