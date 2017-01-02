import { FirebaseService } from '../../core/services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [FirebaseService]
})
export class LoginComponent implements OnInit {
  response;
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
  }
  ongetUsers() {
    this.firebaseService.getUsers()
      .subscribe(
      user => {
        this.response = JSON.stringify(user);
      },
      error => console.log(error)
      );
  }

  onGetUserByUserName(userName) {
    this.firebaseService.getByUserName(userName)
      .subscribe(users => {
        console.log(users as Array<Object>);
        /*let user = users(x => x.userName === userName);
        console.log(user);*/  
    },
  error => console.log(error)
      );
}
}
