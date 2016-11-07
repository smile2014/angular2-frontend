import { Injectable } from '@angular/core';

@Injectable()
export class CookieService {
    // private isConsented: boolean = false;

    // constructor() {
        // this.isConsented = this.getCookie(COOKIE_CONSENT) === "1";
    // }

    getCookieValue(name: string) {
        let cookieAl: Array<string> = document.cookie.split(';');
        let cookieAlLen: number = cookieAl.length;
        let cookieName = name + "=";
        let cookieCheck: string;

        for (let i: number = 0; i < cookieAlLen; i += 1) {
            cookieCheck = cookieAl[i].replace(" ", "");
            if (cookieCheck.indexOf(cookieName) === 0) {
                return cookieCheck.substring(cookieName.length, cookieCheck.length);
            }
        }
        return "";
    }

    deleteCookie(name: string) {
        this.setCookie(name, "", -1);
    }

    setCookie(name: string, value: string, expireDays: number, path: string = "") {
        let date: Date = new Date();
        date.setTime(date.getTime() + expireDays * 24 * 60 * 60 * 1000);
        let expires: string = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + "; " + expires + (path.length > 0 ? "; path=" + path : "");
    }

    // private consent(isConsent: boolean, e: any) {
    //     if (!isConsent) {
    //         return this.isConsented;
    //     } else if (isConsent) {
    //         this.setCookie(COOKIE_CONSENT, "1", COOKIE_CONSENT_EXPIRE_DAYS);
    //         this.isConsented = true;
    //         e.preventDefault();
    //     }
    // }
}