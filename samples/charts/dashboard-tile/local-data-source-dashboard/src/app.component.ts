import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { RetailSalesPerformanceLocalDataSource } from './RetailSalesPerformanceLocalDataSource';
import { IgxDashboardTileComponent } from 'igniteui-angular-dashboards';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("dashboard", { static: true } )
	private dashboard: IgxDashboardTileComponent
    private _retailSalesPerformanceLocalDataSource: RetailSalesPerformanceLocalDataSource = null;
    public get retailSalesPerformanceLocalDataSource(): RetailSalesPerformanceLocalDataSource {
        if (this._retailSalesPerformanceLocalDataSource == null)
        {
            this._retailSalesPerformanceLocalDataSource = new RetailSalesPerformanceLocalDataSource();
        }
        return this._retailSalesPerformanceLocalDataSource;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}

