import { Component, ViewChild } from "@angular/core";
import { IgxSparklineComponent } from "igniteui-angular-charts";
import { Visibility } from "igniteui-angular-core";
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
        this.data = SharedData.getPaddedDataForMarkers();
    }

    public onMarkerCheckboxChanged(e: any) {
        const selection = e.target.checked as boolean;

        let visibility: Visibility;
        if (selection) {
            visibility = Visibility.Visible;
        } else {
            visibility = Visibility.Collapsed;
        }

        switch (e.target.id) {
            case "High": {
                this.sparkline.highMarkerVisibility = visibility;
                break;
            }
            case "Low": {
                this.sparkline.lowMarkerVisibility = visibility;
                break;
            }
            case "First": {
                this.sparkline.firstMarkerVisibility = visibility;
                break;
            }
            case "Last": {
                this.sparkline.lastMarkerVisibility = visibility;
                break;
            }
            case "Negative": {
                this.sparkline.negativeMarkerVisibility = visibility;
                break;
            }
            case "All": {
                this.sparkline.markerVisibility = visibility;
                break;
            }
        }
    }
}
