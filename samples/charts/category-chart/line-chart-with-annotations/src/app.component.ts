import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from "@angular/core";
import { IgxDataChartComponent } from "igniteui-angular-charts";
import { IgxCalloutLayerComponent } from "igniteui-angular-charts";
import { IgxSeriesComponent } from "igniteui-angular-charts";

@Component({
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    public data: any[];
    public calloutData: any[];

    public crosshairsDisplay: string = "Both";
    public crosshairAnnotations: boolean = true;
    public finalValuesVisible: boolean = true;
    public calloutsVisible: boolean = true;
    public markerType: string = "Circle";

    constructor() {
    }

    public ngOnInit() {

        this.data = [
            { Year: "2009", USA: 19 },
            { Year: "2010", USA: 24 },
            { Year: "2011", USA: 28 },
            { Year: "2012", USA: 26 },
            { Year: "2013", USA: 38 },
            { Year: "2014", USA: 31 },
            { Year: "2015", USA: 19 },
            { Year: "2016", USA: 52 },
            { Year: "2017", USA: 50 },
            { Year: "2018", USA: 34 },
            { Year: "2019", USA: 38 },
        ];

        this.calloutData = [];

        for (let i = 0; i < this.data.length; i++) {
            const item = this.data[i];
            this.calloutData.push({ index: i, label: item.USA + " TWh", value: item.USA });
        }
    }

    public OnCrosshairVisibilityChanged(e: any) {
        const val = e.target.checked;

        if (val) {
            this.crosshairsDisplay = "Both";
        }
        else {
            this.crosshairsDisplay = "None";
        }
    }

    public OnMarkersVisibilityChanged(e: any) {
        const val = e.target.checked;

        if (val) {
            this.markerType = "Circle";
        }
        else {
            this.markerType = "None";
        }
    }

    public OnCalloutsVisibilityChanged(e: any) {
        this.calloutsVisible = e.target.checked;
    }

    public OnFinalValueVisibilityChanged(e: any) {
        this.finalValuesVisible = e.target.checked;
    }
}
