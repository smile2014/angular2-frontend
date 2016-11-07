import { Component, OnInit } from '@angular/core';

import { Global } from '../util/global';
import { Constants } from '../util/constants';
import { CookieService } from '../util/cookie-service.provider';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // loginStatus: boolean = global.LoginStatus;
  account: string = '';
  password: string = '';

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
  }

  login() {
    console.log("Login");
    console.log("Account: " + this.account);
    console.log("Password: " + this.password);
    this.cookieService.setCookie(Constants.loginCheck, Constants.loginToken, 1);
    // name: string, value: string, expireDays: number, path: string = ""
  }
}