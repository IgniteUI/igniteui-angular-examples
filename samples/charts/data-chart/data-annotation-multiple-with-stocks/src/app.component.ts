import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { StripAnnotationDataItem, StripAnnotationData, LineAnnotationData1Item, LineAnnotationData1, LineAnnotationData2Item, LineAnnotationData2, SliceAnnotationData1Item, SliceAnnotationData1, SliceAnnotationData2Item, SliceAnnotationData2, SliceAnnotationData3Item, SliceAnnotationData3 } from './SampleData';
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
	@ViewChild("xAxis", { static: true } )
	private xAxis: IgxCategoryXAxisComponent
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
    private _stripAnnotationData: StripAnnotationData = null;
    public get stripAnnotationData(): StripAnnotationData {
        if (this._stripAnnotationData == null)
        {
            this._stripAnnotationData = new StripAnnotationData();
        }
        return this._stripAnnotationData;
    }

    private _lineAnnotationData1: LineAnnotationData1 = null;
    public get lineAnnotationData1(): LineAnnotationData1 {
        if (this._lineAnnotationData1 == null)
        {
            this._lineAnnotationData1 = new LineAnnotationData1();
        }
        return this._lineAnnotationData1;
    }

    private _lineAnnotationData2: LineAnnotationData2 = null;
    public get lineAnnotationData2(): LineAnnotationData2 {
        if (this._lineAnnotationData2 == null)
        {
            this._lineAnnotationData2 = new LineAnnotationData2();
        }
        return this._lineAnnotationData2;
    }

    private _sliceAnnotationData1: SliceAnnotationData1 = null;
    public get sliceAnnotationData1(): SliceAnnotationData1 {
        if (this._sliceAnnotationData1 == null)
        {
            this._sliceAnnotationData1 = new SliceAnnotationData1();
        }
        return this._sliceAnnotationData1;
    }

    private _sliceAnnotationData2: SliceAnnotationData2 = null;
    public get sliceAnnotationData2(): SliceAnnotationData2 {
        if (this._sliceAnnotationData2 == null)
        {
            this._sliceAnnotationData2 = new SliceAnnotationData2();
        }
        return this._sliceAnnotationData2;
    }

    private _sliceAnnotationData3: SliceAnnotationData3 = null;
    public get sliceAnnotationData3(): SliceAnnotationData3 {
        if (this._sliceAnnotationData3 == null)
        {
            this._sliceAnnotationData3 = new SliceAnnotationData3();
        }
        return this._sliceAnnotationData3;
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

