import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

const BASE_URL = 'http://localhost:8080'

@Injectable()
export class RestService {

  constructor(private http: Http) {}

  get(endpoint: string): Observable<Response> {
    return this.http.get(BASE_URL + endpoint);
  }

  post(endpoint: string, data: any): Observable<Response> {
    return this.http.post(BASE_URL + endpoint, data);
  }
}
