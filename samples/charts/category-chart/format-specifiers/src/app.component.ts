import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, DataLegendDescriptionModule, CategoryChartDescriptionModule } from 'igniteui-angular-core';
import { HighestGrossingMoviesItem, HighestGrossingMovies } from './HighestGrossingMovies';
import { IgxDataLegendComponent, IgxCategoryChartComponent } from 'igniteui-angular-charts';
import { IgxNumberFormatSpecifier } from 'igniteui-angular-core';

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
	private chart: IgxCategoryChartComponent
	private _numberFormatSpecifier1: IgxNumberFormatSpecifier[] | null = null;
	public get numberFormatSpecifier1(): IgxNumberFormatSpecifier[] {
	    if (this._numberFormatSpecifier1 == null)
	    {
	        let numberFormatSpecifier1: IgxNumberFormatSpecifier[] = [];
	        var numberFormatSpecifier2 = new IgxNumberFormatSpecifier();
	        numberFormatSpecifier2.style = "currency";
	        numberFormatSpecifier2.currency = "USD";
	        numberFormatSpecifier2.currencyDisplay = "symbol";
	        numberFormatSpecifier2.minimumFractionDigits = 0;

	        numberFormatSpecifier1.push(numberFormatSpecifier2)
	        this._numberFormatSpecifier1 = numberFormatSpecifier1;
	    }
	    return this._numberFormatSpecifier1;
	}
    private _highestGrossingMovies: HighestGrossingMovies = null;
    public get highestGrossingMovies(): HighestGrossingMovies {
        if (this._highestGrossingMovies == null)
        {
            this._highestGrossingMovies = new HighestGrossingMovies();
        }
        return this._highestGrossingMovies;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            DataLegendDescriptionModule.register(context);
            CategoryChartDescriptionModule.register(context);
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

