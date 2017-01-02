import { Component, OnInit } from '@angular/core';
import { User } from '../../core/models/user.model';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    model: User;

    constructor() { }

    ngOnInit() { }
}
