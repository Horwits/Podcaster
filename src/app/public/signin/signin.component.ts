import { AuthService } from '../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

import { FirebaseListObservable } from 'angularfire2';
import { FirebaseService } from '../../core/services/database.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [FirebaseService],
})
export class SignInComponent implements OnInit {
  myForm: FormGroup;
  error: false;
  errorMessage: string;
  users: FirebaseListObservable<any[]>;
  constructor(private databaseService: FirebaseService, private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
     /* firstName: ['', Validators.required],
      lastName: ['', Validators.required]*/
    });
  }
  onSignIn() {
    this.authService.signInUser(this.myForm.value);
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
