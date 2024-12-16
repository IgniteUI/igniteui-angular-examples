import { Component, OnInit } from "@angular/core";
import { SampleFinancialData } from "./SampleFinancialData";

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    public data: any = SampleFinancialData.create();
    public displayTypeSeries: string = "Candlestick";
    public displayTypeIndicator: string = "Line";

    constructor() { }

    public ngOnInit() {
    }
}
