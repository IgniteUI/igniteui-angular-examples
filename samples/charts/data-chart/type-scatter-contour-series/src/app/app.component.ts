import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxDataChartComponent } from "igniteui-angular-charts";
import { SampleScatterData } from "./SampleScatterData";

import { IgxLinearContourValueResolverComponent
} from "igniteui-angular-charts";
import { IgxNumericXAxisComponent } from "igniteui-angular-charts";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts";
import { IgxScatterContourSeriesComponent } from "igniteui-angular-charts";
import { IgxValueBrushScaleComponent } from "igniteui-angular-charts";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public data: any[];

    @ViewChild("chart", { static: true })
    public chart: IgxDataChartComponent;

    @ViewChild("xAxis", { static: true })
    public xAxis: IgxNumericXAxisComponent;

    @ViewChild("yAxis", { static: true })
    public yAxis: IgxNumericYAxisComponent;

    public brushScale: IgxValueBrushScaleComponent;

    constructor() {
        this.data = SampleScatterData.create();

        this.brushScale = new IgxValueBrushScaleComponent();
        this.brushScale.minimumValue = -2;
        this.brushScale.maximumValue = 2;
        this.brushScale.brushes = [
            "#8670CB", "#513E8C", "#003F5E",
            "#0C6B99", "#4AC4FF", "#B5CC2E",
            "#FFD034", "#FC8612", "#ED4840"
        ];
    }

    public ngOnInit() {

    }
}
