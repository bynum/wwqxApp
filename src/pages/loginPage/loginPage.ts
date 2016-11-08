import { Component } from '@angular/core';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
@Component({
  templateUrl: 'loginPage.html'
})
export class LoginPage {
  email: string;
  pwd: string;
  constructor(public auth: Auth, public user: User, public navCtrl: NavController) {
  }
  doLogin() {
    let details: UserDetails = { 'email': this.email, 'password': this.pwd };
    this.auth.login('basic', details).then(
      () => {
        console.log('login success');
        console.log(this.auth);
        this.navCtrl.push(TabsPage, {});
      }, (err: IDetailedError<string>) => {
        console.log(err.message);
      }
    );
  }
}