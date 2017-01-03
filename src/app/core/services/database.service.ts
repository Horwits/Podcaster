import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class FirebaseService {
    constructor(private angualarFireService: AngularFire) { }

    setUser(user) {
        const body = JSON.stringify(user);
        this.angualarFireService.database.list('/users').push(user);
    }

    getUsers(): any {
        return this.angualarFireService.database.list('/users');
    }

    /*getByUserName(userName: string) {
    return this.http.get(this.dbUrl + '/users.json')
        .map(response => response.json().find(un => un.userName === userName));
    }*/
}