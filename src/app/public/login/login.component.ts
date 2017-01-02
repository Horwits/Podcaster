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
  onGetUser() {
    this.firebaseService.getUser()
      .subscribe(
      user => {
        this.response = JSON.stringify(user);
        console.log(this.response);
      },
      error => console.log(error)
      );
  }
}
