import { Component, ViewChild } from "@angular/core";
import { IgxCategoryXAxisComponent } from "igniteui-angular-charts";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts";
import { SampleFinancialData } from "./SampleFinancialData";

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public data: any[];
    public trendlineType: string = "CubicFit";

    @ViewChild("xAxis", { static: true })
    public xAxis: IgxCategoryXAxisComponent;

    @ViewChild("yAxis", { static: true })
    public yAxis: IgxNumericYAxisComponent;

    constructor() {
        this.initData();
    }

    public initData() {
        this.data = SampleFinancialData.create();
    }

    public addDays(date: Date, days: number): Date {
        return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
    }
}
