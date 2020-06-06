import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { FirmDetailsComponent } from './firm-details/firm-details.component';
import { WorkerListComponent } from './worker-list/worker-list.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { ContactAddComponent } from './contact-add/contact-add.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { FirmEditComponent } from './firm-edit/firm-edit.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    PersonDetailsComponent,
    FirmDetailsComponent,
    WorkerListComponent,
    ContactListComponent,
    ContactAddComponent,
    PersonEditComponent,
    FirmEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
