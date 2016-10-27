import { Component } from '@angular/core';

import '../../../public/css/styles.css';
import '../../../public/css/menu.css';
import '../../../public/css/menu-logo.css';

import globals = require('../util/global-value');

@Component({
    selector: 'main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.css']
    // styleUrls: ['../../../public/scss/menu.scss']
})
export class MainMenuComponent {
    studentMenuList() {
        console.log('studentMenuList');
        globals.menuList = ['修課','退學','活動','社團','獎助'];
    }
    teacherMenuList() {
        console.log('teacherMenuList');
        globals.menuList = ['課程','評分','行程','計畫','薪資'];
    }
}