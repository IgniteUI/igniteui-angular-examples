import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxDataChartComponent } from "igniteui-angular-charts";
import { IgxNumericXAxisComponent } from "igniteui-angular-charts";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts";
import { IgxHighDensityScatterSeriesComponent } from "igniteui-angular-charts";
import { SampleDensityData } from "./SampleDensityData";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    @ViewChild("chart", { static: true })
    public chart: IgxDataChartComponent;

    @ViewChild("xAxis", { static: true })
    public xAxis: IgxNumericXAxisComponent;

    @ViewChild("yAxis", { static: true })
    public yAxis: IgxNumericYAxisComponent;

    public data: any[];

    constructor() { }

    ngOnInit() {

        this.data = SampleDensityData.create();

        const i = 0;
        // const scatterSeries = new IgxHighDensityScatterSeriesComponent();
        // scatterSeries.title = "Distribution";
        // scatterSeries.dataSource = SampleDensityData.create();
        // scatterSeries.showDefaultTooltip = true;
        // scatterSeries.xMemberPath = "x";
        // scatterSeries.yMemberPath = "y";
        // scatterSeries.mouseOverEnabled = true;
        // scatterSeries.progressiveLoad = true;
        // scatterSeries.heatMinimumColor = "Black";
        // scatterSeries.heatMaximumColor = "Yellow";
        // scatterSeries.heatMaximum = 1;
        // scatterSeries.heatMinimum = 5;
        // scatterSeries.resolution = 3;
        // scatterSeries.xAxis = this.xAxis;
        // scatterSeries.yAxis = this.yAxis;

        // this.chart.series.clear();
        // this.chart.series.add(scatterSeries);
    }
}
