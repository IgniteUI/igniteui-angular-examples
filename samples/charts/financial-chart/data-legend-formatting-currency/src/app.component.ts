import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MultipleStocks } from './MultipleStocks';
import { IgxDataLegendComponent, IgxFinancialChartComponent } from 'igniteui-angular-charts';

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
	@ViewChild("chart", { static: true } )
	private chart: IgxFinancialChartComponent
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

