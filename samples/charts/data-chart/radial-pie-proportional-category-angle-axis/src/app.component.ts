import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { RadialProportionalDataItem, RadialProportionalData } from './RadialProportionalData';
import { IgxDataChartComponent, IgxProportionalCategoryAngleAxisComponent, IgxNumericRadiusAxisComponent, IgxRadialPieSeriesComponent } from 'igniteui-angular-charts';

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
	private angleAxis: IgxProportionalCategoryAngleAxisComponent
	@ViewChild("radiusAxis", { static: true } )
	private radiusAxis: IgxNumericRadiusAxisComponent
	@ViewChild("radialPieSeries1", { static: true } )
	private radialPieSeries1: IgxRadialPieSeriesComponent
    private _radialProportionalData: RadialProportionalData = null;
    public get radialProportionalData(): RadialProportionalData {
        if (this._radialProportionalData == null)
        {
            this._radialProportionalData = new RadialProportionalData();
        }
        return this._radialProportionalData;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}

