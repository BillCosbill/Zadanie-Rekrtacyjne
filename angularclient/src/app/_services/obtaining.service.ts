import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Obtaining} from '../_models/obtaining';

@Injectable({
  providedIn: 'root'
})
export class ObtainingService {

  private url: string;
  private getObtainingUrl: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/obtaining';
    this.getObtainingUrl = 'http://localhost:8080/getObtaining';
  }

  public findAll(): Observable<Obtaining[]> {
    return this.http.get<Obtaining[]>(this.url);
  }

  public getObtaining(id: number) {
    return this.http.get<Obtaining>(this.getObtainingUrl + '?id='  + id);
  }
}
