import { Component, OnInit } from '@angular/core';

import { I18nService } from "../util/i18n.service";

import { Constants } from '../util/constants';

@Component({
    selector: 'language',
    templateUrl: './language.component.html'
})

export class LanguageComponent implements OnInit {

    lang = {
        defaultLang: 'en',
        lang: {
            "title": {
                en: "English",
                ch: "中文"
            },
            "number": {
                en: "one,two,three,four,five",
                ch: "一,二,三,四,五"
            }
        }
    };

    i18n: I18nService = new I18nService();
    title: string;
    number: string;
    languageOptions = Constants.languageOptions;
    defaultLanguage:string = 'English';
    // LanguageOptions

    constructor() { }

    ngOnInit() {
        console.log("init");
        this.i18n.init(this.lang);
    }

    onSelected(language: any): void {
        console.log('Language: ' + language.value);
        this.i18n.setUserLang(language.value);
    }

}