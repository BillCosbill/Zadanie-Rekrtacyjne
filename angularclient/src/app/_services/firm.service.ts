import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Firm} from '../_models/firm';

@Injectable({
  providedIn: 'root'
})
export class FirmService {

  private url: string;
  private getFirmUrl: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/firm';
    this.getFirmUrl = 'http://localhost:8080/getFirm';
  }

  public findAll(): Observable<Firm[]> {
    return this.http.get<Firm[]>(this.url);
  }

  public getFirm(id: number){
    return this.http.get<Firm>(this.getFirmUrl + '?id='  + id);
  }

  public addFirm(firm: Firm) {
    return this.http.post<Firm>(this.url, firm);
  }

  public deleteFirm(id: string) {
    return this.http.delete<Firm>(this.url + '?id=' + id);
  }

  public updateFirm(id: any, firm: Firm){
    return this.http.put<Firm>(this.url + '?id=' + id, firm);
  }
}
