import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
// import 'rxjs/add/operator/toPromise';

import { InvoiceNotificationThresholdResp, InvoiceNumberResp } from './resp.vo';
import { InvoiceNotificationThresholdPost, InvoiceNumberPost } from './post.vo';
import { Constants } from './constants';

@Injectable()
export class ApiService {

    constructor (private http: Http) {}

    private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

    getInvoiceThreshold(projectName: string, invoiceType: string): Promise<InvoiceNotificationThresholdResp[]>{
        console.log('Getting threshold:\n  ProjectName: ' + projectName + '\n  InvoiceType: ' + invoiceType);
        return this.http.get(Constants.respThresholdUrl + '?srcProject=' + projectName + '&type=' + invoiceType)
                    .toPromise()
                    .then(response => response.json() as InvoiceNotificationThresholdResp[])
                    .catch(this.handleError);
    }
    postInvoiceThreshold(invoiceNotificationThresholdPost: InvoiceNotificationThresholdPost): Promise<any[]> {
        console.log('httpPostNVP = ');
        console.log(this.httpPostNVP(invoiceNotificationThresholdPost).toString());
        return this.http
            .post(Constants.postThresholdUrl, this.httpPostNVP(invoiceNotificationThresholdPost).toString(), { headers: this.headers })
            .toPromise()
            .then((response) => response.json() as any[])
            .catch(this.handleError);
    }

    getInvoiceNumber(projectName: string, invoiceType: string): Promise<InvoiceNumberResp[]>{
        console.log('Getting Invoice Number:\n  ProjectName: ' + projectName + '\n  InvoiceType: ' + invoiceType);
        return this.http.get(Constants.respInvoiceNumberUrl + '?srcProject=' + projectName + '&type=' + invoiceType)
                    .toPromise()
                    .then(response => response.json() as InvoiceNumberResp[])
                    .catch(this.handleError);
    }
    postInvoiceNumber(invoiceNumberPost: InvoiceNumberPost): Promise<any[]> {
        console.log('httpPostNVP = ');
        console.log(this.httpPostNVP(invoiceNumberPost).toString());
        return this.http
            .post(Constants.postInvoiceNumberUrl, this.httpPostNVP(invoiceNumberPost).toString(), { headers: this.headers })
            .toPromise()
            .then((response) => response.json() as any[])
            .catch(this.handleError);
    }
    delInvoiceNumber(invoiceNumber: InvoiceNumberPost){
        console.log('httpPostNVP = ');
        console.log(this.httpPostNVP(invoiceNumber).toString());
        return this.http
            .delete(Constants.delInvoiceNumberUrl + '?srcProject=' + invoiceNumber.srcProject + '&type=' + invoiceNumber.type + '&startNumber=' + invoiceNumber.startNumber + '&endNumber=' + invoiceNumber.endNumber)
            .toPromise()
            .then((response) => response.json() as any[])
            .catch(this.handleError);
    }


    private httpPostNVP(obj: Object): URLSearchParams {
        let content = new URLSearchParams();
        for (var i in Object.keys(obj)) {
            var key = Object.keys(obj)[i];
            content.set(key, obj[key]);
        }
        return content
    }
    private handleError(error: any){
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}