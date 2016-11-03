import { Component, Input, OnInit } from '@angular/core';

import { BasicInformation } from '../../util/excel-options';

@Component({
    selector: 'radar-chart',
    templateUrl: './radar-chart.component.html',
    styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit{
    @Input()
    chartTitle: string;
    @Input()
    filter: any;

    filterString: string = '';
    // Radar
    public radarChartLabels: string[] = [];

    public radarChartData: any = [];
    public radarChartType: string = 'radar';

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

    ngOnInit() {
        console.log(this.filter);
        var data: any[] = [];
        for (var label in BasicInformation[this.chartTitle]) {
            data.push(Math.floor(Math.random() * 100 + 1));
            this.radarChartLabels.push(BasicInformation[this.chartTitle][label]);
        }
        this.radarChartData.push({ data: data, label: '人數' });
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