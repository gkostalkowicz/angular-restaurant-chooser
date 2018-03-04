import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-manage-restaurants-create-screen',
  templateUrl: './manage-restaurants-create-screen.component.html',
  styleUrls: ['./manage-restaurants-create-screen.component.css']
})
export class ManageRestaurantsCreateScreenComponent implements OnInit {

  constructor(private restaurantService: RestaurantService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onSubmit(restaurantJson: any) {
    this.restaurantService.create(restaurantJson)
      .subscribe(() => this.router.navigate(['..'], { relativeTo: this.route }));
  }
}
