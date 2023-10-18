import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HighestGrossingMoviesItem, HighestGrossingMovies } from './HighestGrossingMovies';
import { IgxDataLegendComponent, IgxDataChartComponent, IgxCategoryYAxisComponent, IgxNumericXAxisComponent, IgxBarSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';
import { IgxNumberFormatSpecifier } from 'igniteui-angular-core';

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
    private legend: IgxDataLegendComponent
    @ViewChild("chart", { static: true } )
    private chart: IgxDataChartComponent
    @ViewChild("yAxis", { static: true } )
    private yAxis: IgxCategoryYAxisComponent
    @ViewChild("xAxis", { static: true } )
    private xAxis: IgxNumericXAxisComponent
    private _numberFormatSpecifier1: IgxNumberFormatSpecifier[] | null = null;
    public get numberFormatSpecifier1(): IgxNumberFormatSpecifier[] {
        if (this._numberFormatSpecifier1 == null)
        {
            let numberFormatSpecifier1: IgxNumberFormatSpecifier[] = [];
            var numberFormatSpecifier2 = new IgxNumberFormatSpecifier();
            numberFormatSpecifier2.style = "currency";
            numberFormatSpecifier2.currency = "USD";
            numberFormatSpecifier2.currencyDisplay = "symbol";
            numberFormatSpecifier2.minimumFractionDigits = 0;

            numberFormatSpecifier1.push(numberFormatSpecifier2)
            this._numberFormatSpecifier1 = numberFormatSpecifier1;
        }
        return this._numberFormatSpecifier1;
    }
    @ViewChild("barSeries1", { static: true } )
    private barSeries1: IgxBarSeriesComponent
    @ViewChild("barSeries2", { static: true } )
    private barSeries2: IgxBarSeriesComponent
    @ViewChild("tooltips", { static: true } )
    private tooltips: IgxDataToolTipLayerComponent

    private _highestGrossingMovies: HighestGrossingMovies = null;
    public get highestGrossingMovies(): HighestGrossingMovies {
        if (this._highestGrossingMovies == null)
        {
            this._highestGrossingMovies = new HighestGrossingMovies();
        }
        return this._highestGrossingMovies;
    }

}

