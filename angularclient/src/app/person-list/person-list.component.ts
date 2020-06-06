import { Component, OnInit } from '@angular/core';
import {PersonService} from '../_services/person.service';
import {Person} from '../_models/person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.personService.findAll().subscribe(data => {
      this.persons = data;
    });
  }

}
