import { AfterViewInit, Component, Renderer, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import '../../../public/css/styles.css';
import '../../../public/css/menu.css';

import globals = require('../util/global-value');

@Component({
    selector: 'main-menu-list',
    templateUrl: './main-menu-list.component.html',
    styleUrls: ['./main-menu-list.component.css']
})
export class MainMenuListComponent{

    public isShown: boolean = false;

    private renderer: Renderer;
    private document: any;

    // public routes: any = routes;
    // public search: any = {};
    // public hash: string = '';

    menuList: string[] = globals.menuList;

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
    
}