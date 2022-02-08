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
            {Location: "China", Year: 2019, Hydro: 1269.67, Solar: 223.80, Wind: 405.70, Other: 102.83 },
            {Location: "Europe", Year: 2019, Hydro: 632.54, Solar: 154.66, Wind: 461.59, Other: 220.34 },
            {Location: "United States", Year: 2019, Hydro: 271.16, Solar: 108.36, Wind: 303.10, Other: 78.34 },
            {Location: "Brazil", Year: 2019, Hydro: 399.30, Solar: 5.56, Wind: 55.83, Other: 56.25 },
            {Location: "Canadas", Year: 2019, Hydro: 381.98, Solar: 4.31, Wind: 34.17, Other: 10.81 }
        ];
    }

}
