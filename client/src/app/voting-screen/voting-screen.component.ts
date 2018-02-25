import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Restaurant } from '../restaurant.model';

@Component({
  selector: 'app-voting-screen',
  templateUrl: './voting-screen.component.html',
  styleUrls: ['./voting-screen.component.css']
})
export class VotingScreenComponent implements OnInit {

  loaded: boolean;
  restaurants: Restaurant[];

  private http: Http;
  private router: Router;

  constructor(http: Http, router: Router) {
    this.http = http;
    this.router = router;
  }

  ngOnInit() {
    this.http
      .get('http://localhost:8080/restaurants')
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

    this.http
      .post('http://localhost:8080/vote', chosenIds)
      .subscribe((res: Response) => {
        this.router.navigate(['/overview'])
      });
  }
}
