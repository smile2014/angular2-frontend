import { Component, OnInit, ViewChild } from '@angular/core';

import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: 'common-check',
    templateUrl: './common-check-component.html'
})
export class CommonCheckComponent implements OnInit {

    private loginTag: boolean = false;

    private language: any;
    private userLanguage: string;

    @ViewChild('childModal') public childModal: ModalDirective;

    ngOnInit() {
        console.log('common check init');
        // this.childModal.show();
        setTimeout(() => { this.childModal.show() }, 500);
    }

    public hideChildModal(): void {
        this.childModal.hide();
    }

    checkLogin() {
        this.childModal.hide();
    }
}