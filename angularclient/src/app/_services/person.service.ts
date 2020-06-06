import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Person} from '../_models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private url: string;
  private getPersonUrl: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/person';
    this.getPersonUrl = 'http://localhost:8080/getPerson';
  }

  public findAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.url);
  }

  public getPerson(id: number){
    return this.http.get<Person>(this.getPersonUrl + '?id='  + id);
  }

  public addPerson(person: Person) {
    return this.http.post<Person>(this.url, person);
  }

  public deletePerson(id: string) {
    return this.http.delete<Person>(this.url + '?id=' + id);
  }

  public updatePerson(id: any, person: Person){
    return this.http.put<Person>(this.url + '?id=' + id, person);
  }
}
