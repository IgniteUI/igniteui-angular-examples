import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CountryDemographicAfricanItem, CountryDemographicAfrican } from './CountryDemographicAfrican';
import { CountryDemographicEuropeItem, CountryDemographicEurope } from './CountryDemographicEurope';
import { IgxDataChartComponent, IgxNumericXAxisComponent, IgxNumericYAxisComponent, IgxBubbleSeriesComponent, IgxSizeScaleComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

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
	private xAxis: IgxNumericXAxisComponent
	@ViewChild("yAxis", { static: true } )
	private yAxis: IgxNumericYAxisComponent
	@ViewChild("bubbleSeries1", { static: true } )
	private bubbleSeries1: IgxBubbleSeriesComponent
	private  _sizeScale1: IgxSizeScaleComponent | null = null;
	public get sizeScale1(): IgxSizeScaleComponent {
	    if (this._sizeScale1 == null)
	    {
	        var SizeScale1 = new IgxSizeScaleComponent();

	        SizeScale1.minimumValue = 10;
	        SizeScale1.maximumValue = 50;

	        this._sizeScale1 = SizeScale1;
	    }
	    return this._sizeScale1;
	}
	@ViewChild("bubbleSeries2", { static: true } )
	private bubbleSeries2: IgxBubbleSeriesComponent
	private  _sizeScale2: IgxSizeScaleComponent | null = null;
	public get sizeScale2(): IgxSizeScaleComponent {
	    if (this._sizeScale2 == null)
	    {
	        var SizeScale2 = new IgxSizeScaleComponent();

	        SizeScale2.minimumValue = 10;
	        SizeScale2.maximumValue = 50;

	        this._sizeScale2 = SizeScale2;
	    }
	    return this._sizeScale2;
	}
	@ViewChild("dataToolTipLayer", { static: true } )
	private dataToolTipLayer: IgxDataToolTipLayerComponent
    private _countryDemographicAfrican: CountryDemographicAfrican = null;
    public get countryDemographicAfrican(): CountryDemographicAfrican {
        if (this._countryDemographicAfrican == null)
        {
            this._countryDemographicAfrican = new CountryDemographicAfrican();
        }
        return this._countryDemographicAfrican;
    }

    private _countryDemographicEurope: CountryDemographicEurope = null;
    public get countryDemographicEurope(): CountryDemographicEurope {
        if (this._countryDemographicEurope == null)
        {
            this._countryDemographicEurope = new CountryDemographicEurope();
        }
        return this._countryDemographicEurope;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}

