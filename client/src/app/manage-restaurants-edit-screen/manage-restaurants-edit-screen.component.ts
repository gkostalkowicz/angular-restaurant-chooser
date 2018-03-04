import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Restaurant } from '../restaurant.model';
import { RestaurantService } from '../restaurant.service';
import { RestaurantFormComponent } from '../restaurant-form/restaurant-form.component';

@Component({
  selector: 'app-manage-restaurants-edit-screen',
  templateUrl: './manage-restaurants-edit-screen.component.html',
  styleUrls: ['./manage-restaurants-edit-screen.component.css']
})
export class ManageRestaurantsEditScreenComponent implements OnInit {

  @ViewChild(RestaurantFormComponent) restaurantForm: RestaurantFormComponent;
  restaurant: Restaurant;
  id: number;

  constructor(private restaurantService: RestaurantService, private router: Router, private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.id = params['id'];

      this.restaurantService.getById(this.id)
        .subscribe((restaurant: Restaurant) => {
          this.restaurant = restaurant;
          this.restaurantForm.setRestaurant(restaurant);
        });
    });
  }

  ngOnInit() {
  }

  onSubmit(restaurantJson: any) {
    this.restaurantService.update(this.id, restaurantJson)
      .subscribe(() => this.router.navigate(['../..'], { relativeTo: this.route }));
  }
}
