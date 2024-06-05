import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, OnDestroy, ViewChild } from "@angular/core";
import { FinancialChartType } from "igniteui-angular-charts";
import { FinancialChartVolumeType } from "igniteui-angular-charts";
import { FinancialChartZoomSliderType } from "igniteui-angular-charts";
import { FinancialIndicatorType } from "igniteui-angular-charts";
import { FinancialOverlayType } from "igniteui-angular-charts";
import { IgxFinancialChartComponent } from "igniteui-angular-charts";
import { IgxFinancialIndicatorTypeCollection } from "igniteui-angular-charts";
import { IgxFinancialOverlayTypeCollection } from "igniteui-angular-charts";
import { StockDataService } from "./StockDataService";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ StockDataService ],
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
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
        this.chart.volumeType = FinancialChartVolumeType.Area;
        this.chart.indicatorTypes.add(FinancialIndicatorType.ForceIndex);
        this.chart.overlayTypes.add(FinancialOverlayType.PriceChannel);
    }
}
