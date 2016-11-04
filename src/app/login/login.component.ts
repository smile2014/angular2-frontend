import { Component, OnInit } from '@angular/core';

import { Global } from '../util/global';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // loginStatus: boolean = global.LoginStatus;

  ngOnInit() {
    Global.LoginCheck = false;
    console.log("Login Check: " + Global.LoginCheck);
  }

  loginCheck() {
    Global.LoginCheck = true;
  }
}