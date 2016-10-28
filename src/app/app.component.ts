import { Component } from '@angular/core';

import { I18nService } from "./util/i18n.service";

import { language, i18n } from './util/language';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  

  i18n: I18nService = new I18nService();
  ngOnInit(): void {
    console.log("app init");
    i18n.init(language);
    this.i18n = i18n;
  }
}