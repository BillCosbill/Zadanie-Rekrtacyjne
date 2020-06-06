import {Component, OnInit} from '@angular/core';
import {Contact} from '../_models/contact';
import {FirmService} from '../_services/firm.service';
import {PersonService} from '../_services/person.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[] = [];
  searchText;

  config = {
    id: 'custom',
    itemsPerPage: 3,
    currentPage: 1,
    totalItems: this.contacts.length
  };

  constructor(private firmService: FirmService, private personService: PersonService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.contacts = [];
    this.personService.findAll().subscribe(data => {
      data.forEach(x => {
        if (x.name != null) {
          this.contacts.push(new Contact(x.id, x.name + ' ' + x.lastName, x.type, x.email, x.phoneNumber));
        } else {
          this.contacts.push(new Contact(x.id, x.lastName, x.type, x.email, x.phoneNumber));
        }
      });
    });

    this.firmService.findAll().subscribe(data => {
      data.forEach(x => {
        this.contacts.push(new Contact(x.id, x.name, x.type, x.email, x.phoneNumber));
      });
    });
  }

  goToContactDetails(id: any, type: string) {
    if (type === 'Osoba fizyczna') {
      this.router.navigate(['/personDetails', (id)], { relativeTo: this.route });
    } else {
      this.router.navigate(['/firmDetails', (id)], { relativeTo: this.route });
    }
  }

  deleteContact(id: string, type: string) {
    if (type === 'Osoba fizyczna') {
      this.personService.deletePerson(id).subscribe(() => this.ngOnInit());
    } else {
      this.firmService.deleteFirm(id).subscribe(() => this.ngOnInit());
    }
  }
}
