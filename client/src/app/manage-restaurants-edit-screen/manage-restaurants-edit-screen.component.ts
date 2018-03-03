import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Restaurant } from '../restaurant.model';
import { RestService  } from '../rest.service';

@Component({
  selector: 'app-manage-restaurants-edit-screen',
  templateUrl: './manage-restaurants-edit-screen.component.html',
  styleUrls: ['./manage-restaurants-edit-screen.component.css']
})
export class ManageRestaurantsEditScreenComponent implements OnInit {

  formGroup: FormGroup;
  restaurant: Restaurant;
  name: AbstractControl;
  id: number;

  constructor(builder: FormBuilder, private restService: RestService, private router: Router, private route: ActivatedRoute) {
    this.formGroup = builder.group({
      'name': ['', Validators.required]
    });
    this.name = this.formGroup.controls['name'];

    route.params.subscribe(params => {
      this.id = params['id'];
      this.restService
        .get('/restaurants/' + this.id)
        .subscribe((res: Response) => {
          let restaurant: Restaurant = res.json();
          this.restaurant = restaurant;
          this.name.setValue(restaurant.name);
        });
    });
  }

  ngOnInit() {
  }

  onSubmit(formGroup: FormGroup) {
    this.restService
      .post('/restaurants/' + this.id, {name: formGroup['name']})
      .subscribe(() => {
        this.router.navigate(['../..'], { relativeTo: this.route });
      });
  }
}
