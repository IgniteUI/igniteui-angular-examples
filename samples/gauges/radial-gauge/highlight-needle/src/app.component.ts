import { Component, OnInit, ViewChild } from "@angular/core";
import { HighlightedValueDisplayMode } from "igniteui-angular-core";
// radial gauge imports
import { IgxRadialGaugeComponent } from "igniteui-angular-gauges";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    @ViewChild("radialGauge", { static: true })
    public radialGauge: IgxRadialGaugeComponent;

    public ngOnInit(): void {

        // changing defaults to highlight current feature
        this.radialGauge.scaleBrush = "#e8e8e8";
    }
}
