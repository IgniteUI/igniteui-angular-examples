import { Component, ViewChild } from "@angular/core";

import { IgxLinearGaugeComponent } from "igniteui-angular-gauges";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})

export class AppComponent {

    @ViewChild("linearGauge", { static: true })
    public linearGauge: IgxLinearGaugeComponent;
}
