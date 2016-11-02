import { Component, Input } from '@angular/core';

@Component({
    selector: 'doughnut-chart',
    templateUrl: './doughnut-chart.component.html'
})
export class DoughnutChartComponent {
    @Input()
    chartTitle: string;

    // Doughnut
    public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    public doughnutChartData: number[] = [350, 450, 100];
    public doughnutChartType: string = 'doughnut';

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }
}