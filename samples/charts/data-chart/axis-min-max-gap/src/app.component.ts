import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TemperatureAverageDataItem, TemperatureAverageData } from './TemperatureAverageData';
import { IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxCategoryHighlightLayerComponent, IgxColumnSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

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
    @ViewChild("xAxis", { static: true } )
    private xAxis: IgxCategoryXAxisComponent
    @ViewChild("yAxis", { static: true } )
    private yAxis: IgxNumericYAxisComponent
    @ViewChild("categoryHighlightLayer", { static: true } )
    private categoryHighlightLayer: IgxCategoryHighlightLayerComponent
    @ViewChild("columnSeries1", { static: true } )
    private columnSeries1: IgxColumnSeriesComponent
    @ViewChild("tooltips", { static: true } )
    private tooltips: IgxDataToolTipLayerComponent

    private _temperatureAverageData: TemperatureAverageData = null;
    public get temperatureAverageData(): TemperatureAverageData {
        if (this._temperatureAverageData == null)
        {
            this._temperatureAverageData = new TemperatureAverageData();
        }
        return this._temperatureAverageData;
    }

}

