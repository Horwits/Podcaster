import { User } from '../models/user.model';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

/*import * as firebase from 'firebase';*/

declare var require: any;
declare var module: any;

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  signUpUser(user: User) {
    console.log(firebase);
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function (error) {
      console.log(error);
    });
  }

  signInUser(user: User) {
    console.log(user.email);
    firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function (error) {
      // Handle Errors here.
      console.log(error);
    });
  }

  logOut() {
    firebase.auth().signOut();
  }

  isAuthenticated() {
    let user = firebase.auth().currentUser;

    if (user) {
      return true;
    } else {
      return false;
    }
  }
  /* signin(): Observable<boolean> {
     return Observable
       .of(true)
       .delay(1000)
       .do(val => this.isLoggedIn = true);
   }
 
   logout(): void {
     this.isLoggedIn = false;
   }*/
}
