import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DashboardGaugeDataSourceItem, DashboardGaugeDataSource } from './DashboardGaugeDataSource';
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
    private _dashboardGaugeDataSource: DashboardGaugeDataSource = null;
    public get dashboardGaugeDataSource(): DashboardGaugeDataSource {
        if (this._dashboardGaugeDataSource == null)
        {
            this._dashboardGaugeDataSource = new DashboardGaugeDataSource();
        }
        return this._dashboardGaugeDataSource;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}

