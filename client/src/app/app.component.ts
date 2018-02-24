import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app works!';
  restaurants: Restaurant[];

  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  ngOnInit() {
    this.updateRestaurants();
  }

  updateRestaurants() {
    this.http
      .get('http://localhost:8080/restaurants')
      .subscribe((response: Response) => {
        this.restaurants = response.json();
      });
  }
}
