import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { WorldCitiesItem, WorldCities } from './WorldCities';
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
    private _worldCities: WorldCities = null;
    public get worldCities(): WorldCities {
        if (this._worldCities == null)
        {
            this._worldCities = new WorldCities();
        }
        return this._worldCities;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}

