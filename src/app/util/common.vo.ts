export class TableColumn {
    startNumberTable: string;
    endNumberTable: string;
    invoiceAmount: string;
    deleteNumber: string;
    invoiceNumber: string;

    setTableColumn(startNumberTable: string, endNumberTable: string, invoiceAmount: string, deleteNumber: string, invoiceNumber: string){
        this.startNumberTable = startNumberTable;
        this.endNumberTable = endNumberTable;
        this.invoiceAmount = invoiceAmount;
        this.deleteNumber = deleteNumber;
        this.invoiceNumber = invoiceNumber;
    }
}