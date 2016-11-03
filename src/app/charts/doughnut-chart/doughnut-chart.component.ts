import { Component, Input, OnInit } from '@angular/core';

import { BasicInformation } from '../../util/excel-options';

@Component({
    selector: 'doughnut-chart',
    templateUrl: './doughnut-chart.component.html',
    styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {
    @Input()
    chartTitle: string;
    @Input()
    filter: any;

    filterString: string = '';

    // Doughnut
    public doughnutChartLabels: string[] = [];
    public doughnutChartData: number[] = [];
    public doughnutChartType: string = 'doughnut';

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    ngOnInit() {
        // console.log(this.filter);
        for (var label in BasicInformation[this.chartTitle]) {
            this.doughnutChartLabels.push(BasicInformation[this.chartTitle][label]);
            this.doughnutChartData.push(Math.floor(Math.random() * 100 + 1));
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