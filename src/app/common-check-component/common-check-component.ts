import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';

import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';

import { CookieService } from "../util/cookie-service.provider";
import { Constants } from '../util/constants';

@Component({
    selector: 'common-check',
    templateUrl: './common-check-component.html'
})
export class CommonCheckComponent implements OnInit, OnChanges {

    @Input()
    commonCheck: string[];

    private language: any;
    private userLanguage: string;

    loginCheck: boolean = false;
    uploadCheck: boolean = false;

    constructor(private cookieService: CookieService) { }

    @ViewChild('childModal') public childModal: ModalDirective;

    ngOnInit() { }

    ngOnChanges() {
        console.log("Common Check");
        for (var checkType of this.commonCheck) {
            if (checkType === "loginCheck") this.checkLoginCookie();
            if (checkType === "uploadCheck") this.checkUpload();
        }
    }

    public hideChildModal(): void {
        this.childModal.hide();
    }

    checkLoginCookie() {
        console.log('Start Login Check');
        this.loginCheck = true;
        if (this.cookieService.getCookieValue(Constants.loginCheck) != Constants.loginToken) {
            setTimeout(() => { this.childModal.show() }, 200);
        } else {
            this.loginCheck = false;
        }
    }

    checkUpload() {
        console.log('Start Upload');
        this.uploadCheck = true;
        setTimeout(() => { this.childModal.show() }, 200);
        setTimeout(() => { this.childModal.hide(), this.uploadCheck = false; }, 5000);
    }
}