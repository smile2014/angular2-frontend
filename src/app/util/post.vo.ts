export class InvoiceNotificationThresholdPost {
  type: string;
  thresholdAmount: string;
  srcProject: string;

  constructor(invoiceType: string, threshold: string, srcProject: string) {
    this.type = invoiceType;
    this.thresholdAmount = threshold;
    this.srcProject = srcProject;
  }
}

export class InvoiceNumberPost {
  srcProject: string;
  type: string;
  startNumber: string;
  endNumber: string

  constructor(srcProject: string, type: string, startNumber: string, endNumber: string) {
    this.srcProject = srcProject;
    this.type = type;
    this.startNumber = startNumber;
    this.endNumber = endNumber;
  }
}