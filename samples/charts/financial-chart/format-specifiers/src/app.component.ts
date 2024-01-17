import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MultipleStocks } from './MultipleStocks';
import { IgxDataLegendComponent, IgxFinancialChartComponent } from 'igniteui-angular-charts';
import { IgxNumberFormatSpecifier, IgxDateTimeFormatSpecifier } from 'igniteui-angular-core';

@Component({
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
	        numberFormatSpecifier2.currency = "EUR";
	        numberFormatSpecifier2.style = "currency";
	        numberFormatSpecifier2.locale = "en-GB";
	        numberFormatSpecifier2.minimumFractionDigits = 2;
	        numberFormatSpecifier2.maximumFractionDigits = 2;

	        numberFormatSpecifier1.push(numberFormatSpecifier2)
	        this._numberFormatSpecifier1 = numberFormatSpecifier1;
	    }
	    return this._numberFormatSpecifier1;
	}
	@ViewChild("chart", { static: true } )
	private chart: IgxFinancialChartComponent
	private _numberFormatSpecifier3: IgxNumberFormatSpecifier[] | null = null;
	public get numberFormatSpecifier3(): IgxNumberFormatSpecifier[] {
	    if (this._numberFormatSpecifier3 == null)
	    {
	        let numberFormatSpecifier3: IgxNumberFormatSpecifier[] = [];
	        var numberFormatSpecifier4 = new IgxNumberFormatSpecifier();
	        numberFormatSpecifier4.currency = "EUR";
	        numberFormatSpecifier4.style = "currency";
	        numberFormatSpecifier4.locale = "en-GB";
	        numberFormatSpecifier4.minimumFractionDigits = 2;
	        numberFormatSpecifier4.maximumFractionDigits = 2;

	        numberFormatSpecifier3.push(numberFormatSpecifier4)
	        this._numberFormatSpecifier3 = numberFormatSpecifier3;
	    }
	    return this._numberFormatSpecifier3;
	}
	private _numberFormatSpecifier5: IgxNumberFormatSpecifier[] | null = null;
	public get numberFormatSpecifier5(): IgxNumberFormatSpecifier[] {
	    if (this._numberFormatSpecifier5 == null)
	    {
	        let numberFormatSpecifier5: IgxNumberFormatSpecifier[] = [];
	        var numberFormatSpecifier6 = new IgxNumberFormatSpecifier();
	        numberFormatSpecifier6.currency = "EUR";
	        numberFormatSpecifier6.style = "currency";
	        numberFormatSpecifier6.locale = "en-GB";
	        numberFormatSpecifier6.minimumFractionDigits = 0;

	        numberFormatSpecifier5.push(numberFormatSpecifier6)
	        this._numberFormatSpecifier5 = numberFormatSpecifier5;
	    }
	    return this._numberFormatSpecifier5;
	}
	private _dateTimeFormatSpecifier1: IgxDateTimeFormatSpecifier[] | null = null;
	public get dateTimeFormatSpecifier1(): IgxDateTimeFormatSpecifier[] {
	    if (this._dateTimeFormatSpecifier1 == null)
	    {
	        let dateTimeFormatSpecifier1: IgxDateTimeFormatSpecifier[] = [];
	        var dateTimeFormatSpecifier2 = new IgxDateTimeFormatSpecifier();
	        dateTimeFormatSpecifier2.locale = "en-GB";
	        dateTimeFormatSpecifier2.dateStyle = "long";

	        dateTimeFormatSpecifier1.push(dateTimeFormatSpecifier2)
	        this._dateTimeFormatSpecifier1 = dateTimeFormatSpecifier1;
	    }
	    return this._dateTimeFormatSpecifier1;
	}
    private _multipleStocks: MultipleStocks = null;
    private _multipleStocksFetching: boolean = false;
    public get multipleStocks(): MultipleStocks {
        if (this._multipleStocks == null && !this._multipleStocksFetching)
        {
            this._multipleStocksFetching = true;
            ( async () => { this._multipleStocks = await (await MultipleStocks.fetch()); this._detector.markForCheck();  })();
        }
        return this._multipleStocks;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}

