import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxDoughnutChartComponent } from "igniteui-angular-charts";
import { IgxRingSeriesComponent } from "igniteui-angular-charts";
import { IgxSliceClickEventArgs } from "igniteui-angular-charts";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements AfterViewInit {

    public data: any;
    public selectedSliceLabel : string = "No Selection";
    public selectedSliceValue : string = "0%";

    @ViewChild("chart", { static: true })
    public chart: IgxDoughnutChartComponent;

    constructor() {
        this.data = [
            { Value: 37, Label: "Cooling", Summary: "Cooling 37%" },
            { Value: 25, Label: "Residential", Summary: "Residential 25%"  },
            { Value: 12, Label: "Heating", Summary: "Heating 12%" },
            { Value: 11, Label: "Lighting", Summary: "Lighting 11%" },
            { Value: 18, Label: "Other", Summary: "Other 18%" }
        ];

    }


    public OnSliceClick(e: any) {

        if (e.args.isSelected)
        {
            this.selectedSliceLabel = this.data[e.args.index].Label;
            this.selectedSliceValue = this.data[e.args.index].Value + "%";
        }
        else
        {
            this.selectedSliceLabel = "No Selection";
            this.selectedSliceValue = "0%";
        }
    }

    public ngAfterViewInit(): void {
    }


}
