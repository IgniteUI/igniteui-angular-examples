import { Component, OnInit } from "@angular/core";
import { SampleScatterStats } from "./SampleScatterStats";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    public data1: any[];
    public data2: any[];

    constructor() {
        this.data1 = SampleScatterStats.getCountriesWithHighIncome();
        this.data2 = SampleScatterStats.getCountriesWithLowIncome();
    }

    ngOnInit() {
    }

}
