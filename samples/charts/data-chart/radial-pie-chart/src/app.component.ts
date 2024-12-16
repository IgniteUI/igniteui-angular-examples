import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FootballPlayerStatsItem, FootballPlayerStats } from './FootballPlayerStats';
import { IgxLegendComponent, IgxDataChartComponent, IgxCategoryAngleAxisComponent, IgxNumericRadiusAxisComponent, IgxRadialPieSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

@Component({
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
	@ViewChild("angleAxis", { static: true } )
	private angleAxis: IgxCategoryAngleAxisComponent
	@ViewChild("radiusAxis", { static: true } )
	private radiusAxis: IgxNumericRadiusAxisComponent
	@ViewChild("radialPieSeries1", { static: true } )
	private radialPieSeries1: IgxRadialPieSeriesComponent
	@ViewChild("radialPieSeries2", { static: true } )
	private radialPieSeries2: IgxRadialPieSeriesComponent
	@ViewChild("dataToolTipLayer", { static: true } )
	private dataToolTipLayer: IgxDataToolTipLayerComponent
    private _footballPlayerStats: FootballPlayerStats = null;
    public get footballPlayerStats(): FootballPlayerStats {
        if (this._footballPlayerStats == null)
        {
            this._footballPlayerStats = new FootballPlayerStats();
        }
        return this._footballPlayerStats;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}

