import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Restaurant } from '../restaurant.model';
import { RestaurantService } from '../restaurant.service';
import { VoteService } from '../vote.service';

@Component({
  selector: 'app-voting-screen',
  templateUrl: './voting-screen.component.html',
  styleUrls: ['./voting-screen.component.css']
})
export class VotingScreenComponent implements OnInit {

  loaded: boolean;
  restaurants: Restaurant[];

  constructor(private restaurantService: RestaurantService, private voteService: VoteService, private router: Router) { }

  ngOnInit() {
    this.restaurantService.getAll()
      .subscribe((restaurants: Restaurant[]) => {
        this.restaurants = restaurants;
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

    this.voteService.vote(chosenIds)
      .subscribe(() => this.router.navigate(['/overview']));
  }
}
