import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { StockGoogleItem, StockGoogle } from './StockGoogle';
import { IgxFinancialChartComponent } from 'igniteui-angular-charts';

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("chart", { static: true } )
	private chart: IgxFinancialChartComponent
    private _stockGoogle: StockGoogle = null;
    public get stockGoogle(): StockGoogle {
        if (this._stockGoogle == null)
        {
            this._stockGoogle = new StockGoogle();
        }
        return this._stockGoogle;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}

