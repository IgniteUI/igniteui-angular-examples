import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent {

    public data: any[];

    constructor() {
        this.initData();
    }

    public initData() {
        this.data = [
            { Year: "1950", Asia: 62, Africa: 13, Europe: 10, NorthAmerica: 8, Oceania: 2 },
            { Year: "1960", Asia: 68, Africa: 12, Europe: 15, NorthAmerica: 9, Oceania: 2 },
            { Year: "1970", Asia: 80, Africa: 17, Europe: 11, NorthAmerica: 9, Oceania: 2 },
            { Year: "1980", Asia: 77, Africa: 21, Europe: 12, NorthAmerica: 10, Oceania: 2 },
            { Year: "1990", Asia: 87, Africa: 24, Europe: 9, NorthAmerica: 10, Oceania: 2 },
            { Year: "2000", Asia: 79, Africa: 28, Europe: 8, NorthAmerica: 9, Oceania: 2 },
            { Year: "2010", Asia: 78, Africa: 35, Europe: 10, NorthAmerica: 8, Oceania: 2 },
            { Year: "2020", Asia: 75, Africa: 43, Europe: 7, NorthAmerica: 7, Oceania: 2 }
        ];
    }
}
