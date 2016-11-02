import { AfterViewInit, Component, Renderer, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { SelectItem } from 'primeng/primeng';

import { BasicInformation } from '../util/excel-options';
import { Global } from '../util/global';
import { CommonCheck } from "../util/common-check";
import { SelectOption } from "../util/common.vo";

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

    //test for main-menu
    function: string = '';

    showCharts: string[] = [];
    selectColumn: string[] = [];
    newColumn: string = '';
    delColumn: string = '';
    allTable: string[] = [];

    //button for choose charts
    types: SelectItem[];
    selectedType: string;
    barChart: boolean = false;
    doughnutChart: boolean = false;
    lineChart: boolean = false;

    projectName: string = '條件';
    basicInformation = BasicInformation;
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
        this.allTable.push("BasicInformation");
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
        // console.log("main-menu click");
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
        console.log('Show Charts:' + this.showCharts);
        // console.log(BasicInformation);
        // for (var column in BasicInformation) {
        //     console.log(column + ":");
        //     for (var value in BasicInformation[column]) {
        //         console.log(value + ":" + BasicInformation[column][value]);
        //     }
        // }
    }

    createSelectOption(column: any): any[] {
        let selectOption: SelectOption[] = [];
        for (var selectValue in BasicInformation[column]) {
            selectOption.push({ label: BasicInformation[column][selectValue], value: column + ':' + BasicInformation[column][selectValue] });
        }
        return selectOption;
    }

    onMultipleSelected(option: any, column: any) {
        console.log('Multiple Selected: ' + column);
        // console.log(table);
        // console.log(option);
        // console.log(BasicInformation[table.value]);
        this.newColumn = column;
        this.addShowCharts();
    }

    onMultipleDeselected(option: any, column: any) {
        console.log('Multiple Deselected:' + column);
        // console.log(table);
        // console.log(option);
        // console.log(BasicInformation[table.value]);
        this.delColumn = column;
        this.delShowCharts();
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
        this.selectColumn.push(this.newColumn);
        this.updateShowCharts();
    }

    delShowCharts() {
        this.selectColumn.splice(this.selectColumn.indexOf(this.delColumn), 1);
        this.showCharts.splice(this.showCharts.indexOf(this.delColumn), 1);
        this.updateShowCharts();
    }

    updateShowCharts() {
        var ifAddColumn: boolean = true;
        for (var addColumn of this.selectColumn) {
            for (var existColumn of this.showCharts) {
                if (addColumn === existColumn) {
                    ifAddColumn = false;
                    break;
                }
                ifAddColumn = true;
            }
            if (ifAddColumn) {
                this.showCharts.push(addColumn);
            }
        }
    }
}