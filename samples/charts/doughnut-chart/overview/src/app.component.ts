import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CompanyMarketSharesItem, CompanyMarketShares } from './CompanyMarketShares';
import { IgxDoughnutChartComponent, IgxRingSeriesComponent } from 'igniteui-angular-charts';

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
    private chart: IgxDoughnutChartComponent
    @ViewChild("series", { static: true } )
    private series: IgxRingSeriesComponent

    private _companyMarketShares: CompanyMarketShares = null;
    public get companyMarketShares(): CompanyMarketShares {
        if (this._companyMarketShares == null)
        {
            this._companyMarketShares = new CompanyMarketShares();
        }
        return this._companyMarketShares;
    }

}

