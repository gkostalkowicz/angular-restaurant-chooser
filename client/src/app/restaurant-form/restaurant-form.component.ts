import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { Restaurant } from '../restaurant.model';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})
export class RestaurantFormComponent implements OnInit {

  @Input() submitButtonLabel: string;
  @Output() save: EventEmitter<any>;
  formGroup: FormGroup;
  name: AbstractControl;

  constructor(builder: FormBuilder) {
    this.save = new EventEmitter();
    this.formGroup = builder.group({
      'name': ['', Validators.required]
    });
    this.name = this.formGroup.controls['name'];
  }

  ngOnInit() {
  }

  setRestaurant(restaurant: Restaurant) {
    this.name.setValue(restaurant.name);
  }

  onSubmit(formGroup: FormGroup) {
    this.save.emit({ name: formGroup['name'] });
  }
}
