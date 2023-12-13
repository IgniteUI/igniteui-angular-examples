import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { OnlineShoppingSearchesItem, OnlineShoppingSearches } from './OnlineShoppingSearches';
import { IgxDataChartComponent, IgxCategoryYAxisComponent, IgxNumericXAxisComponent, IgxCategoryHighlightLayerComponent, IgxBarSeriesComponent, IgxCalloutLayerComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("chart", { static: true } )
	private chart: IgxDataChartComponent
	@ViewChild("yAxis", { static: true } )
	private yAxis: IgxCategoryYAxisComponent
	@ViewChild("xAxis", { static: true } )
	private xAxis: IgxNumericXAxisComponent
	@ViewChild("categoryHighlightLayer", { static: true } )
	private categoryHighlightLayer: IgxCategoryHighlightLayerComponent
	@ViewChild("barSeries1", { static: true } )
	private barSeries1: IgxBarSeriesComponent
	@ViewChild("calloutLayer1", { static: true } )
	private calloutLayer1: IgxCalloutLayerComponent
	@ViewChild("tooltips", { static: true } )
	private tooltips: IgxDataToolTipLayerComponent
    private _onlineShoppingSearches: OnlineShoppingSearches = null;
    public get onlineShoppingSearches(): OnlineShoppingSearches {
        if (this._onlineShoppingSearches == null)
        {
            this._onlineShoppingSearches = new OnlineShoppingSearches();
        }
        return this._onlineShoppingSearches;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}

