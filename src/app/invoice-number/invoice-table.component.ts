import { Component, Input, OnInit } from '@angular/core';

import { I18nService } from "../util/i18n.service";

import { TableColumn } from '../util/common.vo';
import { InvoiceNumberResp } from '../util/resp.vo';
import { ApiService } from '../util/api-service.provider';
import { InvoiceNumberComponent } from './invoice-number.component';
import { i18n } from '../util/language';

@Component({
  selector: 'invoice-table',
  templateUrl: './invoice-table.component.html'
})

export class InvoiceTable {
    @Input()
    invoicesType: InvoiceNumberResp[];
    @Input()
    status: string;
    @Input()
    tableColumn: TableColumn;
 
    i18n: I18nService = new I18nService();

    invoiceDel: InvoiceNumberResp;

    constructor(private apiService: ApiService) { }

    deleteInvoiceNumber(invoice: InvoiceNumberResp):void {
        console.log('delete invoice number.');
        console.log(invoice);
        this.status = 'loading';
        this.invoicesType = [{startNumber: 'Loading...', endNumber: 'Loading...', srcProject: '', type: ''}];
        this.apiService.delInvoiceNumber(invoice)
                .then(resp => console.log(resp[0]))
                .then(resp => this.apiService.getInvoiceNumber(invoice.srcProject, invoice.type))
                .then(InvoiceNumberResp => {
                    this.invoicesType = InvoiceNumberResp;
                    for (var i in this.invoicesType) {
                        this.invoicesType[i].srcProject = invoice.srcProject;
                        this.invoicesType[i].type = invoice.type;
                    }
                    this.status = 'active';
                });
    }
}