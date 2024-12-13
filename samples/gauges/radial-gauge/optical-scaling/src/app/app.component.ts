import { Component, OnInit, ViewChild } from "@angular/core";
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

    public onOpticalScalingChanged = (e: any) => {
      const isEnabled = e.target.checked;
      this.radialGauge.opticalScalingEnabled = isEnabled;

      if (isEnabled) {
          this.radialGauge.opticalScalingEnabled = true;
      }
      else {
          this.radialGauge.opticalScalingEnabled = false;
      }
    }

    public onGaugeSizeChanged = (e: any) => {

        let num: number = parseInt(e.target.value);
        this.radialGauge.width = num.toString() + "%";
        this.radialGauge.height = num.toString() + "%";
    }
}
