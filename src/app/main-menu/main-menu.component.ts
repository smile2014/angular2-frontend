import { Component, OnInit, Input } from '@angular/core';

import { Global } from '../util/global';
import { CommonCheckComponent } from "../common-check-component/common-check-component";
import { CookieService } from "../util/cookie-service.provider";

import '../../../public/css/styles.css';
import '../../../public/css/menu.css';
import '../../../public/css/menu-logo.css';

@Component({
    selector: 'main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
    // constructor(private commonComponentCheck: CommonCheckComponent) { }
    commonCheck: string[] = [];

    ngOnInit() {
        // this.commonComponentCheck.isLogin('Common Check');
        this.commonCheck = ["loginCheck"];
    }

    studentMenuList() {
        // console.log('studentMenuList');
        Global.identity = '學生';
        Global.menuList = ['修課', '退學', '活動', '社團', '獎助'];
    }
    teacherMenuList() {
        // console.log('teacherMenuList');
        Global.identity = '教師';
        Global.menuList = ['課程', '評分', '行程', '計畫', '上傳'];
    }
}