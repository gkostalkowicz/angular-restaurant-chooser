import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.css']
})
export class UserDropdownComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService, builder: FormBuilder) { }

  ngOnInit() {
    this.userService.getAll().subscribe((users: User[]) => {
      this.users = users;
      this.userService.currentUser = this.users[0];
    });
  }

  onSelect(id: number) {
    this.userService.currentUser = this.users.find(user => user.id == id);
  }
}
