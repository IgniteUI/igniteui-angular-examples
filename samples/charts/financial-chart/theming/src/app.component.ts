import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, OnDestroy, ViewChild } from "@angular/core";
import { FinancialChartType } from "igniteui-angular-charts";
import { FinancialChartZoomSliderType } from "igniteui-angular-charts";
import { FinancialOverlayType } from "igniteui-angular-charts";
import { IgxFinancialChartComponent } from "igniteui-angular-charts";
import { StockDataService } from "./StockDataService";

@Component({
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ StockDataService ],
    selector: "app-root",
    styleUrls: ["./app.component.scss",
    "./dark-theme-financial-chart.css",
    "./dark-theme-legend.css",
    "./dark-theme-tooltips.css",
    "./dark-theme-zoom-slider.css"
    ],
    templateUrl: "./app.component.html"
})

export class AppComponent implements AfterViewInit {

    public data: any[];
    @ViewChild("chart", { static: true })
    public chart: IgxFinancialChartComponent;

    constructor(private dataService: StockDataService) {
        this.data = this.dataService.GetStockTSLA();

    }

    public ngAfterViewInit(): void {

        this.chart.chartType = FinancialChartType.Candle;
        this.chart.zoomSliderType = FinancialChartZoomSliderType.Candle;
        this.chart.overlayTypes.add(FinancialOverlayType.PriceChannel);
    }
}
