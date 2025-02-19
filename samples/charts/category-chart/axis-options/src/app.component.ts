import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { OlympicMedalsTopCountriesItem, OlympicMedalsTopCountries } from './OlympicMedalsTopCountries';
import { IgxCategoryChartComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("chart", { static: true } )
	private chart: IgxCategoryChartComponent
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

