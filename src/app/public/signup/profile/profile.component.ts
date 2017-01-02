import { Component, OnInit } from '@angular/core';
import { User } from '../../../core/models/user.model';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    model: User;
    constructor() { }

    ngOnInit() { }
}
