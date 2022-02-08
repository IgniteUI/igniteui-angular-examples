import { Component, OnInit } from "@angular/core";
import { SampleFinancialData } from "./SampleFinancialData";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public data: any = SampleFinancialData.create();
    public displayTypeSeries: string = "Candlestick";
    public displayTypeIndicator: string = "Line";

    constructor() { }

    public ngOnInit() {
    }
}
