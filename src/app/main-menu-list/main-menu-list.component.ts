import { AfterViewInit, Component, Renderer, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { SelectItem } from 'primeng/primeng';

import { ExcelOptions, BasicInformation } from '../util/excel-options';
import { Global } from '../util/global';
import { CommonCheck } from "../util/common-check";

import '../../../public/css/excel-options.css';
import '../../../public/css/menu.css';

@Component({
    selector: 'main-menu-list',
    templateUrl: './main-menu-list.component.html',
    styleUrls: ['./main-menu-list.component.css']
})
export class MainMenuListComponent implements OnInit {

    public isShown: boolean = false;

    private document: any;

    function: string = '';

    showCharts: any[] = [];
    selectTable: string[] = [];
    newTable: string = '';
    delTable: string = '';
    cloumn: string[][] = [];

    // a:array[]

    types: SelectItem[];
    selectedType: string;
    barChart: boolean = false;
    doughnutChart: boolean = false;
    lineChart: boolean = false;

    projectName: string = '條件';
    basicInformation = ExcelOptions.basicInformation;
    // public routes: any = routes;
    // public search: any = {};
    // public hash: string = '';

    menuList: string[] = Global.menuList;
    identity: string = Global.identity;

    public constructor(private renderer: Renderer, private router: Router, private commonCheck: CommonCheck) {
        this.renderer = renderer;
        this.document = document;

        this.types = [];
        this.types.push({ label: '柱狀圖', value: 'BarChart' });
        this.types.push({ label: '圓餅圖', value: 'DoughnutChart' });
        this.types.push({ label: '曲線圖', value: 'LineChart' });
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
        console.log('Show Charts:');
        console.log(this.showCharts);
    }

    onMultipleSelected(option: any, table: any) {
        console.log('Multiple Selected: ' + table.value);
        // console.log(table);
        // console.log(option);
        // console.log(BasicInformation[table.value]);
        this.newTable = table.value;
        this.addShowCharts();
        // this.showCharts.push(table.value);
    }

    onMultipleDeselected(option: any, table: any) {
        console.log('Multiple Deselected:' + table.value);
        // console.log(table);
        // console.log(option);
        // console.log(BasicInformation[table.value]);
        this.delTable = table.value;
        this.delShowCharts();
        // this.charts.splice(this.charts.indexOf(label), 1);
    }

    onSelectedChart(option: any) {
        console.log('Selected Chart:' + option);
        if (option === 'BarChart') {
            this.barChart = true;
            this.doughnutChart = false;
            this.lineChart = false;
        }
        if (option === 'DoughnutChart') {
            this.barChart = false;
            this.doughnutChart = true;
            this.lineChart = false;
        }
        if (option === 'LineChart') {
            this.barChart = false;
            this.doughnutChart = false;
            this.lineChart = true;
        }
    }

    addShowCharts() {
        this.selectTable.push(this.newTable);
        this.updateShowCharts();
    }

    delShowCharts() {
        this.selectTable.splice(this.selectTable.indexOf(this.delTable), 1);
        this.showCharts.splice(this.showCharts.indexOf(this.delTable), 1);
        this.updateShowCharts();
    }

    updateShowCharts() {
        var ifAddTable: boolean = true;
        for (var addTable of this.selectTable) {
            for (var existTable of this.showCharts) {
                if (addTable === existTable) {
                    ifAddTable = false;
                    break;
                }
                ifAddTable = true;
            }
            if(ifAddTable){
                this.showCharts.push(addTable);
            }
        }
    }
}