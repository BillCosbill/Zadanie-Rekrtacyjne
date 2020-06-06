import { Component, OnInit } from '@angular/core';
import {PersonService} from '../_services/person.service';
import {ActivatedRoute} from '@angular/router';
import {Person} from '../_models/person';
import {Address} from '../_models/address';
import {Obtaining} from '../_models/obtaining';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  personId: number;
  person: Person = new Person();
  addresses: Address[];
  obtaining: Obtaining = new Obtaining();

  constructor(private personService: PersonService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.personId = +params['id'];
    });

    this.personService.getPerson(this.personId).subscribe(result => {
      this.person = result;
      this.addresses = result.addresses;
      this.obtaining = result.obtaining;
    });
  }
}
