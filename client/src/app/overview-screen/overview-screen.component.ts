import { Component, OnInit } from '@angular/core';
import { RestaurantWithVotes } from '../restaurant-with-votes.model';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-overview-screen',
  templateUrl: './overview-screen.component.html',
  styleUrls: ['./overview-screen.component.css']
})
export class OverviewScreenComponent implements OnInit {

  restaurants: RestaurantWithVotes[];

  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  ngOnInit() {
    this.updateRestaurants();
  }

  updateRestaurants() {
    this.http
      .get('http://localhost:8080/votes')
      .subscribe((response: Response) => {
        this.restaurants = response.json();
      });
  }
}
