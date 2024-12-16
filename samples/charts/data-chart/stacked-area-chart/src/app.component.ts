import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ContinentsBirthRateItem, ContinentsBirthRate } from './ContinentsBirthRate';
import { IgxLegendComponent, IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxStackedAreaSeriesComponent, IgxStackedFragmentSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

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
	private legend: IgxLegendComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxDataChartComponent
	@ViewChild("xAxis", { static: true } )
	private xAxis: IgxCategoryXAxisComponent
	@ViewChild("yAxis", { static: true } )
	private yAxis: IgxNumericYAxisComponent
	@ViewChild("stackedAreaSeries", { static: true } )
	private stackedAreaSeries: IgxStackedAreaSeriesComponent
	@ViewChild("s1", { static: true } )
	private s1: IgxStackedFragmentSeriesComponent
	@ViewChild("s2", { static: true } )
	private s2: IgxStackedFragmentSeriesComponent
	@ViewChild("s3", { static: true } )
	private s3: IgxStackedFragmentSeriesComponent
	@ViewChild("s4", { static: true } )
	private s4: IgxStackedFragmentSeriesComponent
	@ViewChild("s5", { static: true } )
	private s5: IgxStackedFragmentSeriesComponent
	@ViewChild("dataToolTipLayer", { static: true } )
	private dataToolTipLayer: IgxDataToolTipLayerComponent
    private _continentsBirthRate: ContinentsBirthRate = null;
    public get continentsBirthRate(): ContinentsBirthRate {
        if (this._continentsBirthRate == null)
        {
            this._continentsBirthRate = new ContinentsBirthRate();
        }
        return this._continentsBirthRate;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}

