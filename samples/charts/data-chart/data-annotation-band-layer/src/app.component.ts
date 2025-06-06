import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { StockTeslaItem, StockTesla } from './StockTesla';
import { AnnotationBandDataItem, AnnotationBandData } from './AnnotationBandData';
import { IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxFinancialPriceSeriesComponent, IgxDataToolTipLayerComponent, IgxDataAnnotationBandLayerComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("chart", { static: true } )
	private chart: IgxDataChartComponent
	@ViewChild("xAxisBottom", { static: true } )
	private xAxisBottom: IgxCategoryXAxisComponent
	@ViewChild("xAxis", { static: true } )
	private xAxis: IgxCategoryXAxisComponent
	@ViewChild("yAxisLeft", { static: true } )
	private yAxisLeft: IgxNumericYAxisComponent
	@ViewChild("yAxisRight", { static: true } )
	private yAxisRight: IgxNumericYAxisComponent
	@ViewChild("series1", { static: true } )
	private series1: IgxFinancialPriceSeriesComponent
	@ViewChild("tooltip", { static: true } )
	private tooltip: IgxDataToolTipLayerComponent
	@ViewChild("bandLayer", { static: true } )
	private bandLayer: IgxDataAnnotationBandLayerComponent
    private _stockTesla: StockTesla = null;
    public get stockTesla(): StockTesla {
        if (this._stockTesla == null)
        {
            this._stockTesla = new StockTesla();
        }
        return this._stockTesla;
    }

    private _annotationBandData: AnnotationBandData = null;
    public get annotationBandData(): AnnotationBandData {
        if (this._annotationBandData == null)
        {
            this._annotationBandData = new AnnotationBandData();
        }
        return this._annotationBandData;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}

