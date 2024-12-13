import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BoatSailingDataItem, BoatSailingData } from './BoatSailingData';
import { IgxLegendComponent, IgxDataChartComponent, IgxNumericAngleAxisComponent, IgxNumericRadiusAxisComponent, IgxPolarLineSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

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
	@ViewChild("angleAxis", { static: true } )
	private angleAxis: IgxNumericAngleAxisComponent
	@ViewChild("radiusAxis", { static: true } )
	private radiusAxis: IgxNumericRadiusAxisComponent
	@ViewChild("polarLineSeries1", { static: true } )
	private polarLineSeries1: IgxPolarLineSeriesComponent
	@ViewChild("polarLineSeries2", { static: true } )
	private polarLineSeries2: IgxPolarLineSeriesComponent
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

