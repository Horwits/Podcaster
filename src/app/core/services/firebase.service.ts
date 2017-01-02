import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class FirebaseService {
    private dbUrl = 'https://podcaster-532af.firebaseio.com/';

    constructor(private http: Http) { }

    setUser(user) {
        const body = JSON.stringify(user);

        return this.http.post(this.dbUrl + '/user.json', body).map(response => response.json());
    }

    getUser() {
        return this.http.get(this.dbUrl + '/user.json').map(response => response.json());
    }
}
