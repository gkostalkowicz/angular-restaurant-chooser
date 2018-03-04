import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { RestService } from './rest.service';
import { Restaurant } from './restaurant.model';

@Injectable()
export class RestaurantService {

  constructor(private restService: RestService) { }

  getAll(): Observable<Restaurant[]> {
    return this.restService.get('/restaurants').map((response: Response) => response.json());
  }

  getById(id: number): Observable<Restaurant> {
    return this.restService.get('/restaurants/' + id).map((response: Response) => response.json());
  }

  create(restaurant: Restaurant): Observable<any> {
    return this.restService.post('/restaurants', restaurant)
  }

  update(id: number, restaurant: Restaurant): Observable<any> {
    return this.restService.post('/restaurants/' + id, restaurant);
  }

  delete(id: number): Observable<any> {
    return this.restService.delete('/restaurants/' + id);
  }
}
