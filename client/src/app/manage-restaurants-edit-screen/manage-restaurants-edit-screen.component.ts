import { Component, OnInit, ViewChild } from '@angular/core';
import { Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Restaurant } from '../restaurant.model';
import { RestService } from '../rest.service';
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

  constructor(private restService: RestService, private router: Router, private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.id = params['id'];

      this.restService
        .get('/restaurants/' + this.id)
        .subscribe((res: Response) => {
          let restaurant: Restaurant = res.json();
          this.restaurant = restaurant;
          this.restaurantForm.setRestaurant(restaurant);
        });
    });
  }

  ngOnInit() {
  }

  onSubmit(restaurantJson: any) {
    this.restService
      .post('/restaurants/' + this.id, restaurantJson)
      .subscribe(() => {
        this.router.navigate(['../..'], { relativeTo: this.route });
      });
  }
}
