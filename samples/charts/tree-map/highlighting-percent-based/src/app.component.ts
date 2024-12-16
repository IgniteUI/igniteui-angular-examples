import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, TreemapDescriptionModule } from 'igniteui-angular-core';
import { CountryTopUrbanPopDataItem, CountryTopUrbanPopData } from './CountryTopUrbanPopData';
import { IgxTreemapComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("treemap", { static: true } )
	private treemap: IgxTreemapComponent
    private _countryTopUrbanPopData: CountryTopUrbanPopData = null;
    public get countryTopUrbanPopData(): CountryTopUrbanPopData {
        if (this._countryTopUrbanPopData == null)
        {
            this._countryTopUrbanPopData = new CountryTopUrbanPopData();
        }
        return this._countryTopUrbanPopData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            TreemapDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}

