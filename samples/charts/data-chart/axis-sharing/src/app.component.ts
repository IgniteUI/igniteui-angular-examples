import { Component, OnInit } from "@angular/core";
import { SampleFinancialData } from "./SampleFinancialData";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    public data: any[] = SampleFinancialData.create();
    constructor() { }

    public ngOnInit() {
    }

}
