import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { RestService } from '../rest.service';
import { Restaurant } from '../restaurant.model';

@Component({
  selector: 'app-manage-restaurants-overview-screen',
  templateUrl: './manage-restaurants-overview-screen.component.html',
  styleUrls: ['./manage-restaurants-overview-screen.component.css']
})
export class ManageRestaurantsOverviewScreenComponent implements OnInit {

  restaurants: Restaurant[] = [];

  constructor(private restService: RestService) { }

  ngOnInit() {
    this.restService
      .get('/restaurants')
      .subscribe((response: Response) => {
        this.restaurants = response.json();
      });
  }
}
