import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
  
export class ZnkjService {  
    static get parameters() {
        return [[Http]];
    }
  
    constructor(private http:Http) {
         
    }
  
    getData(commandType,deviceName) {
        var url = 'http://61.178.185.170:10030/api/znkj/' + encodeURI(commandType) + '?deviceName='+ encodeURI(deviceName);
        var response = this.http.get(url).map(res => res.json());
        return response;
    }
}