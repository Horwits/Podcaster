import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from '../../core/services/database.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
    providers: [FirebaseService, AuthService]
})
export class SignupComponent implements OnInit {
    form: FormGroup;
    constructor(private formBuilder: FormBuilder, private authService: AuthService) {

    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)])],
            confirmPassword: ['', Validators.required],
            firstName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20)])],
            lastName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20)])],
            email: ['', Validators.required],
            age: ['', Validators.required],
            gender: ['', Validators.required]
        });
    }

    /*setUser() {
        this.firebaseService.setUser(this.form);
    }*/

    onSignUp(value: any) {
        console.log(this.form.value);
        this.authService.signUpUser(this.form.value);
        /*this.firebaseService.setUser(user);*/
       /* this.firebaseService.setUser(value)
            .subscribe(
            user => {
                this.response = JSON.stringify(user);
                console.log(this.response);
            },
            error => console.log(error)
            );*/
		/*this.authService.register(this.form.value)
			.subscribe(res => {
				console.log(res);
			}, err => {
				console.log(err);
			});
	}*/}
}

