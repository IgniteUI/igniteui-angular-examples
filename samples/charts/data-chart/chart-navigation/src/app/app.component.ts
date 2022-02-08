import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxDataChartComponent } from "igniteui-angular-charts";
import { IgxNumericXAxisComponent } from "igniteui-angular-charts";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts";

import { IgxBubbleSeriesComponent } from "igniteui-angular-charts";
import { IgxSizeScaleComponent } from "igniteui-angular-charts";

import { SampleScatterStats } from "./SampleScatterStats";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public data: any[];

    public isZoomEnabled: boolean = true;

    public defaultInteraction: string = "DragZoom";
    public panModifier: string = "None";
    public zoomModifier: string = "None";

    @ViewChild("xAxis", { static: true })
    public xAxis: IgxNumericXAxisComponent;

    @ViewChild("yAxis", { static: true })
    public yAxis: IgxNumericYAxisComponent;

    @ViewChild("chart", { static: true })
    public chart: IgxDataChartComponent;

    constructor() {
        this.data = SampleScatterStats.getCountriesWithHighIncome();
    }

    public ngOnInit() {
        this.createSeries();
        this.chart.actualWindowScaleHorizontal = 0.6;
        this.chart.actualWindowScaleVertical = 0.6;
        this.chart.actualWindowPositionVertical = 0.2;
        this.chart.actualWindowPositionHorizontal = 0.2;
    }

    public onPanUpClick() {
        this.chart.actualWindowPositionVertical -= 0.05;
    }

    public onPanDownClick() {
        this.chart.actualWindowPositionVertical += 0.05;
    }

    public onPanRightClick() {
        this.chart.actualWindowPositionHorizontal += 0.05;
    }

    public onPanLeftClick() {
        this.chart.actualWindowPositionHorizontal -= 0.05;
    }

    public createSeries() {
        const sizeScale = new IgxSizeScaleComponent();
        sizeScale.minimumValue = 10;
        sizeScale.maximumValue = 60;

        const series = new IgxBubbleSeriesComponent();
        series.title = "Countries";
        series.dataSource = SampleScatterStats.getCountries();
        series.showDefaultTooltip = true;
        series.xMemberPath = "population";
        series.yMemberPath = "gdpTotal";
        series.radiusMemberPath = "gdpPerCapita";
        series.radiusScale = sizeScale;
        series.xAxis = this.xAxis;
        series.yAxis = this.yAxis;

        this.chart.series.clear();
        this.chart.series.add(series);
    }
}
