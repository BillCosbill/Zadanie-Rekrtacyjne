import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Address} from '../_models/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/address';
  }

  public findAll(): Observable<Address[]> {
    return this.http.get<Address[]>(this.url);
  }
}
