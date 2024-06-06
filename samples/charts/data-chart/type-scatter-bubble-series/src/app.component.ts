import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxDataChartComponent } from "igniteui-angular-charts";
import { IgxNumericXAxisComponent } from "igniteui-angular-charts";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts";
import { IgxBubbleSeriesComponent } from "igniteui-angular-charts";
import { IgxSizeScaleComponent } from "igniteui-angular-charts";
import { IgxValueBrushScaleComponent } from "igniteui-angular-charts";
import { IgxCustomPaletteBrushScaleComponent } from "igniteui-angular-charts";
import { MarkerType } from "igniteui-angular-charts";
import { BrushSelectionMode } from "igniteui-angular-charts";
import { SampleScatterStats } from "./SampleScatterStats";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    @ViewChild("chart", { static: true })
    public chart: IgxDataChartComponent;

    @ViewChild("xAxis", { static: true })
    public xAxis: IgxNumericXAxisComponent;

    @ViewChild("yAxis", { static: true })
    public yAxis: IgxNumericYAxisComponent;

    constructor() { }

    ngOnInit() {
        this.setSeries();
    }

    public setSeries() {
        const sizeScale = new IgxSizeScaleComponent();
        sizeScale.minimumValue = 10;
        sizeScale.maximumValue = 60;

        const series1 = new IgxBubbleSeriesComponent();
        series1.title = "Large Countries";
        series1.markerType = MarkerType.Circle;
        series1.dataSource = SampleScatterStats.getCountriesWithLargePop();
        series1.showDefaultTooltip = true;
        series1.xMemberPath = "population";
        series1.yMemberPath = "gdpTotal";
        series1.radiusMemberPath = "gdpPerCapita";
        series1.radiusScale = sizeScale;
        series1.xAxis = this.xAxis;
        series1.yAxis = this.yAxis;

        const series2 = new IgxBubbleSeriesComponent();
        series2.title = "Small Countries";
        series2.markerType = MarkerType.Circle;
        series2.dataSource = SampleScatterStats.getCountriesWithSmallPop();
        series2.showDefaultTooltip = true;
        series2.xMemberPath = "population";
        series2.yMemberPath = "gdpTotal";
        series2.radiusMemberPath = "gdpPerCapita";
        series2.radiusScale = sizeScale;
        series2.xAxis = this.xAxis;
        series2.yAxis = this.yAxis;

        this.chart.series.clear();
        this.chart.series.add(series1);
        this.chart.series.add(series2);
    }
}
