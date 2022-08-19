import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users: any;

  constructor() {
    this.users = [
      { id: 0, username: 'Cacahuète', email: 'kikook@cat.mail' },
      { id: 1, username: 'Robert', email: 'bebere@human.mail' },
      { id: 2, username: 'Tempêt', email: 'pouts@cat.mail' },
      { id: 3, username: 'Didier', email: 'dda@human.mail' },
    ];
  }

  ngOnInit(): void {}
}
