import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { RestService  } from '../rest.service';

@Component({
  selector: 'app-manage-restaurants-create-screen',
  templateUrl: './manage-restaurants-create-screen.component.html',
  styleUrls: ['./manage-restaurants-create-screen.component.css']
})
export class ManageRestaurantsCreateScreenComponent implements OnInit {

  formGroup: FormGroup;
  name: AbstractControl;

  constructor(builder: FormBuilder, private restService: RestService, private router: Router, private route: ActivatedRoute) {
    this.formGroup = builder.group({
      'name': ['', Validators.required]
    });
    this.name = this.formGroup.controls['name'];
  }

  ngOnInit() {
  }

  onSubmit(formGroup: FormGroup) {
    this.restService
      .post('/restaurants', {name: formGroup['name']})
      .subscribe((response: Response) => {
        this.router.navigate(['..'], { relativeTo: this.route });
      });
  }
}
