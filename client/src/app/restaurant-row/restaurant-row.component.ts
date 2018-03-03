import { Component, OnInit, Input } from '@angular/core';
import { RestaurantWithVotes } from '../restaurant-with-votes.model';

@Component({
  selector: 'app-restaurant-row',
  templateUrl: './restaurant-row.component.html',
  styleUrls: ['./restaurant-row.component.css']
})
export class RestaurantRowComponent implements OnInit {

  @Input() restaurant: RestaurantWithVotes;
  expanded: boolean;

  constructor() { }

  ngOnInit() { }

  joinVotes(count?: number): string {
    return this.restaurant.chosenBy
      .slice(0, count ? count : this.restaurant.chosenBy.length)
      .join(', ');
  }

  toggleExpandedVotes() {
    this.expanded = !this.expanded;
    return false;
  }
}
