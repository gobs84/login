import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  username: string;
  password: string;

  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
      alert("Hello");      
    }else {
      alert("Invalid credentials");
    }
  }

}
