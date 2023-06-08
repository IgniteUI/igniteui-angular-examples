import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FootballPlayerStatsItem, FootballPlayerStats } from './FootballPlayerStats';
import { IgxLegendComponent, IgxDataChartComponent, IgxCategoryAngleAxisComponent, IgxNumericRadiusAxisComponent, IgxRadialAreaSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

    public constructor(private _detector: ChangeDetectorRef) {

    }

    @ViewChild("legend", { static: true } )
    private legend: IgxLegendComponent
    @ViewChild("chart", { static: true } )
    private chart: IgxDataChartComponent
    @ViewChild("angleAxis", { static: true } )
    private angleAxis: IgxCategoryAngleAxisComponent
    @ViewChild("radiusAxis", { static: true } )
    private radiusAxis: IgxNumericRadiusAxisComponent
    @ViewChild("radialAreaSeries1", { static: true } )
    private radialAreaSeries1: IgxRadialAreaSeriesComponent
    @ViewChild("radialAreaSeries2", { static: true } )
    private radialAreaSeries2: IgxRadialAreaSeriesComponent
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

}

