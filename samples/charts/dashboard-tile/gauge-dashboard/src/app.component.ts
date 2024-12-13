import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
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

	public constructor(private _detector: ChangeDetectorRef)
	{
		this.dashboardTileGaugeOnInit();
	}

	public ngAfterViewInit(): void
	{
	}

	public dashboardTileGaugeOnInit(): void {

	    var target = this.dashboard;

	    target.dataSource = 40;
	}

}

