import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { OlympicMedalsTopCountriesItem, OlympicMedalsTopCountries } from './OlympicMedalsTopCountries';
import { IgxDashboardTileComponent } from 'igniteui-angular-dashboards';

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("dashboard", { static: true } )
	private dashboard: IgxDashboardTileComponent
    private _olympicMedalsTopCountries: OlympicMedalsTopCountries = null;
    public get olympicMedalsTopCountries(): OlympicMedalsTopCountries {
        if (this._olympicMedalsTopCountries == null)
        {
            this._olympicMedalsTopCountries = new OlympicMedalsTopCountries();
        }
        return this._olympicMedalsTopCountries;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}

