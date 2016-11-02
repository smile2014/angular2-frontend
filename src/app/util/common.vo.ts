import { Injectable } from '@angular/core';

export class TableColumn {
    startNumberTable: string;
    endNumberTable: string;
    invoiceAmount: string;
    deleteNumber: string;
    invoiceNumber: string;

    setTableColumn(startNumberTable: string, endNumberTable: string, invoiceAmount: string, deleteNumber: string, invoiceNumber: string) {
        this.startNumberTable = startNumberTable;
        this.endNumberTable = endNumberTable;
        this.invoiceAmount = invoiceAmount;
        this.deleteNumber = deleteNumber;
        this.invoiceNumber = invoiceNumber;
    }
}

@Injectable()
export class MenuList {
    menuList: string[];

    setMenuList(menuList: string[]) {
        this.menuList = menuList;
    }
    getMenuList(): any {
        return this.menuList;
    }
}

export interface SelectOption {
    label: string;
    value: string;
}