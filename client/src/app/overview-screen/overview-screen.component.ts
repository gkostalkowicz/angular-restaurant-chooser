import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { RestaurantWithVotes } from '../restaurant-with-votes.model';
import { VoteService } from '../vote.service';

@Component({
  selector: 'app-overview-screen',
  templateUrl: './overview-screen.component.html',
  styleUrls: ['./overview-screen.component.css']
})
export class OverviewScreenComponent implements OnInit {

  restaurants: RestaurantWithVotes[];

  constructor(private voteService: VoteService) { }

  ngOnInit() {
    this.voteService.getRestaurantsWithVotes()
      .subscribe((restaurantsWithVotes: RestaurantWithVotes[]) => {
        this.restaurants = restaurantsWithVotes;
        this.restaurants.sort((r1, r2) => r2.chosenBy.length - r1.chosenBy.length);
      });
  }
}
