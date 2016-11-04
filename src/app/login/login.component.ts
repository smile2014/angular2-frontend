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
    Global.LoginStatus = false;
    console.log("Login Status: " + Global.LoginStatus);
  }

  loginCheck() {
    Global.LoginStatus = true;
  }
}