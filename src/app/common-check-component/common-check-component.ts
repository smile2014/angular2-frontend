import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';

import { CookieService } from "../util/cookie-service.provider";
import { Constants } from '../util/constants';

@Component({
    selector: 'common-check',
    templateUrl: './common-check-component.html'
})
export class CommonCheckComponent implements OnInit {

    @Input()
    commonCheck: any;

    private language: any;
    private userLanguage: string;

    loginCheck: boolean = false;
    testCheck: boolean = false;

    constructor(private cookieService: CookieService) { }

    @ViewChild('childModal') public childModal: ModalDirective;

    ngOnInit() {
        // console.log('Common Check');
        //check cookies
        // this.childModal.show();
        if (this.commonCheck.hasOwnProperty('loginCheck')) this.loginCheck = this.commonCheck.loginCheck;
        console.log('Login Check: ' + this.loginCheck);

        if (this.loginCheck) this.checkLoginCookie();
    }

    public hideChildModal(): void {
        this.childModal.hide();
    }

    checkLoginCookie() {
        // console.log("Login Cookie Value: " + this.cookieService.getCookieValue('LoginCheck'));
        if (this.cookieService.getCookieValue(Constants.loginCheck) != Constants.loginToken) {
            setTimeout(() => { this.childModal.show() }, 200);
        }
    }
}