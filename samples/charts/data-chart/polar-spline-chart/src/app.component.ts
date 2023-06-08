import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BoatSailingDataItem, BoatSailingData } from './BoatSailingData';
import { IgxDataChartComponent, IgxNumericAngleAxisComponent, IgxNumericRadiusAxisComponent, IgxPolarSplineSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

    public constructor(private _detector: ChangeDetectorRef) {

    }

    @ViewChild("chart", { static: true } )
    private chart: IgxDataChartComponent
    @ViewChild("angleAxis", { static: true } )
    private angleAxis: IgxNumericAngleAxisComponent
    @ViewChild("radiusAxis", { static: true } )
    private radiusAxis: IgxNumericRadiusAxisComponent
    @ViewChild("polarSplineSeries1", { static: true } )
    private polarSplineSeries1: IgxPolarSplineSeriesComponent
    @ViewChild("polarSplineSeries2", { static: true } )
    private polarSplineSeries2: IgxPolarSplineSeriesComponent
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

}

