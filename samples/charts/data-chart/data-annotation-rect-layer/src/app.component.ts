import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { StockTeslaItem, StockTesla } from './StockTesla';
import { AnnotationRectDataItem, AnnotationRectData } from './AnnotationRectData';
import { IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxFinancialPriceSeriesComponent, IgxDataToolTipLayerComponent, IgxDataAnnotationRectLayerComponent } from 'igniteui-angular-charts';

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
	@ViewChild("xAxis", { static: true } )
	private xAxis: IgxCategoryXAxisComponent
	@ViewChild("yAxis", { static: true } )
	private yAxis: IgxNumericYAxisComponent
	@ViewChild("series1", { static: true } )
	private series1: IgxFinancialPriceSeriesComponent
	@ViewChild("tooltip", { static: true } )
	private tooltip: IgxDataToolTipLayerComponent
	@ViewChild("rectLayer", { static: true } )
	private rectLayer: IgxDataAnnotationRectLayerComponent
    private _stockTesla: StockTesla = null;
    public get stockTesla(): StockTesla {
        if (this._stockTesla == null)
        {
            this._stockTesla = new StockTesla();
        }
        return this._stockTesla;
    }

    private _annotationRectData: AnnotationRectData = null;
    public get annotationRectData(): AnnotationRectData {
        if (this._annotationRectData == null)
        {
            this._annotationRectData = new AnnotationRectData();
        }
        return this._annotationRectData;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}

