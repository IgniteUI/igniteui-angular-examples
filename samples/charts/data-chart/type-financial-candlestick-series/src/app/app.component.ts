import { Component } from "@angular/core";
import { SampleFinancialData } from "./SampleFinancialData";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public data: any = SampleFinancialData.create();
    public displayTypeIndicator: string = "Line";

    constructor() { }

}
