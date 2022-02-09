import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent {

    public data = [

        { Franchise: "Marvel Universe All Films", TotalWorldBoxOfficeRevenue: 22.55, HighestGrossingMovieInSeries: 2.8 },
        { Franchise: "Star Wars",                 TotalWorldBoxOfficeRevenue: 10.32, HighestGrossingMovieInSeries: 2.07},
        { Franchise: "Harry Potter",              TotalWorldBoxOfficeRevenue: 9.19,  HighestGrossingMovieInSeries: 1.34},
        { Franchise: "Avengers",                  TotalWorldBoxOfficeRevenue: 7.76,  HighestGrossingMovieInSeries: 2.8 },
        { Franchise: "Spider Man",                TotalWorldBoxOfficeRevenue: 7.22,  HighestGrossingMovieInSeries: 1.28},
        { Franchise: "James Bond",                TotalWorldBoxOfficeRevenue: 7.12,  HighestGrossingMovieInSeries: 1.11}
    ];

    constructor() { }
}
