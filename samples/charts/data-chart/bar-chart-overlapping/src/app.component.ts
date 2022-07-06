import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { RoadblocksToSuccessItem, RoadblocksToSuccess } from './RoadblocksToSuccess';
import { IgxLegendComponent, IgxDataChartComponent, IgxCategoryYAxisComponent, IgxNumericXAxisComponent, IgxCategoryHighlightLayerComponent, IgxBarSeriesComponent, IgxCalloutLayerComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';



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
    @ViewChild("yAxis1", { static: true } )
    private yAxis1: IgxCategoryYAxisComponent
    @ViewChild("yAxis2", { static: true } )
    private yAxis2: IgxCategoryYAxisComponent
    @ViewChild("xAxis", { static: true } )
    private xAxis: IgxNumericXAxisComponent
    @ViewChild("categoryHighlightLayer", { static: true } )
    private categoryHighlightLayer: IgxCategoryHighlightLayerComponent
    @ViewChild("barSeries1", { static: true } )
    private barSeries1: IgxBarSeriesComponent
    @ViewChild("barSeries2", { static: true } )
    private barSeries2: IgxBarSeriesComponent
    @ViewChild("calloutLayer1", { static: true } )
    private calloutLayer1: IgxCalloutLayerComponent
    @ViewChild("calloutLayer2", { static: true } )
    private calloutLayer2: IgxCalloutLayerComponent
    @ViewChild("tooltips", { static: true } )
    private tooltips: IgxDataToolTipLayerComponent

    private _roadblocksToSuccess: RoadblocksToSuccess = null;
    public get roadblocksToSuccess(): RoadblocksToSuccess {
        if (this._roadblocksToSuccess == null)
        {
            this._roadblocksToSuccess = new RoadblocksToSuccess();
        }
        return this._roadblocksToSuccess;
    }
    


}

