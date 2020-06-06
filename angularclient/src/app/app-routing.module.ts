import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PersonListComponent} from './person-list/person-list.component';
import {AddressListComponent} from './address-list/address-list.component';
import {PersonDetailsComponent} from './person-details/person-details.component';
import {FirmDetailsComponent} from './firm-details/firm-details.component';
import {WorkerListComponent} from './worker-list/worker-list.component';
import {ContactListComponent} from './contact-list/contact-list.component';
import {ContactAddComponent} from './contact-add/contact-add.component';
import {PersonEditComponent} from './person-edit/person-edit.component';
import {FirmEditComponent} from './firm-edit/firm-edit.component';


const routes: Routes = [
  { path: 'contactList', component: ContactListComponent },
  { path: 'contactAdd', component: ContactAddComponent },
  { path: 'personList', component: PersonListComponent },
  { path: 'personEdit/:id', component: PersonEditComponent, pathMatch: 'full' },
  { path: 'personDetails/:id', component: PersonDetailsComponent, pathMatch: 'full'},
  { path: 'firmDetails/:id', component: FirmDetailsComponent, pathMatch: 'full' },
  { path: 'firmEdit/:id', component: FirmEditComponent, pathMatch: 'full' },
  { path: 'addressesList', component: AddressListComponent },
  { path: 'workersList/:id', component: WorkerListComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'contactList', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
