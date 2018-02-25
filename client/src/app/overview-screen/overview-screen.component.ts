import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RestaurantWithVotes } from '../restaurant-with-votes.model';

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
    this.http
      .get('http://localhost:8080/votes')
      .subscribe((response: Response) => {
        this.restaurants = response.json();
        this.restaurants.sort((r1, r2) => r2.chosenBy.length - r1.chosenBy.length);
      });
  }
}
