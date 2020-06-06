import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Worker} from '../_models/worker';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  private url: string;
  private getWorkerUrl: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/worker';
    this.getWorkerUrl = 'http://localhost:8080/getWorker';
  }

  public findAll(): Observable<Worker[]> {
    return this.http.get<Worker[]>(this.url);
  }

  public getWorker(id: number){
    return this.http.get<Worker>(this.getWorkerUrl + '?id='  + id);
  }

  public updateWorker(id: any, worker: Worker){
    return this.http.put<Worker>(this.url + '?id=' + id, worker);
  }

  public deleteWorker(worker: Worker){
    return this.http.delete<Worker>(this.url + '?id='  + worker.id);
  }

  public addWorker(id: any, worker: Worker) {

    return this.http.post<Worker>(this.url + '?id='  + id, worker);
  }
}
