import { Component } from '@angular/core';

import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';

import { NavController } from 'ionic-angular';
import { LoginPage } from '../loginPage/loginPage';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public auth: Auth, public navCtrl: NavController) {

  }
  doLogout() {
    this.auth.logout();
    console.log(this.navCtrl);
    this.navCtrl.push(LoginPage, {});
  }

}
