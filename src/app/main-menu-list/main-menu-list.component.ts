import { AfterViewInit, Component, Renderer, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { SelectItem } from 'primeng/primeng';

import { BasicInformation } from '../util/excel-options';
import { Global } from '../util/global';
import { CommonCheck } from "../util/common-check";
import { SelectOption } from "../util/excel-options";

import '../../../public/css/excel-options.css';
import '../../../public/css/menu.css';

@Component({
    selector: 'main-menu-list',
    templateUrl: './main-menu-list.component.html',
    styleUrls: ['./main-menu-list.component.css']
})
export class MainMenuListComponent implements OnInit {

    loginCheck: boolean = false;

    public isShown: boolean = false;
    private document: any;

    //test for main-menu
    function: string = '';

    showCharts: string[] = [];
    selectFilter = {};
    selectFilterString: string = '';
    allTable: string[] = [];

    //button for choose charts
    types: SelectItem[];
    selectedType: string;
    barChart: boolean = false;
    doughnutChart: boolean = false;
    lineChart: boolean = false;
    radarChart: boolean = false;
    pieChart: boolean = false;
    polarAreaChart: boolean = false;

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
        this.types.push({ label: '環形圖', value: 'DoughnutChart' });
        this.types.push({ label: '曲線圖', value: 'LineChart' });
        this.types.push({ label: '雷達圖', value: 'RadarChart' });
        this.types.push({ label: '圓餅圖', value: 'PieChart' });
        this.types.push({ label: '極面圖', value: 'PolarAreaChart' });
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
        this.loginCheck = Global.LoginCheck;
        console.log("Login Check: " + this.loginCheck);

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
        // console.log('Selected:' + option);
        this.function = option;
        // console.log('Show Charts:' + this.showCharts);
        console.log(this.selectFilter);
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
            selectOption.push({ label: BasicInformation[column][selectValue], value: selectValue });
        }
        return selectOption;
    }

    onMultipleSelected(option: any, column: any) {
        console.log("Select: " + option.value + ":" + option.label);

        if (!this.selectFilter.hasOwnProperty(column)) this.selectFilter[column] = {};
        this.selectFilter[column][option.value] = option.label;
        this.updateShowCharts();
    }

    onMultipleDeselected(option: any, column: any) {
        console.log("Deselect: " + option.value + ":" + option.label);

        delete this.selectFilter[column][option.value];
        this.updateShowCharts();
    }

    onSelectedChart(option: any) {
        console.log('Selected Chart:' + option);
        this.barChart = false;
        this.doughnutChart = false;
        this.lineChart = false;
        this.radarChart = false;
        this.pieChart = false;
        this.polarAreaChart = false;

        if (option === 'BarChart') this.barChart = true;
        if (option === 'DoughnutChart') this.doughnutChart = true;
        if (option === 'LineChart') this.lineChart = true;
        if (option === 'RadarChart') this.radarChart = true;
        if (option === 'PieChart') this.pieChart = true;
        if (option === 'PolarAreaChart') this.polarAreaChart = true;
    }

    updateShowCharts() {
        this.showCharts = [];
        for (var column in this.selectFilter) {
            // console.log(column + ' size: ' + this.objectSize(this.selectFilter[column]));
            if (this.objectSize(this.selectFilter[column]) === 0) {
                delete this.selectFilter[column];
            } else {
                this.showCharts.push(column);
            }
        }
        this.selectFilterString = '';
        for (var column in this.selectFilter) {
            this.selectFilterString = this.selectFilterString + " " + column + ": ";
            for (var value in this.selectFilter[column]) {
                this.selectFilterString = this.selectFilterString + this.selectFilter[column][value] + ','
            }
        }
    }

    objectSize(object: any) {
        // console.log(object);
        var size = 0;
        for (var key in object) {
            size++;
        }
        return size;
    }
}