import { AfterViewInit, Component, Renderer, Input, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { ExcelOptions } from '../util/excel-options';
import { Global } from '../util/global';

import '../../../public/css/excel-options.css';
import '../../../public/css/menu.css';

@Component({
    selector: 'main-menu-list',
    templateUrl: './main-menu-list.component.html',
    styleUrls: ['./main-menu-list.component.css']
})
export class MainMenuListComponent implements OnInit {

    public isShown: boolean = false;

    private renderer: Renderer;
    private document: any;

    function: string = '';

    form: FormGroup;
    // @ViewChild('preMultiple') preMultiple;

    projectName: string = '條件';
    basicInformation = ExcelOptions.basicInformation;
    // public routes: any = routes;
    // public search: any = {};
    // public hash: string = '';

    menuList: string[] = Global.menuList;
    identity: string = Global.identity;

    public constructor(renderer: Renderer, private router: Router) {
        this.renderer = renderer;
        this.document = document;

        // console.log('routes:');
        // console.log(this.routes);
        // this.routes = this.routes.filter((v: any) => v.path !== '**');
        // this.router.events.subscribe((event: any) => {
        //     if (event instanceof NavigationEnd) {
        //         this.hash = event.url;
        //     }
        // });
    }

    ngOnInit() {
        this.form = new FormGroup({});
        this.form.addControl('selectMultiple', new FormControl(''));
    }

    public ngAfterViewInit(): any {
        this.router.events.subscribe((event: any) => {
            if (event instanceof NavigationEnd) {
                this.toggle(false);
            }
        });
    }

    public toggle(isShown?: boolean): void {
        this.isShown = typeof isShown === 'undefined' ? !this.isShown : isShown;
        console.log("main-menu click");
        if (this.document && this.document.body) {
            this.renderer.setElementClass(this.document.body, 'isOpenMenu', this.isShown);
            if (this.isShown === false) {
                this.renderer.setElementProperty(this.document.body, 'scrollTop', 0);
            }
        }
    }

    onMenuListSelected(option: any) {
        console.log('Selected:' + option);
        this.function = option;
    }

    onMultipleSelected() {
        console.log('Multiple Selected');
        // this.logMultiple('- selected (value: ' + item.value + ', label:' +
        //     item.label + ')');
    }

    onMultipleDeselected(option: any) {
        console.log('Deselected:');
        console.log(option);
        // this.logMultiple('- deselected (value: ' + item.value + ', label:' +
        //     item.label + ')');
    }

    // private logMultiple(msg: string) {
    //     this.logMultipleString += msg + '\n';

    //     // Let change detection do its work before scrolling to div bottom.
    //     setTimeout(() => {
    //         this.scrollToBottom(this.preMultiple.nativeElement);
    //     });
    // }

    // private scrollToBottom(elem) {
    //     elem.scrollTop = elem.scrollHeight;
    // }

}