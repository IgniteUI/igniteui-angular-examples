import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CountryStatsAfricaItem, CountryStatsAfrica } from './CountryStatsAfrica';
import { CountryStatsEuropeItem, CountryStatsEurope } from './CountryStatsEurope';
import { IgxLegendComponent, IgxDataChartComponent, IgxNumericXAxisComponent, IgxNumericYAxisComponent, IgxBubbleSeriesComponent, IgxSizeScaleComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("legend", { static: true } )
	private legend: IgxLegendComponent
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
	        sizeScale1.maximumValue = 80;

	        this._sizeScale1 = sizeScale1;
	    }
	    return this._sizeScale1;
	}
	@ViewChild("bubbleSeries2", { static: true } )
	private bubbleSeries2: IgxBubbleSeriesComponent
	private  _sizeScale2: IgxSizeScaleComponent | null = null;
	public get sizeScale2(): IgxSizeScaleComponent {
	    if (this._sizeScale2 == null)
	    {
	        var sizeScale2 = new IgxSizeScaleComponent();
	        sizeScale2.isLogarithmic = false;
	        sizeScale2.minimumValue = 10;
	        sizeScale2.maximumValue = 80;

	        this._sizeScale2 = sizeScale2;
	    }
	    return this._sizeScale2;
	}
	@ViewChild("dataToolTipLayer", { static: true } )
	private dataToolTipLayer: IgxDataToolTipLayerComponent
    private _countryStatsAfrica: CountryStatsAfrica = null;
    public get countryStatsAfrica(): CountryStatsAfrica {
        if (this._countryStatsAfrica == null)
        {
            this._countryStatsAfrica = new CountryStatsAfrica();
        }
        return this._countryStatsAfrica;
    }

    private _countryStatsEurope: CountryStatsEurope = null;
    public get countryStatsEurope(): CountryStatsEurope {
        if (this._countryStatsEurope == null)
        {
            this._countryStatsEurope = new CountryStatsEurope();
        }
        return this._countryStatsEurope;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}

