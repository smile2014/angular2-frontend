import { Component, Input, OnInit } from '@angular/core';

import { BasicInformation } from '../../util/excel-options';

@Component({
    selector: 'polar-area-chart',
    templateUrl: './polar-area-chart.component.html',
    styleUrls: ['./polar-area-chart.component.css']
})
export class PolarAreaChartComponent implements OnInit {
    @Input()
    chartTitle: string;
    @Input()
    filter: any;

    filterString: string = '';

    // PolarArea
    public polarAreaChartLabels: string[] = [];
    public polarAreaChartData: number[] = [];
    public polarAreaLegend: boolean = true;

    public polarAreaChartType: string = 'polarArea';

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
            this.polarAreaChartLabels.push(BasicInformation[this.chartTitle][label]);
            this.polarAreaChartData.push(Math.floor(Math.random() * 100 + 1));
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