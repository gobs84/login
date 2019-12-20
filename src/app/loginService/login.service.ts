import { Injectable } from '@angular/core';
import axios from "axios";
import config from '../../assets/config.json'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _configuration: { backEndUrl: any; postLogin: any; }
  constructor() {
    this._configuration = config;
   }
  
  async login(user:string, pass:string) {
    return new Promise((resolve, reject) => {
      var codified:string=btoa(user+":"+pass);
      console.log(codified);
      let config = {
        headers: {
          Authorization: "Basic "+codified,
        }
      }
      axios.post(this._configuration.backEndUrl + this._configuration.postLogin,"",config)
        .then(response => { resolve(response.status) })
        .catch(error => { 
          console.log(error);
          reject(error);
        })
    })
  }
}
