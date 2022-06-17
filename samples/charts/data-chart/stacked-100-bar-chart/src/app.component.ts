import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { EnergyRenewableConsumptionItem, EnergyRenewableConsumption } from './EnergyRenewableConsumption';
import { IgxLegendComponent, IgxDataChartComponent, IgxCategoryYAxisComponent, IgxNumericXAxisComponent, IgxStacked100BarSeriesComponent, IgxStackedFragmentSeriesComponent } from 'igniteui-angular-charts';

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
    @ViewChild("yAxis", { static: true } )
    private yAxis: IgxCategoryYAxisComponent
    @ViewChild("xAxis", { static: true } )
    private xAxis: IgxNumericXAxisComponent
    @ViewChild("stacked100BarSeries", { static: true } )
    private stacked100BarSeries: IgxStacked100BarSeriesComponent
    @ViewChild("s1", { static: true } )
    private s1: IgxStackedFragmentSeriesComponent
    @ViewChild("s2", { static: true } )
    private s2: IgxStackedFragmentSeriesComponent
    @ViewChild("s3", { static: true } )
    private s3: IgxStackedFragmentSeriesComponent
    @ViewChild("s4", { static: true } )
    private s4: IgxStackedFragmentSeriesComponent

    private _energyRenewableConsumption: EnergyRenewableConsumption = null;
    public get energyRenewableConsumption(): EnergyRenewableConsumption {
        if (this._energyRenewableConsumption == null)
        {
            this._energyRenewableConsumption = new EnergyRenewableConsumption();
        }
        return this._energyRenewableConsumption;
    }
    


}

