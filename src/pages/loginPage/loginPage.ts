import { Component } from '@angular/core';
import { Auth, User } from '@ionic/cloud-angular';

@Component({
    templateUrl:'loginPage.html'
})
export class LoginPage {
  constructor(public auth: Auth, public user: User) {
  }
}