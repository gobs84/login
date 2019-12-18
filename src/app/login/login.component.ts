import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {LoginService} from '../loginService/login.service'
import config from '../../assets/config.json'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _configuration: { backEndUrl: any; postLogin: any; productsUrl:any}
  constructor(private _snackBar: MatSnackBar, public _loginService: LoginService) { 
    this._configuration = config;
  }

  ngOnInit() {
  }

  username: string;
  password: string;
  snackbarMessage: string;
  

  login(){
    this._loginService.login(this.username,this.password).then(response=>{
      if(response==200){
        this.snackbarMessage="You are logged";
        window.location.href = this._configuration.productsUrl;
      }
      this._snackBar.open(this.snackbarMessage, "", {
        duration: 3000,
      }); 
    }).catch(response=>{
      this._snackBar.open(response, "", {
        duration: 3000,
      }); 
    });
  }

}
