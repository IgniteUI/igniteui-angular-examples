import { Component, ViewChild } from "@angular/core";
import { IgxSparklineComponent } from "igniteui-angular-charts";
import { SparklineDisplayType } from "igniteui-angular-charts";

import { SharedData } from "./SharedData";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public data: any[];

    @ViewChild("sparkline", { static: true })
    public sparkline: IgxSparklineComponent;

    constructor() {
        this.data = SharedData.getSharedData();
    }

    public onDisplayTypeChanged(e: any) {
        const selection = e.target.value.toString();

        switch (selection) {
            case "Area": {
                this.sparkline.displayType = SparklineDisplayType.Area;
                break;
            }
            case "Column": {
                this.sparkline.displayType = SparklineDisplayType.Column;
                break;
            }
            case "Line": {
                this.sparkline.displayType = SparklineDisplayType.Line;
                break;
            }
            case "WinLoss": {
                this.sparkline.displayType = SparklineDisplayType.WinLoss;
                break;
            }
        }
    }
}
