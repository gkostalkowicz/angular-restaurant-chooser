import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RestService } from './rest.service';
import { UserService } from './user.service';
import { RestaurantWithVotes } from './restaurant-with-votes.model';

@Injectable()
export class VoteService {

  constructor(private restService: RestService, private userService: UserService) { }

  vote(chosenIds: number[]): Observable<any> {
    return this.restService.post('/vote', { userId: this.userService.currentUser.id, chosenRestaurantIds: chosenIds });
  }

  getRestaurantsWithVotes(): Observable<RestaurantWithVotes[]> {
    return this.restService.get('/votes').map((response: Response) => response.json());
  }
}
