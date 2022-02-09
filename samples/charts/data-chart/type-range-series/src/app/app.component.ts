import { Component, OnInit, ViewChild } from "@angular/core";
import { SampleRangeData } from "./SampleRangeData";
import { IgxDataChartComponent } from "igniteui-angular-charts";
import { IgxCategoryXAxisComponent } from "igniteui-angular-charts";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts";
import { IgxRangeAreaSeriesComponent } from "igniteui-angular-charts";
import { IgxRangeColumnSeriesComponent } from "igniteui-angular-charts";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    public data: any[];
    public seriesType: string = "Column";

    @ViewChild("chart", { static: true })
    public chart: IgxDataChartComponent;

    @ViewChild("xAxis", { static: true })
    public xAxis: IgxCategoryXAxisComponent;

    @ViewChild("yAxis", { static: true })
    public yAxis: IgxNumericYAxisComponent;

    constructor() {
        this.data = SampleRangeData.create();
    }

    public ngOnInit() {
        this.setSeries("Column");
    }

    public onSeriesTypeChanged(e: any) {
        const selectedSeries = e.value.toString();
        this.setSeries(selectedSeries);
    }

    public setSeries(seriesType: string) {
        if (seriesType === "Area") {
            const series1 = new IgxRangeAreaSeriesComponent();
            series1.name = "series1";
            series1.highMemberPath = "High";
            series1.lowMemberPath = "Low";
            series1.xAxis = this.xAxis;
            series1.yAxis = this.yAxis;
            series1.thickness = 0;
            this.chart.series.clear();
            this.chart.series.add(series1);

        } else if (seriesType === "Column") {

            const series1 = new IgxRangeColumnSeriesComponent();
            series1.name = "series1";
            series1.highMemberPath = "High";
            series1.lowMemberPath = "Low";
            series1.xAxis = this.xAxis;
            series1.yAxis = this.yAxis;
            this.chart.series.clear();
            this.chart.series.add(series1);
        }
    }
}
