import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ZnkjService } from './znkjService';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ZnkjService]
})
export class HomePage {
  commandResult:string;
  constructor(public navCtrl: NavController, private znkjService: ZnkjService) {

  }

  getData(commandType, deviceName) {
    this.znkjService.getData(commandType, deviceName).subscribe(
      data => {
        this.commandResult=data.CommandResult;
        alert(data.CommandResult);
      },
      err => {

      },
      () => console.log('Complete')
    );
  }

}
