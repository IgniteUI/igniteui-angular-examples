import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxDataChartComponent } from "igniteui-angular-charts";
import { IgxCalloutLayerComponent} from "igniteui-angular-charts";
import { IgxSeriesComponent } from "igniteui-angular-charts";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent {

    @ViewChild("chart", { static: true })
    public chart: IgxDataChartComponent;
    public calloutLayer: IgxCalloutLayerComponent;
    public data: any[];

    constructor() {

        this.calloutLayer = new IgxCalloutLayerComponent();
        this.calloutLayer.xMemberPath = "value";
        this.calloutLayer.yMemberPath = "index";
        this.calloutLayer.labelMemberPath = "Label";
        this.calloutLayer.contentMemberPath = "Label";
        this.calloutLayer.calloutTextColor = "Black";
        this.calloutLayer.calloutBackground = "Transparent";
        this.calloutLayer.calloutLeaderBrush = "Transparent";
    }

    public ngOnInit() {
        this.addCalloutLayer(this.calloutLayer);

        this.data = [
            {Location: "China", Year: 2019, Hydro: 1269.67, Solar: 223.80, Wind: 405.70, Other: 102.83 },
            {Location: "Europe", Year: 2019, Hydro: 632.54, Solar: 154.66, Wind: 461.59, Other: 220.34 },
            {Location: "United States", Year: 2019, Hydro: 271.16, Solar: 108.36, Wind: 303.10, Other: 78.34 },
            {Location: "Brazil", Year: 2019, Hydro: 399.30, Solar: 5.56, Wind: 55.83, Other: 56.25 },
            {Location: "Canadas", Year: 2019, Hydro: 381.98, Solar: 4.31, Wind: 34.17, Other: 10.81 }
        ];

        this.data.forEach(p => {
            p.Sum = p.Hydro + p.Solar + p.Wind + p.Other;
        })

        let idx: number = 0;

        for (const item of this.data) {
            item.index = idx;
            item.value = item.Sum;
            item.Label = item.Sum.toFixed(2);
            idx++;
        }
    }

    public addCalloutLayer(series: IgxSeriesComponent) {
        this.chart.series.add(series);
    }

}
