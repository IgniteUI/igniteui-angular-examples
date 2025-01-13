import { Component, OnInit, ViewChild } from "@angular/core";
import { SampleFinancialData } from "./SampleFinancialData";
import { IgxBollingerBandsOverlayComponent } from "igniteui-angular-charts";
import { IgxPriceChannelOverlayComponent } from "igniteui-angular-charts";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts";
import { IgxCategoryXAxisComponent } from "igniteui-angular-charts";
import { IgxDataChartComponent } from "igniteui-angular-charts";

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    public data: any[] = SampleFinancialData.create();

    private bollinger: IgxBollingerBandsOverlayComponent;
    private priceChannel: IgxPriceChannelOverlayComponent;

    @ViewChild("chart", { static: true })
    public chart: IgxDataChartComponent;

    @ViewChild("xAxis", { static: true })
    public xAxis: IgxCategoryXAxisComponent;

    @ViewChild("yAxis", { static: true })
    public yAxis: IgxNumericYAxisComponent;

    constructor() {
    }

    ngOnInit() {
        this.bollinger = new IgxBollingerBandsOverlayComponent();
        this.bollinger.xAxis = this.xAxis;
        this.bollinger.yAxis = this.yAxis;
        this.bollinger.highMemberPath = "High";
        this.bollinger.lowMemberPath = "Low";
        this.bollinger.closeMemberPath = "Close";
        this.bollinger.openMemberPath = "Open";
        this.bollinger.volumeMemberPath = "Volume";

        this.priceChannel = new IgxPriceChannelOverlayComponent();
        this.priceChannel.xAxis = this.xAxis;
        this.priceChannel.yAxis = this.yAxis;
        this.priceChannel.highMemberPath = "High";
        this.priceChannel.lowMemberPath = "Low";
        this.priceChannel.closeMemberPath = "Close";
        this.priceChannel.openMemberPath = "Open";
        this.priceChannel.volumeMemberPath = "Volume";
    }

    public onOverlayChanged = (e: any) => {
        const type = e.target.value.toString();
        switch (type) {
            case "None": {
                this.chart.series.remove(this.priceChannel);
                this.chart.series.remove(this.bollinger);
                break;
            }
            case "BollingerBands": {
                this.chart.series.remove(this.priceChannel);
                this.chart.series.add(this.bollinger);
                break;
            }
            case "PriceChannel": {
                this.chart.series.remove(this.bollinger);
                this.chart.series.add(this.priceChannel);
            }
        }
    }

}
