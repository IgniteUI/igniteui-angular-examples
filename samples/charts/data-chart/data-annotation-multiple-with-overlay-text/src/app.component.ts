import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { StockTeslaItem, StockTesla } from './StockTesla';
import { AnnotationSliceMultiOverlayDataItem, AnnotationSliceMultiOverlayData } from './AnnotationSliceMultiOverlayData';
import { IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxLineSeriesComponent, IgxValueOverlayComponent, IgxValueLayerComponent, IgxDataAnnotationSliceLayerComponent } from 'igniteui-angular-charts';

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
	private series1: IgxLineSeriesComponent
	@ViewChild("valueOverlay", { static: true } )
	private valueOverlay: IgxValueOverlayComponent
	@ViewChild("valueLayer", { static: true } )
	private valueLayer: IgxValueLayerComponent
	@ViewChild("annoLayer", { static: true } )
	private annoLayer: IgxDataAnnotationSliceLayerComponent
    private _stockTesla: StockTesla = null;
    public get stockTesla(): StockTesla {
        if (this._stockTesla == null)
        {
            this._stockTesla = new StockTesla();
        }
        return this._stockTesla;
    }

    private _annotationSliceMultiOverlayData: AnnotationSliceMultiOverlayData = null;
    public get annotationSliceMultiOverlayData(): AnnotationSliceMultiOverlayData {
        if (this._annotationSliceMultiOverlayData == null)
        {
            this._annotationSliceMultiOverlayData = new AnnotationSliceMultiOverlayData();
        }
        return this._annotationSliceMultiOverlayData;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}

