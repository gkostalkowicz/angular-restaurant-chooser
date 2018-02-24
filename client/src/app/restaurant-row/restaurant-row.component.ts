import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../restaurant.model';

@Component({
  selector: 'app-restaurant-row',
  templateUrl: './restaurant-row.component.html',
  styleUrls: ['./restaurant-row.component.css']
})
export class RestaurantRowComponent implements OnInit {

  @Input() restaurant: Restaurant;

  expanded: boolean;

  constructor() { }

  ngOnInit() {
  }

  joinVotes(count?: number): string {
    return this.restaurant.votes
      .slice(0, count ? count : this.restaurant.votes.length)
      .join(', ');
  }

  toggleExpandedVotes() {
    this.expanded = !this.expanded
    return false;
  }
}
