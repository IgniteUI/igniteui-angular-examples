import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { StockTeslaItem, StockTesla } from './StockTesla';
import { AnnotationLineData1Item, AnnotationLineData1 } from './AnnotationLineData1';
import { AnnotationLineData2Item, AnnotationLineData2 } from './AnnotationLineData2';
import { IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxFinancialPriceSeriesComponent, IgxDataToolTipLayerComponent, IgxDataAnnotationLineLayerComponent } from 'igniteui-angular-charts';

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
	@ViewChild("yAxisLeft", { static: true } )
	private yAxisLeft: IgxNumericYAxisComponent
	@ViewChild("yAxisRight", { static: true } )
	private yAxisRight: IgxNumericYAxisComponent
	@ViewChild("series1", { static: true } )
	private series1: IgxFinancialPriceSeriesComponent
	@ViewChild("tooltip", { static: true } )
	private tooltip: IgxDataToolTipLayerComponent
	@ViewChild("lineLayer52WeekRange", { static: true } )
	private lineLayer52WeekRange: IgxDataAnnotationLineLayerComponent
	@ViewChild("lineLayerGrowthAndDecline", { static: true } )
	private lineLayerGrowthAndDecline: IgxDataAnnotationLineLayerComponent
    private _stockTesla: StockTesla = null;
    public get stockTesla(): StockTesla {
        if (this._stockTesla == null)
        {
            this._stockTesla = new StockTesla();
        }
        return this._stockTesla;
    }

    private _annotationLineData1: AnnotationLineData1 = null;
    public get annotationLineData1(): AnnotationLineData1 {
        if (this._annotationLineData1 == null)
        {
            this._annotationLineData1 = new AnnotationLineData1();
        }
        return this._annotationLineData1;
    }

    private _annotationLineData2: AnnotationLineData2 = null;
    public get annotationLineData2(): AnnotationLineData2 {
        if (this._annotationLineData2 == null)
        {
            this._annotationLineData2 = new AnnotationLineData2();
        }
        return this._annotationLineData2;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}

