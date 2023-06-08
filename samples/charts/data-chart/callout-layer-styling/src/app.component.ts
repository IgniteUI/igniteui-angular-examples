import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';
import { CountryRenewableCalloutsItem, CountryRenewableCallouts } from './CountryRenewableCallouts';
import { IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxLineSeriesComponent, IgxCalloutLayerComponent } from 'igniteui-angular-charts';

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
    @ViewChild("lineSeries1", { static: true } )
    private lineSeries1: IgxLineSeriesComponent
    @ViewChild("calloutLayer1", { static: true } )
    private calloutLayer1: IgxCalloutLayerComponent

    private _countryRenewableElectricity: CountryRenewableElectricity = null;
    public get countryRenewableElectricity(): CountryRenewableElectricity {
        if (this._countryRenewableElectricity == null)
        {
            this._countryRenewableElectricity = new CountryRenewableElectricity();
        }
        return this._countryRenewableElectricity;
    }

    private _countryRenewableCallouts: CountryRenewableCallouts = null;
    public get countryRenewableCallouts(): CountryRenewableCallouts {
        if (this._countryRenewableCallouts == null)
        {
            this._countryRenewableCallouts = new CountryRenewableCallouts();
        }
        return this._countryRenewableCallouts;
    }

}

