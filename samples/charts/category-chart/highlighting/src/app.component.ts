import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from "@angular/core";
import { IgxCategoryChartComponent } from "igniteui-angular-charts";

@Component({
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements AfterViewInit {

    @ViewChild("chart", { static: true })
    public chart: IgxCategoryChartComponent;
    public isItemHighlightingEnabled: boolean = true;
    public isSeriesHighlightingEnabled: boolean = true;
    public isCategoryHighlightingEnabled: boolean = false;
    public olympicData: any;
    public chartType: string = "Column";

    constructor() {
        const usaMedals: any = [
            { Year: "1996", UnitedStates: 148 },
            { Year: "2000", UnitedStates: 142 },
            { Year: "2004", UnitedStates: 134 },
            { Year: "2008", UnitedStates: 131 },
            { Year: "2012", UnitedStates: 135 },
            { Year: "2016", UnitedStates: 146 }
        ];
        const chinaMedals: any = [
            { Year: "1996", China: 110 },
            { Year: "2000", China: 115 },
            { Year: "2004", China: 121 },
            { Year: "2008", China: 129 },
            { Year: "2012", China: 115 },
            { Year: "2016", China: 112 }
        ];
        const russiaMedals: any = [
            { Year: "1996", Russia: 95 },
            { Year: "2000", Russia: 91 },
            { Year: "2004", Russia: 86 },
            { Year: "2008", Russia: 65 },
            { Year: "2012", Russia: 77 },
            { Year: "2016", Russia: 88 }
        ];
        this.olympicData = [ usaMedals, chinaMedals, russiaMedals ];
    }

    public ngAfterViewInit(): void {
    }

    public initHighlighting(): void {
        this.chart.isItemHighlightingEnabled = true;
        this.chart.isCategoryHighlightingEnabled = true;
        this.chart.isSeriesHighlightingEnabled = true;
    }
}
