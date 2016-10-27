import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//declarations
import { InvoiceNumberComponent } from './invoice-number/invoice-number.component';
import { NotificationComponent } from './notification/notification.component';
import { InvoiceTable } from './invoice-number/invoice-table.component';
import { LanguageComponent } from './language/language.component';
import { JsonPipeComponent } from './json-pipe/json-pipe.component';
import { LoginComponent } from './login/login.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainMenuListComponent } from './main-menu-list/main-menu-list.component';
import { UserMenuComponent } from './user-menu/user-menu.component';

//util
import { ApiService } from './util/api-service.provider';
import { I18nService } from './util/i18n.service';
import { MenuList } from './util/common.vo';

//bootstrap
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';

//select lib
import { SelectModule } from 'angular2-select';

//primeng lib
import { InputTextModule, DataTableModule, ButtonModule, SharedModule } from 'primeng/primeng';



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    JsonpModule,

    //bootstrap
    DropdownModule,

    //select
    SelectModule,

    //prieng
    InputTextModule,
    DataTableModule,
    ButtonModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    InvoiceNumberComponent,
    NotificationComponent,
    InvoiceTable,
    LanguageComponent,
    JsonPipeComponent,
    LoginComponent,
    MainMenuComponent,
    MainMenuListComponent,
    UserMenuComponent
  ],
  providers: [
    ApiService,
    I18nService,
    MenuList
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }