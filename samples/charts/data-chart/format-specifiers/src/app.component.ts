import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HighestGrossingMoviesItem, HighestGrossingMovies } from './HighestGrossingMovies';
import { IgxDataLegendComponent, IgxDataChartComponent, IgxCategoryYAxisComponent, IgxNumericXAxisComponent, IgxBarSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';
import { IgxNumberFormatSpecifier } from 'igniteui-angular-core';

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
	private legend: IgxDataLegendComponent
	private _numberFormatSpecifier1: IgxNumberFormatSpecifier[] | null = null;
	public get numberFormatSpecifier1(): IgxNumberFormatSpecifier[] {
	    if (this._numberFormatSpecifier1 == null)
	    {
	        let numberFormatSpecifier1: IgxNumberFormatSpecifier[] = [];
	        var numberFormatSpecifier2 = new IgxNumberFormatSpecifier();
	        numberFormatSpecifier2.style = "currency";
	        numberFormatSpecifier2.currency = "USD";
	        numberFormatSpecifier2.currencyDisplay = "symbol";
	        numberFormatSpecifier2.minimumFractionDigits = 2;
	        numberFormatSpecifier2.maximumFractionDigits = 2;

	        numberFormatSpecifier1.push(numberFormatSpecifier2)
	        this._numberFormatSpecifier1 = numberFormatSpecifier1;
	    }
	    return this._numberFormatSpecifier1;
	}
	@ViewChild("chart", { static: true } )
	private chart: IgxDataChartComponent
	@ViewChild("yAxis", { static: true } )
	private yAxis: IgxCategoryYAxisComponent
	@ViewChild("xAxis", { static: true } )
	private xAxis: IgxNumericXAxisComponent
	private _numberFormatSpecifier3: IgxNumberFormatSpecifier[] | null = null;
	public get numberFormatSpecifier3(): IgxNumberFormatSpecifier[] {
	    if (this._numberFormatSpecifier3 == null)
	    {
	        let numberFormatSpecifier3: IgxNumberFormatSpecifier[] = [];
	        var numberFormatSpecifier4 = new IgxNumberFormatSpecifier();
	        numberFormatSpecifier4.style = "currency";
	        numberFormatSpecifier4.currency = "USD";
	        numberFormatSpecifier4.currencyDisplay = "symbol";
	        numberFormatSpecifier4.minimumFractionDigits = 0;

	        numberFormatSpecifier3.push(numberFormatSpecifier4)
	        this._numberFormatSpecifier3 = numberFormatSpecifier3;
	    }
	    return this._numberFormatSpecifier3;
	}
	@ViewChild("barSeries1", { static: true } )
	private barSeries1: IgxBarSeriesComponent
	@ViewChild("barSeries2", { static: true } )
	private barSeries2: IgxBarSeriesComponent
	@ViewChild("tooltips", { static: true } )
	private tooltips: IgxDataToolTipLayerComponent
	private _numberFormatSpecifier5: IgxNumberFormatSpecifier[] | null = null;
	public get numberFormatSpecifier5(): IgxNumberFormatSpecifier[] {
	    if (this._numberFormatSpecifier5 == null)
	    {
	        let numberFormatSpecifier5: IgxNumberFormatSpecifier[] = [];
	        var numberFormatSpecifier6 = new IgxNumberFormatSpecifier();
	        numberFormatSpecifier6.style = "currency";
	        numberFormatSpecifier6.currency = "USD";
	        numberFormatSpecifier6.currencyDisplay = "symbol";
	        numberFormatSpecifier6.minimumFractionDigits = 2;
	        numberFormatSpecifier6.maximumFractionDigits = 2;

	        numberFormatSpecifier5.push(numberFormatSpecifier6)
	        this._numberFormatSpecifier5 = numberFormatSpecifier5;
	    }
	    return this._numberFormatSpecifier5;
	}
    private _highestGrossingMovies: HighestGrossingMovies = null;
    public get highestGrossingMovies(): HighestGrossingMovies {
        if (this._highestGrossingMovies == null)
        {
            this._highestGrossingMovies = new HighestGrossingMovies();
        }
        return this._highestGrossingMovies;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}

