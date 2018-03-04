import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { RestService } from './rest.service';
import { User } from './user.model';

@Injectable()
export class UserService {

  currentUser: User;

  constructor(private restService: RestService) { }

  getAll(): Observable<User[]> {
    return this.restService.get('/users').map((response: Response) => response.json());
  }
}
