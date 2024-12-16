import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxCategoryXAxisComponent } from "igniteui-angular-charts";
import { IgxCategoryYAxisComponent } from "igniteui-angular-charts";
import { IgxDataChartComponent } from "igniteui-angular-charts";
import { IgxNumericXAxisComponent } from "igniteui-angular-charts";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts";
import { IgxStacked100AreaSeriesComponent } from "igniteui-angular-charts";
import { IgxStacked100BarSeriesComponent } from "igniteui-angular-charts";
import { IgxStacked100ColumnSeriesComponent } from "igniteui-angular-charts";
import { IgxStacked100LineSeriesComponent } from "igniteui-angular-charts";
import { IgxStacked100SplineSeriesComponent } from "igniteui-angular-charts";
import { IgxStackedAreaSeriesComponent } from "igniteui-angular-charts";
import { IgxStackedBarSeriesComponent } from "igniteui-angular-charts";
import { IgxStackedColumnSeriesComponent } from "igniteui-angular-charts";
import { IgxStackedFragmentSeriesComponent } from "igniteui-angular-charts";
import { IgxStackedLineSeriesComponent } from "igniteui-angular-charts";
import { IgxStackedSplineSeriesComponent } from "igniteui-angular-charts";

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    public data: any[];

    public catXAxis: IgxCategoryXAxisComponent;
    public numYAxis: IgxNumericYAxisComponent;

    public catYAxis: IgxCategoryYAxisComponent;
    public numXAxis: IgxNumericXAxisComponent;

    @ViewChild("chart", { static: true })
    public chart: IgxDataChartComponent;

    constructor() {
        this.catXAxis = new IgxCategoryXAxisComponent();
        this.catXAxis.label = "Year";

        this.catYAxis = new IgxCategoryYAxisComponent();
        this.catYAxis.label = "Year";

        this.numXAxis = new IgxNumericXAxisComponent();
        this.numYAxis = new IgxNumericYAxisComponent();

        this.initData();
    }

    public ngOnInit() {
        this.setSeries("Stacked Column");
    }

    public getFragments(): IgxStackedFragmentSeriesComponent[] {
        const fragment1 = new IgxStackedFragmentSeriesComponent();
        fragment1.valueMemberPath = "USA";
        fragment1.title = "USA";
        const fragment2 = new IgxStackedFragmentSeriesComponent();
        fragment2.valueMemberPath = "Europe";
        fragment2.title = "Europe";
        const fragment3 = new IgxStackedFragmentSeriesComponent();
        fragment3.valueMemberPath = "China";
        fragment3.title = "China";

        const fragments: IgxStackedFragmentSeriesComponent[] = [];
        fragments.push(fragment1);
        fragments.push(fragment2);
        fragments.push(fragment3);
        return fragments;
    }

    public onSeriesTypeChanged(e: any) {
        const selectedSeries = e.target.value.toString();
        this.chart.series.clear();
        this.setSeries(selectedSeries);
    }

    public setSeries(seriesType: string) {

        this.chart.axes.clear();
        this.chart.series.clear();

        const fragments = this.getFragments();

        if (seriesType === "Stacked Column") {
            const stack = new IgxStackedColumnSeriesComponent();
            stack.xAxis = this.catXAxis;
            stack.yAxis = this.numYAxis;
            this.chart.axes.add(this.catXAxis);
            this.chart.axes.add(this.numYAxis);
            for (const frag of fragments) {
                stack.series.add(frag);
            }
            this.chart.series.add(stack);

        } else if (seriesType === "Stacked 100 Column") {
            const stack = new IgxStacked100ColumnSeriesComponent();
            stack.xAxis = this.catXAxis;
            stack.yAxis = this.numYAxis;
            this.chart.axes.add(this.catXAxis);
            this.chart.axes.add(this.numYAxis);
            for (const frag of fragments) {
                stack.series.add(frag);
            }
            this.chart.series.add(stack);

        } else if (seriesType === "Stacked Area") {
            const stack = new IgxStackedAreaSeriesComponent();
            stack.xAxis = this.catXAxis;
            stack.yAxis = this.numYAxis;
            this.chart.axes.add(this.catXAxis);
            this.chart.axes.add(this.numYAxis);
            for (const frag of fragments) {
                stack.series.add(frag);
            }
            this.chart.series.add(stack);

        } else if (seriesType === "Stacked 100 Area") {
            const stack = new IgxStacked100AreaSeriesComponent();
            stack.xAxis = this.catXAxis;
            stack.yAxis = this.numYAxis;
            this.chart.axes.add(this.catXAxis);
            this.chart.axes.add(this.numYAxis);
            for (const frag of fragments) {
                stack.series.add(frag);
            }
            this.chart.series.add(stack);

        } else if (seriesType === "Stacked Line") {
            const stack = new IgxStackedLineSeriesComponent();
            stack.xAxis = this.catXAxis;
            stack.yAxis = this.numYAxis;
            this.chart.axes.add(this.catXAxis);
            this.chart.axes.add(this.numYAxis);
            for (const frag of fragments) {
                stack.series.add(frag);
            }
            this.chart.series.add(stack);

        } else if (seriesType === "Stacked 100 Line") {
            const stack = new IgxStacked100LineSeriesComponent();
            stack.xAxis = this.catXAxis;
            stack.yAxis = this.numYAxis;
            this.chart.axes.add(this.catXAxis);
            this.chart.axes.add(this.numYAxis);
            for (const frag of fragments) {
                stack.series.add(frag);
            }
            this.chart.series.add(stack);

        } else if (seriesType === "Stacked Spline") {
            const stack = new IgxStackedSplineSeriesComponent();
            stack.xAxis = this.catXAxis;
            stack.yAxis = this.numYAxis;
            this.chart.axes.add(this.catXAxis);
            this.chart.axes.add(this.numYAxis);
            for (const frag of fragments) {
                stack.series.add(frag);
            }
            this.chart.series.add(stack);

        } else if (seriesType === "Stacked 100 Spline") {
            const stack = new IgxStacked100SplineSeriesComponent();
            stack.xAxis = this.catXAxis;
            stack.yAxis = this.numYAxis;
            this.chart.axes.add(this.catXAxis);
            this.chart.axes.add(this.numYAxis);
            for (const frag of fragments) {
                stack.series.add(frag);
            }
            this.chart.series.add(stack);

        } else if (seriesType === "Stacked Bar") {
            const stack = new IgxStackedBarSeriesComponent();
            stack.xAxis = this.numXAxis;
            stack.yAxis = this.catYAxis;
            this.chart.axes.add(this.numXAxis);
            this.chart.axes.add(this.catYAxis);
            for (const frag of fragments) {
                stack.series.add(frag);
            }
            this.chart.series.add(stack);

        } else if (seriesType === "Stacked 100 Bar") {
            const stack = new IgxStacked100BarSeriesComponent();
            stack.xAxis = this.numXAxis;
            stack.yAxis = this.catYAxis;
            this.chart.axes.add(this.numXAxis);
            this.chart.axes.add(this.catYAxis);
            for (const frag of fragments) {
                stack.series.add(frag);
            }

            this.chart.series.add(stack);
        }
    }

    public initData() {

        this.data = [
            { Year: "2011", USA: 14,  Europe: 65, China: 30 },
            { Year: "2012", USA: 16,  Europe: 75, China: 40 },
            { Year: "2013", USA: 17,  Europe: 80, China: 50 },
            { Year: "2014", USA: 30,  Europe: 40, China: 45 },
            { Year: "2015", USA: 20,  Europe: 80, China: 50 },
            { Year: "2016", USA: 50,  Europe: 55, China: 90 },
            { Year: "2017", USA: 50,  Europe: 80, China: 130 },
            { Year: "2018", USA: 65,  Europe: 50, China: 135 },
            { Year: "2019", USA: 80,  Europe: 90, China: 150 },
            { Year: "2020", USA: 115, Europe: 70, China: 175 },
            { Year: "2021", USA: 150, Europe: 90, China: 195 }
        ];
    }
}
