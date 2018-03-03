import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { RestService  } from '../rest.service';

@Component({
  selector: 'app-manage-restaurants-create-screen',
  templateUrl: './manage-restaurants-create-screen.component.html',
  styleUrls: ['./manage-restaurants-create-screen.component.css']
})
export class ManageRestaurantsCreateScreenComponent implements OnInit {

  constructor(private restService: RestService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onSubmit(restaurantJson: any) {
    this.restService
      .post('/restaurants', restaurantJson)
      .subscribe(() => {
        this.router.navigate(['..'], { relativeTo: this.route });
      });
  }
}
