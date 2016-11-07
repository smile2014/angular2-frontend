import { Injectable } from '@angular/core';

@Injectable()
export class I18nService {

    private language: any;
    private userLanguage: string;

    init(language: any): void {
        this.language = language;
        this.setUserLang(language.defaultLang);
    }

    setUserLang(language: string): void {
        this.userLanguage = language;
    }

    translate(key: string): string {
        if (typeof this.language.lang !== 'undefined' && this.language.lang.hasOwnProperty(key)) {
            return this.language.lang[key][this.userLanguage];
        } else {
            return key;
        }
    }
}