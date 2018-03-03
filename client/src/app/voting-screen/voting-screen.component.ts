import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Restaurant } from '../restaurant.model';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-voting-screen',
  templateUrl: './voting-screen.component.html',
  styleUrls: ['./voting-screen.component.css']
})
export class VotingScreenComponent implements OnInit {

  loaded: boolean;
  restaurants: Restaurant[];

  constructor(private restService: RestService, private router: Router) { }

  ngOnInit() {
    this.restService
      .get('/restaurants')
      .subscribe((response: Response) => {
        this.restaurants = response.json();
        this.loaded = true;
      });
  }

  onSubmit(formValues: FormGroup) {
    let chosenIds: number[] = [];

    this.restaurants.forEach(r => {
      if (formValues[`restaurant_${r.id}`]) {
        chosenIds.push(r.id);
      }
    });

    this.restService
      .post('/vote', chosenIds)
      .subscribe((res: Response) => {
        this.router.navigate(['/overview'])
      });
  }
}
