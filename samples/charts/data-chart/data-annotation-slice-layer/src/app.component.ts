import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AnnotationData1Item, AnnotationData1, AnnotationData2Item, AnnotationData2, AnnotationData3Item, AnnotationData3 } from './SampleData';
import { StockTeslaItem, StockTesla } from './StockTesla';
import { IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxFinancialPriceSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

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
    private _annotationData1: AnnotationData1 = null;
    public get annotationData1(): AnnotationData1 {
        if (this._annotationData1 == null)
        {
            this._annotationData1 = new AnnotationData1();
        }
        return this._annotationData1;
    }

    private _annotationData2: AnnotationData2 = null;
    public get annotationData2(): AnnotationData2 {
        if (this._annotationData2 == null)
        {
            this._annotationData2 = new AnnotationData2();
        }
        return this._annotationData2;
    }

    private _annotationData3: AnnotationData3 = null;
    public get annotationData3(): AnnotationData3 {
        if (this._annotationData3 == null)
        {
            this._annotationData3 = new AnnotationData3();
        }
        return this._annotationData3;
    }

    private _stockTesla: StockTesla = null;
    public get stockTesla(): StockTesla {
        if (this._stockTesla == null)
        {
            this._stockTesla = new StockTesla();
        }
        return this._stockTesla;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}

