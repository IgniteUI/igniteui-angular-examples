import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Stock2YearsItem, Stock2Years } from './Stock2Years';
import { IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxFinancialPriceSeriesComponent } from 'igniteui-angular-charts';

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
	private xAxis: IgxCategoryXAxisComponent
	@ViewChild("yAxis", { static: true } )
	private yAxis: IgxNumericYAxisComponent
	@ViewChild("series1", { static: true } )
	private series1: IgxFinancialPriceSeriesComponent
    private _stock2Years: Stock2Years = null;
    public get stock2Years(): Stock2Years {
        if (this._stock2Years == null)
        {
            this._stock2Years = new Stock2Years();
        }
        return this._stock2Years;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}

