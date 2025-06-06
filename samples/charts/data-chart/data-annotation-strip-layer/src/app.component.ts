import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { StockTeslaItem, StockTesla } from './StockTesla';
import { AnnotationStripDataItem, AnnotationStripData } from './AnnotationStripData';
import { IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxFinancialPriceSeriesComponent, IgxDataToolTipLayerComponent, IgxDataAnnotationStripLayerComponent } from 'igniteui-angular-charts';

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
	@ViewChild("xAxisTop", { static: true } )
	private xAxisTop: IgxCategoryXAxisComponent
	@ViewChild("yAxisLeft", { static: true } )
	private yAxisLeft: IgxNumericYAxisComponent
	@ViewChild("yAxisRight", { static: true } )
	private yAxisRight: IgxNumericYAxisComponent
	@ViewChild("series1", { static: true } )
	private series1: IgxFinancialPriceSeriesComponent
	@ViewChild("tooltip", { static: true } )
	private tooltip: IgxDataToolTipLayerComponent
	@ViewChild("stripLayer", { static: true } )
	private stripLayer: IgxDataAnnotationStripLayerComponent
    private _stockTesla: StockTesla = null;
    public get stockTesla(): StockTesla {
        if (this._stockTesla == null)
        {
            this._stockTesla = new StockTesla();
        }
        return this._stockTesla;
    }

    private _annotationStripData: AnnotationStripData = null;
    public get annotationStripData(): AnnotationStripData {
        if (this._annotationStripData == null)
        {
            this._annotationStripData = new AnnotationStripData();
        }
        return this._annotationStripData;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}

