import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

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
import { I18nService } from './util/i18n-service.provider';
import { MenuList } from './util/common.vo';
import { CommonCheck } from './util/common-check';
import { CommonCheckComponent } from './common-check-component/common-check-component';
import { Json2StrAlPipe } from './pipe/pipe';
import { CookieService } from './util/cookie-service.provider';

//bootstrap lib
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

//select lib
import { SelectModule } from 'angular2-select';

//primeng lib
import { InputTextModule } from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { SharedModule } from 'primeng/primeng';
import { SelectButtonModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { FieldsetModule } from 'primeng/primeng';

//Charts lib
import { ChartsModule } from 'ng2-charts/ng2-charts';
//Charts declarations
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './charts/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './charts/radar-chart/radar-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { PolarAreaChartComponent } from './charts/polar-area-chart/polar-area-chart.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    JsonpModule,

    //bootstrap
    DropdownModule,
    ModalModule,

    //select
    SelectModule,

    //primeng
    InputTextModule,
    DataTableModule,
    ButtonModule,
    SharedModule,
    SelectButtonModule,
    PanelModule,
    FieldsetModule,

    //Charts
    ChartsModule
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
    UserMenuComponent,
    CommonCheckComponent,
    Json2StrAlPipe,

    //Charts
    LineChartComponent,
    BarChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PieChartComponent,
    PolarAreaChartComponent
  ],
  providers: [
    ApiService,
    [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
    I18nService,
    MenuList,
    CommonCheckComponent,
    CookieService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }