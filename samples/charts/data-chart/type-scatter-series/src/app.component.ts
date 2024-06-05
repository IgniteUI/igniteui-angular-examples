import { Component, OnInit, ViewChild } from "@angular/core";

// types of axis:
import { IgxNumericXAxisComponent } from "igniteui-angular-charts";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts";

// types of scatter series:
import { IgxBubbleSeriesComponent } from "igniteui-angular-charts";
import { IgxScatterLineSeriesComponent } from "igniteui-angular-charts";
import { IgxScatterSeriesComponent } from "igniteui-angular-charts";
import { IgxScatterSplineSeriesComponent } from "igniteui-angular-charts";

// elements of scatter series:
import { BrushSelectionMode } from "igniteui-angular-charts";
import { IgxCustomPaletteBrushScaleComponent } from "igniteui-angular-charts";
import { IgxSizeScaleComponent } from "igniteui-angular-charts";
import { IgxValueBrushScaleComponent } from "igniteui-angular-charts";
import { IgxDataChartComponent } from "igniteui-angular-charts";
import { MarkerType } from "igniteui-angular-charts";
import { IgxLegendComponent } from "igniteui-angular-charts";
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
    @ViewChild("legend", { static: true })
    public legend: IgxLegendComponent;

    constructor() { }

    public ngOnInit() {
        if (this.legend) {
            this.chart.legend = this.legend;
            this.setSeries("Bubble");
        }
    }

    public onSeriesTypeChanged(e: any) {
        const selectedSeries = e.target.value.toString();
        this.setSeries(selectedSeries);
    }

    public setSeries(seriesType: string) {
        if (seriesType === "Point") {
            const series1 = new IgxScatterSeriesComponent();
            series1.name = "series1";
            series1.title = "Rich Countries";
            series1.markerType = MarkerType.Circle;
            series1.dataSource = SampleScatterStats.getCountriesWithHighIncome();
            series1.showDefaultTooltip = true;
            series1.xMemberPath = "population";
            series1.yMemberPath = "gdpTotal";
            series1.xAxis = this.xAxis;
            series1.yAxis = this.yAxis;

            const series2 = new IgxScatterSeriesComponent();
            series2.name = "series2";
            series2.title = "Poor Countries";
            series2.markerType = MarkerType.Circle;
            series2.dataSource = SampleScatterStats.getCountriesWithLowIncome();
            series2.showDefaultTooltip = true;
            series2.xMemberPath = "population";
            series2.yMemberPath = "gdpTotal";
            series2.xAxis = this.xAxis;
            series2.yAxis = this.yAxis;

            this.chart.series.clear();
            this.chart.series.add(series1);
            this.chart.series.add(series2);

        } else if (seriesType === "Line") {
            const series1 = new IgxScatterLineSeriesComponent();
            series1.name = "series1";
            series1.title = "Rich Countries";
            series1.markerType = MarkerType.Circle;
            series1.dataSource = SampleScatterStats.getCountriesWithHighIncome();
            series1.showDefaultTooltip = true;
            series1.xMemberPath = "population";
            series1.yMemberPath = "gdpTotal";
            series1.xAxis = this.xAxis;
            series1.yAxis = this.yAxis;

            const series2 = new IgxScatterLineSeriesComponent();
            series2.name = "series2";
            series2.title = "Poor Countries";
            series2.markerType = MarkerType.Circle;
            series2.dataSource = SampleScatterStats.getCountriesWithLowIncome();
            series2.showDefaultTooltip = true;
            series2.xMemberPath = "population";
            series2.yMemberPath = "gdpTotal";
            series2.xAxis = this.xAxis;
            series2.yAxis = this.yAxis;

            this.chart.series.clear();
            this.chart.series.add(series1);
            this.chart.series.add(series2);

        } else if (seriesType === "Spline") {
            const series1 = new IgxScatterSplineSeriesComponent();
            series1.name = "series1";
            series1.title = "Rich Countries";
            series1.markerType = MarkerType.Circle;
            series1.dataSource = SampleScatterStats.getCountriesWithHighIncome();
            series1.showDefaultTooltip = true;
            series1.xMemberPath = "population";
            series1.yMemberPath = "gdpTotal";
            series1.xAxis = this.xAxis;
            series1.yAxis = this.yAxis;

            const series2 = new IgxScatterSplineSeriesComponent();
            series2.name = "series2";
            series2.title = "Poor Countries";
            series2.markerType = MarkerType.Circle;
            series2.dataSource = SampleScatterStats.getCountriesWithLowIncome();
            series2.showDefaultTooltip = true;
            series2.xMemberPath = "population";
            series2.yMemberPath = "gdpTotal";
            series2.xAxis = this.xAxis;
            series2.yAxis = this.yAxis;

            this.chart.series.clear();
            this.chart.series.add(series1);
            this.chart.series.add(series2);

        } else if (seriesType === "Bubble") {
            const sizeScale = new IgxSizeScaleComponent();
            sizeScale.minimumValue = 10;
            sizeScale.maximumValue = 60;

            const brushScale1 = new IgxValueBrushScaleComponent();
            brushScale1.brushes = ["#FFFFFF", "#b56ffc"];
            brushScale1.minimumValue = 10;
            brushScale1.maximumValue = 60;

            const series1 = new IgxBubbleSeriesComponent();
            series1.name = "series1";
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

            const brushScale2 = new IgxCustomPaletteBrushScaleComponent();
            brushScale2.brushes = ["#FFFFFF", "#b56ffc"];
            brushScale2.brushSelectionMode = BrushSelectionMode.Interpolate;

            const series2 = new IgxBubbleSeriesComponent();
            series2.name = "series2";
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

}
