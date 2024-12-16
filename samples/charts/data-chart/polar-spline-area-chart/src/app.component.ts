import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BoatSailingDataItem, BoatSailingData } from './BoatSailingData';
import { IgxDataChartComponent, IgxNumericAngleAxisComponent, IgxNumericRadiusAxisComponent, IgxPolarSplineAreaSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

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
	private chart: IgxDataChartComponent
	@ViewChild("angleAxis", { static: true } )
	private angleAxis: IgxNumericAngleAxisComponent
	@ViewChild("radiusAxis", { static: true } )
	private radiusAxis: IgxNumericRadiusAxisComponent
	@ViewChild("polarSplineAreaSeries1", { static: true } )
	private polarSplineAreaSeries1: IgxPolarSplineAreaSeriesComponent
	@ViewChild("polarSplineAreaSeries2", { static: true } )
	private polarSplineAreaSeries2: IgxPolarSplineAreaSeriesComponent
	@ViewChild("dataToolTipLayer", { static: true } )
	private dataToolTipLayer: IgxDataToolTipLayerComponent
    private _boatSailingData: BoatSailingData = null;
    public get boatSailingData(): BoatSailingData {
        if (this._boatSailingData == null)
        {
            this._boatSailingData = new BoatSailingData();
        }
        return this._boatSailingData;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}

