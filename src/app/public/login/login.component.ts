import { FirebaseService } from '../../core/services/database.service';
import { Component, OnInit } from '@angular/core';

import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [FirebaseService]
})
export class LoginComponent implements OnInit {
  users: FirebaseListObservable<any[]>;
  constructor(private databaseService: FirebaseService) { }

  ngOnInit() {
  }
  ongetUsers() {
    this.users = this.databaseService.getUsers();
    console.log(this.users);
    /*
      .subscribe(
      user => {
        this.response = JSON.stringify(user);
      },
      error => console.log(error)
      );*/
  }

  /*onGetUserByUserName(userName) {
    this.databaseService.getByUserName(userName)
      .subscribe(users => {
        console.log(users);
        let user = users(x => x.userName === userName);
        console.log(user);
      },
      error => console.log(error)
      );
  }*/
}
