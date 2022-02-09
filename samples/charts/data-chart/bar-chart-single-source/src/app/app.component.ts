import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent {

    public data = [

        { Shop: "Amazon",                      Percent: 63},
        { Shop: "Search Engines",              Percent: 48},
        { Shop: "Retailer Sites",              Percent: 33},
        { Shop: "Other Marketplaces",          Percent: 25},
        { Shop: "At the Website of the Brand", Percent: 21},
        { Shop: "Comparison Sites",            Percent: 10},
        { Shop: "Social Media",                Percent: 8 },
        { Shop: "Other",                       Percent: 2 }
    ];

    constructor() { }
}
