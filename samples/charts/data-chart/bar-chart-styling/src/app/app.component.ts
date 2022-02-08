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

    constructor()
    {
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

            {Shop: "Amazon",                      Percent: 63},
            {Shop: "Search Engines",              Percent: 48},
            {Shop: "Retailer Sites",              Percent: 33},
            {Shop: "Other Marketplaces",          Percent: 25},
            {Shop: "At the Website of the Brand", Percent: 21},
            {Shop: "Comparison Sites",            Percent: 10},
            {Shop: "Social Media",                Percent: 8 },
            {Shop: "Other",                       Percent: 2 }
        ];

        let idx: number = 0;

        for (const item of this.data) {
            item.index = idx;
            item.value = item.Percent;
            item.Label = item.Percent.toString() + "%";
            idx++;
        }
    }

    public addCalloutLayer(series: IgxSeriesComponent) {
        this.chart.series.add(series);
    }

}
