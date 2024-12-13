import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, LegendDescriptionModule, NumberAbbreviatorDescriptionModule, DataChartCoreDescriptionModule, DataChartCategoryDescriptionModule, DataChartInteractivityDescriptionModule, DataLegendDescriptionModule, DataChartAnnotationDescriptionModule } from 'igniteui-angular-core';
import { OlympicMedalsTopCountriesWithTotalsItem, OlympicMedalsTopCountriesWithTotals } from './OlympicMedalsTopCountriesWithTotals';
import { IgxDataLegendComponent, IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxColumnSeriesComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
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
	private chart: IgxDataChartComponent
	@ViewChild("xAxis", { static: true } )
	private xAxis: IgxCategoryXAxisComponent
	@ViewChild("yAxis", { static: true } )
	private yAxis: IgxNumericYAxisComponent
	@ViewChild("columnSeries1", { static: true } )
	private columnSeries1: IgxColumnSeriesComponent
	@ViewChild("columnSeries2", { static: true } )
	private columnSeries2: IgxColumnSeriesComponent
	@ViewChild("columnSeries3", { static: true } )
	private columnSeries3: IgxColumnSeriesComponent
    private _olympicMedalsTopCountriesWithTotals: OlympicMedalsTopCountriesWithTotals = null;
    public get olympicMedalsTopCountriesWithTotals(): OlympicMedalsTopCountriesWithTotals {
        if (this._olympicMedalsTopCountriesWithTotals == null)
        {
            this._olympicMedalsTopCountriesWithTotals = new OlympicMedalsTopCountriesWithTotals();
        }
        return this._olympicMedalsTopCountriesWithTotals;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            LegendDescriptionModule.register(context);
            NumberAbbreviatorDescriptionModule.register(context);
            DataChartCoreDescriptionModule.register(context);
            DataChartCategoryDescriptionModule.register(context);
            DataChartInteractivityDescriptionModule.register(context);
            DataLegendDescriptionModule.register(context);
            DataChartAnnotationDescriptionModule.register(context);
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

