import { Component, Input, OnInit } from '@angular/core';

import { BasicInformation } from '../../util/excel-options';

@Component({
    selector: 'pie-chart',
    templateUrl: './pie-chart.component.html',
    styleUrls:['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
    @Input()
    chartTitle: string;
    @Input()
    filter: any;

    filterString: string = '';

    // Pie
    public pieChartLabels: string[] = [];
    public pieChartData: number[] = [];
    public pieChartType: string = 'pie';

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    ngOnInit() {
        // console.log(this.filter);
        var data: any[] = [];
        for (var label in BasicInformation[this.chartTitle]) {
            this.pieChartLabels.push(BasicInformation[this.chartTitle][label]);
            this.pieChartData.push(Math.floor(Math.random() * 100 + 1));
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