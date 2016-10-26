export class InvoiceNotificationThresholdResp {
    id: number;
    srcProject: string;
    invoiceType: string;
    hintThreshold: string;
}

export class InvoiceNumberResp {
    startNumber: string;
    endNumber: string;
    srcProject: string;
    type: string;

    constructor(startNumber: string, endNumber: string, srcProject: string, type: string) {
        this.startNumber = startNumber;
        this.endNumber = endNumber;
        this.srcProject = srcProject;
        this.type = type;
    }
}