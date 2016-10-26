import { Component,OnInit } from '@angular/core';

import { ApiService } from '../util/api-service.provider';
import { TableColumn } from '../util/common.vo';
import { InvoiceNumberResp } from '../util/resp.vo';
import { InvoiceNumberPost } from '../util/post.vo';
import { Constants } from '../util/constants';
import { i18n } from '../util/language';
import { I18nService } from "../util/i18n.service";
import { InvoiceTable } from './invoice-table.component';

@Component({
  selector: 'app-invoice-number',
  templateUrl: './invoice-number.component.html',
  styleUrls: ['./invoice-number.component.css']
})
export class InvoiceNumberComponent implements OnInit {

    i18n: I18nService = new I18nService();
    tableColumn: TableColumn = new TableColumn();

    invoicesDup: InvoiceNumberResp[];
    invoicesTri: InvoiceNumberResp[];

    invoiceDup: InvoiceNumberPost;
    invoiceTri: InvoiceNumberPost;
    
    projectName: string = 'abStoreA1';
    statusDup: string;
    statusTri: string;
    projectOptions = Constants.projectOptions;
    languageOptions = Constants.languageOptions;


    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        console.log('init');
        this.i18n = i18n;
        this.tableColumn.setTableColumn(i18n.translate("startNumberTable"), i18n.translate("endNumberTable"), i18n.translate("invoiceAmount"), i18n.translate("delete"), i18n.translate("invoiceNumber"));
        this.statusDup = 'loading';
        this.statusTri = 'loading';
        this.invoiceDup = new InvoiceNumberPost('', '', '', '');
        this.invoiceTri = new InvoiceNumberPost('', '', '', '');
        this.invoiceUpdateTable(this.projectName);
    }

    onSelectedProject(projectName: any): void {
        console.log('Selected: ' + projectName.value);
        this.projectName = projectName.value;
        this.statusDup = 'loading';
        this.statusTri = 'loading';
        this.invoiceUpdateTable(projectName.value);
    }

    updateInvoiceNumberDup(){
        console.log('Update Invoice Number Dup:'+ this.projectName);
        this.statusDup = 'loading';
        this.statusTri = 'loading';
        this.invoiceDup.srcProject = this.projectName;
        this.invoiceDup.type = Constants.invoiceTypeDup;
        this.apiService.postInvoiceNumber(this.invoiceDup)
                .then(resp => console.log(resp[0]))
                .then(resp => this.invoiceUpdateTable(this.projectName));
    }

    updateInvoiceNumberTri(){
        console.log('Update Invoice Number Tri');
        this.statusDup = 'loading';
        this.statusTri = 'loading';
        this.invoiceTri.srcProject = this.projectName;
        this.invoiceTri.type = Constants.invoiceTypeTri;
        this.apiService.postInvoiceNumber(this.invoiceTri)
                .then(resp => console.log(resp[0]))
                .then(resp => this.invoiceUpdateTable(this.projectName));
    }

    invoiceUpdateTable(projectName: string){
        this.invoicesDup = [{startNumber: 'Loading...', endNumber: 'Loading...', srcProject: '', type: ''}];
        this.invoicesTri = [{startNumber: 'Loading...', endNumber: 'Loading...', srcProject: '', type: ''}];
        this.apiService.getInvoiceNumber(projectName, Constants.invoiceTypeDup)
                .then(InvoiceNumberResp => {
                    this.invoicesDup = InvoiceNumberResp;
                    for (var i in this.invoicesDup) {
                        this.invoicesDup[i].srcProject = projectName;
                        this.invoicesDup[i].type = Constants.invoiceTypeDup;
                    }
                    this.statusDup = 'active';
                });
        this.apiService.getInvoiceNumber(projectName, Constants.invoiceTypeTri)
                .then(InvoiceNumberResp => {
                    this.invoicesTri = InvoiceNumberResp;
                    for (var i in this.invoicesTri) {
                        this.invoicesTri[i].srcProject = projectName;
                        this.invoicesTri[i].type = Constants.invoiceTypeTri;
                    }
                    this.statusTri = 'active';
                });
    }

    onSelectedLanguage(language: any): void {
        i18n.setUserLang(language.value);
        this.tableColumn.setTableColumn(i18n.translate("startNumberTable"), i18n.translate("endNumberTable"), i18n.translate("invoiceAmount"), i18n.translate("delete"), i18n.translate("invoiceNumber"));
    }
}
