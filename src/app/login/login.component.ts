import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {LoginService} from '../loginService/login.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, public _loginService: LoginService) { }

  ngOnInit() {
  }

  username: string;
  password: string;
  snackbar: string;

  login(){
    this._loginService.login(this.username,this.password).then(response=>{
      if(response){
        this.snackbar="You are logged"
      }else{
        this.snackbar="You are not logged"
      }
      this._snackBar.open(this.snackbar, "", {
        duration: 3000,
      }); 
    }).catch(response=>{
      this._snackBar.open("Something went wrong", "ERROR", {
        duration: 3000,
      }); 
    });
  }

}
