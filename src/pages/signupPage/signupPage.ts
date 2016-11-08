import { Component } from '@angular/core';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';

@Component({
    templateUrl: 'signupPage.html'
})
export class SignupPage {
    email: string;
    pwd: string;
    constructor(public auth: Auth, public user: User) {

    }
    doSignup() {
        let details: UserDetails = { 'email': this.email, 'password': this.pwd };

        this.auth.signup(details).then(() => {
            // `this.user` is now registered
            console.log('success');
        }, (err: IDetailedError<string[]>) => {
            for (let e of err.details) {
                if (e === 'conflict_email') {
                    alert('Email already exists.');
                } else {
                    // handle other errors
                }
            }
        });
    }

}
