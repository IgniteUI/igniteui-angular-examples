import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { WorldDebtAndPopulationItem, WorldDebtAndPopulation } from './WorldDebtAndPopulation';
import { IgxDataChartComponent, IgxNumericXAxisComponent, IgxNumericYAxisComponent, IgxBubbleSeriesComponent, IgxSizeScaleComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

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
	@ViewChild("xAxis", { static: true } )
	private xAxis: IgxNumericXAxisComponent
	@ViewChild("yAxis", { static: true } )
	private yAxis: IgxNumericYAxisComponent
	@ViewChild("bubbleSeries1", { static: true } )
	private bubbleSeries1: IgxBubbleSeriesComponent
	private  _sizeScale1: IgxSizeScaleComponent | null = null;
	public get sizeScale1(): IgxSizeScaleComponent {
	    if (this._sizeScale1 == null)
	    {
	        var sizeScale1 = new IgxSizeScaleComponent();
	        sizeScale1.isLogarithmic = false;
	        sizeScale1.minimumValue = 10;
	        sizeScale1.maximumValue = 50;

	        this._sizeScale1 = sizeScale1;
	    }
	    return this._sizeScale1;
	}
	@ViewChild("dataToolTipLayer", { static: true } )
	private dataToolTipLayer: IgxDataToolTipLayerComponent
    private _worldDebtAndPopulation: WorldDebtAndPopulation = null;
    public get worldDebtAndPopulation(): WorldDebtAndPopulation {
        if (this._worldDebtAndPopulation == null)
        {
            this._worldDebtAndPopulation = new WorldDebtAndPopulation();
        }
        return this._worldDebtAndPopulation;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}

