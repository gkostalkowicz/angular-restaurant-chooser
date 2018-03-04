import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant.model';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-manage-restaurants-overview-screen',
  templateUrl: './manage-restaurants-overview-screen.component.html',
  styleUrls: ['./manage-restaurants-overview-screen.component.css']
})
export class ManageRestaurantsOverviewScreenComponent implements OnInit {

  restaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.fetchRestaurants();
  }

  fetchRestaurants() {
    this.restaurantService.getAll().subscribe((restaurants: Restaurant[]) => this.restaurants = restaurants);
  }

  confirmAndRemove(restaurant: Restaurant) {
    if (confirm(`Remove restaurant "${restaurant.name}"?`)) {
      this.restaurantService.delete(restaurant.id)
        .subscribe(() => this.fetchRestaurants());
    }
    return false;
  }
}
