import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'username'
  password = 'pass'
  errorMessage = "Invalid Credentials"
  invalidLogin = false
  constructor() { }

  ngOnInit(): void {
  }

  handleLogin() {
    if(this.username === 'raghav510' && this.password === 'dummy'){
      this.invalidLogin = false;
    }
    else{
      this.invalidLogin = true;
    }
  }
}
