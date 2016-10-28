import { Injectable } from '@angular/core';

@Injectable()
export class CommonCheck {

    private language: any;
    private userLanguage: string;

    isLogin(language: string): void {
        console.log(language);
        this.userLanguage = language;
        //call api
    }
}