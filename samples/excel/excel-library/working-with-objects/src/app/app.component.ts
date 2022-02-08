import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild, ViewContainerRef } from "@angular/core";

// NOTE if needed, import either CategoryChart, DataChart, or Grid component:
// import { IgxGridComponent } from "igniteui-angular";
import { IgxCategoryChartComponent } from "igniteui-angular-charts";
// import { IgxDataChartComponent } from "igniteui-angular-charts";

// TODO import Excel components that the sample will be showcasing:import { TextFormatMode } from "igniteui-angular-excel";
import { Workbook } from "igniteui-angular-excel";
import { WorkbookFormat } from "igniteui-angular-excel";
import { Worksheet } from "igniteui-angular-excel";
import { WorksheetTable } from "igniteui-angular-excel";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements AfterViewInit {

    // TODO if needed, uncomment to get access to IG control
    // @ViewChild("chart")
    // public chart: IgxCategoryChartComponent;
    // @ViewChild("chart")
    // public chart: IgxDataChartComponent;
    // @ViewChild("grid")
    // public chart: IgxGridComponent;

    public data: any;

    constructor() {

        // TODO generate excel data or load data from .xls file
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
        this.data = [ usaMedals, chinaMedals, russiaMedals ];
    }

    public ngOnInit() {
    }

    public ngAfterViewInit(): void {
        // TODO bind excel data to the chart
        // this.chart.dataSource = this.data;
    }

}
