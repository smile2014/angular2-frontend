import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Http } from '@angular/http';

import { ApiService } from '../util/api-service.provider';
import { InvoiceNotificationThresholdResp } from '../util/resp.vo';
import { InvoiceNotificationThresholdPost } from '../util/post.vo';
import { Constants } from '../util/constants';
import { i18n } from '../util/language';
import { I18nService } from "../util/i18n.service";

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

    i18n: I18nService = new I18nService();

    invoiceThresholdDupResp: InvoiceNotificationThresholdResp;
    invoiceThresholdTriResp: InvoiceNotificationThresholdResp;
    invoiceThresholdDupPost: InvoiceNotificationThresholdPost;
    invoiceThresholdTriPost: InvoiceNotificationThresholdPost;

    statusDup: string;
    statusTri: string;
    projectName: string = 'abStoreA1';
    projectOptions = Constants.projectOptions;
    languageOptions = Constants.languageOptions;

    constructor(
        private apiService: ApiService,
        private http: Http) { }

    ngOnInit(): void {
        // debugger;
        console.log('init');
        this.i18n = i18n;
        this.invoiceThresholdDupPost = new InvoiceNotificationThresholdPost('', '', '');
        this.invoiceThresholdTriPost = new InvoiceNotificationThresholdPost('', '', '');
        this.statusDup = 'loading';
        this.statusTri = 'loading';
        console.log('statusDup= ' + this.statusDup);
        console.log('statusTri= ' + this.statusTri);
        this.apiService.getInvoiceThreshold('abStoreA1', Constants.invoiceTypeDup)
            .then(InvoiceNotificationThresholdResp => this.invoiceThresholdDupResp = InvoiceNotificationThresholdResp[0])
            .then(resp => {
                this.invoiceThresholdDupPost.thresholdAmount = this.invoiceThresholdDupResp.hintThreshold;
                this.statusDup = 'active';
                console.log('statusDup= ' + this.statusDup);
            });
        this.apiService.getInvoiceThreshold('abStoreA1', Constants.invoiceTypeTri)
            .then(InvoiceNotificationThresholdResp => this.invoiceThresholdTriResp = InvoiceNotificationThresholdResp[0])
            .then(resp => {
                this.invoiceThresholdTriPost.thresholdAmount = this.invoiceThresholdTriResp.hintThreshold;
                this.statusTri = 'active';
                console.log('statusTri= ' + this.statusTri);
            });
    }

    updateThresDup(): void {
        console.log('post');
        this.invoiceThresholdDupPost.type = Constants.invoiceTypeDup;
        this.invoiceThresholdDupPost.srcProject = this.projectName;
        this.apiService.postInvoiceThreshold(this.invoiceThresholdDupPost)
            .then(resp => console.log(resp[0]))
            .then(resp => this.apiService.getInvoiceThreshold(this.projectName, Constants.invoiceTypeDup)
                .then(InvoiceNotificationThresholdResp => this.invoiceThresholdDupResp = InvoiceNotificationThresholdResp[0]));
    }

    updateThresTri(): void {
        console.log('post');
        this.invoiceThresholdTriPost.type = Constants.invoiceTypeTri;
        this.invoiceThresholdTriPost.srcProject = this.projectName;
        this.apiService.postInvoiceThreshold(this.invoiceThresholdTriPost)
            .then(resp => console.log(resp[0]))
            .then(resp => this.apiService.getInvoiceThreshold(this.projectName, Constants.invoiceTypeTri)
                .then(InvoiceNotificationThresholdResp => this.invoiceThresholdTriResp = InvoiceNotificationThresholdResp[0]));
    }


    onSelectedProject(projectName: any): void {
        console.log('Selected: ' + projectName.value);
        this.projectName = projectName.value;
        this.statusDup = 'loading';
        this.statusTri = 'loading';
        console.log('statusDup= ' + this.statusDup);
        console.log('statusTri= ' + this.statusTri);
        this.apiService.getInvoiceThreshold(projectName.value, Constants.invoiceTypeDup)
            .then(InvoiceNotificationThreshold => this.invoiceThresholdDupResp = InvoiceNotificationThreshold[0])
            .then(resp => {
                this.invoiceThresholdDupPost.thresholdAmount = this.invoiceThresholdDupResp.hintThreshold;
                this.statusDup = 'active';
                console.log('statusDup= ' + this.statusDup);
            });
        this.apiService.getInvoiceThreshold(projectName.value, Constants.invoiceTypeTri)
            .then(InvoiceNotificationThreshold => this.invoiceThresholdTriResp = InvoiceNotificationThreshold[0])
            .then(resp => {
                this.invoiceThresholdTriPost.thresholdAmount = this.invoiceThresholdTriResp.hintThreshold;
                this.statusTri = 'active';
                console.log('statusTri= ' + this.statusTri);
            });
    }

    onSelectedLanguage(language: any): void {
        i18n.setUserLang(language.value);
    }
}