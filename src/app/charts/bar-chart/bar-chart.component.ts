import { Component, Input, OnInit } from '@angular/core';

import { BasicInformation } from '../../util/excel-options';

@Component({
    selector: 'bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
    @Input()
    chartTitle: string;
    @Input()
    filter: any;

    filterString: string = '';

    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = ['人數'];
    public barChartData: any[] = [];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    // public randomize(): void {
    //     // Only Change 3 values
    //     let data = [
    //         Math.round(Math.random() * 100),
    //         59,
    //         80,
    //         (Math.random() * 100),
    //         56,
    //         (Math.random() * 100),
    //         40];
    //     let clone = JSON.parse(JSON.stringify(this.barChartData));
    //     clone[0].data = data;
    //     this.barChartData = clone;
    // }

    ngOnInit() {
        // console.log(this.filter);
        for (var label in BasicInformation[this.chartTitle]) {
            this.barChartData.push({ data: [Math.floor(Math.random() * 100 + 1)], label: BasicInformation[this.chartTitle][label] });
        }
        for (var column in this.filter) {
            if (column != this.chartTitle) {
                this.filterString = this.filterString + " " + column + ":";
                for (var value in this.filter[column]) {
                    this.filterString = this.filterString + this.filter[column][value] + ','
                }
            }
        }
    }
}