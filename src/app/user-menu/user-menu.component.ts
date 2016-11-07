import { Component } from '@angular/core';

import { CookieService } from '../util/cookie-service.provider';
import { Constants } from '../util/constants';

import '../../../public/css/menu.css';

@Component({
    selector: 'user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent {

    constructor(private cookieService: CookieService) { }

    public toggled(open: boolean): void {
        console.log('Dropdown is now: ', open);
    }

    logout() {
        this.cookieService.deleteCookie(Constants.loginCheck);
    }
}