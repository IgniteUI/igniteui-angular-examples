import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { SizeScaleItem } from './SampleData';
import { CountryDemographicAfricanItem, CountryDemographicAfrican } from './CountryDemographicAfrican';
import { CountryDemographicEuropeItem, CountryDemographicEurope } from './CountryDemographicEurope';
import { IgxLegendComponent, IgxDataChartComponent, IgxNumericXAxisComponent, IgxNumericYAxisComponent, IgxBubbleSeriesComponent } from 'igniteui-angular-charts';



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
    private xAxis: IgxNumericXAxisComponent
    @ViewChild("yAxis", { static: true } )
    private yAxis: IgxNumericYAxisComponent
    @ViewChild("bubbleSeries1", { static: true } )
    private bubbleSeries1: IgxBubbleSeriesComponent
    @ViewChild("bubbleSeries2", { static: true } )
    private bubbleSeries2: IgxBubbleSeriesComponent

    private _sizeScale: SizeScaleItem = null;
    public get sizeScale(): SizeScaleItem {
        if (this._sizeScale == null)
        {
            this._sizeScale = 
            new SizeScaleItem(
            {
                type: `SizeScale`,
                minimumValue: 10,
                maximumValue: 50
            })}
            return this._sizeScale;
        }
        
        private _countryDemographicAfrican: CountryDemographicAfrican = null;
        public get countryDemographicAfrican(): CountryDemographicAfrican {
            if (this._countryDemographicAfrican == null)
            {
                this._countryDemographicAfrican = new CountryDemographicAfrican();
            }
            return this._countryDemographicAfrican;
        }
        
        private _countryDemographicEurope: CountryDemographicEurope = null;
        public get countryDemographicEurope(): CountryDemographicEurope {
            if (this._countryDemographicEurope == null)
            {
                this._countryDemographicEurope = new CountryDemographicEurope();
            }
            return this._countryDemographicEurope;
        }
        


}

