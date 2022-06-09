import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { OnlineTrafficByDeviceItem, OnlineTrafficByDevice } from './OnlineTrafficByDevice';
import { IgxLegendComponent, IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxStacked100ColumnSeriesComponent, IgxStackedFragmentSeriesComponent } from 'igniteui-angular-charts';



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
    @ViewChild("xAxis", { static: true } )
    private xAxis: IgxCategoryXAxisComponent
    @ViewChild("yAxis", { static: true } )
    private yAxis: IgxNumericYAxisComponent
    @ViewChild("stacked100ColumnSeries", { static: true } )
    private stacked100ColumnSeries: IgxStacked100ColumnSeriesComponent
    @ViewChild("s1", { static: true } )
    private s1: IgxStackedFragmentSeriesComponent
    @ViewChild("s2", { static: true } )
    private s2: IgxStackedFragmentSeriesComponent
    @ViewChild("s3", { static: true } )
    private s3: IgxStackedFragmentSeriesComponent

    private _onlineTrafficByDevice: OnlineTrafficByDevice = null;
    public get onlineTrafficByDevice(): OnlineTrafficByDevice {
        if (this._onlineTrafficByDevice == null)
        {
            this._onlineTrafficByDevice = new OnlineTrafficByDevice();
        }
        return this._onlineTrafficByDevice;
    }
    


}

