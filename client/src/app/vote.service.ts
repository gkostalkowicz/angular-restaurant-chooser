import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RestService } from './rest.service';
import { RestaurantWithVotes } from './restaurant-with-votes.model';

@Injectable()
export class VoteService {

  constructor(private restService: RestService) { }

  vote(chosenIds: number[]): Observable<any> {
    return this.restService.post('/vote', chosenIds);
  }

  getRestaurantsWithVotes(): Observable<RestaurantWithVotes[]> {
    return this.restService.get('/votes').map((response: Response) => response.json());
  }
}
