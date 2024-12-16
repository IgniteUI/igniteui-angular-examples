import { Component, ViewChild } from "@angular/core";
import { IgxCategoryXAxisComponent } from "igniteui-angular-charts";
import { IgxLegendComponent } from "igniteui-angular-charts";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts";
import { SharedData } from "./SharedData";

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public data: any[];

    @ViewChild("xAxis", { static: true })
    public xAxis: IgxCategoryXAxisComponent;

    @ViewChild("yAxis", { static: true })
    public yAxis: IgxNumericYAxisComponent;

    @ViewChild("legend", { static: true })
    public legend: IgxLegendComponent;

    constructor() {
        this.initData();
    }

    public initData() {
        this.data = SharedData.getEnergyProduction();
    }
}
