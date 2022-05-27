import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public data: any[];
    public xAxisGapValue: number = 1;
    public xAxisMaximumGap: number = 1.5;

    constructor() {
        this.initData();
    }

    public initData() {
        this.data = [
            { Month: "JAN", Temperature: 3 },
            { Month: "FEB", Temperature: 4 },
            { Month: "MAR", Temperature: 9 },
            { Month: "APR", Temperature: 15 },
            { Month: "MAY", Temperature: 21 },
            { Month: "JUN", Temperature: 26 },
            { Month: "JUL", Temperature: 29 },
            { Month: "AUG", Temperature: 28 },
            { Month: "SEP", Temperature: 24 },
            { Month: "OCT", Temperature: 18 },
            { Month: "NOV", Temperature: 11 },
            { Month: "DEC", Temperature: 5 }
        ];
    }

    public OnXAxisGapSliderChange(e: any) {
        const value = e.target.value;
        this.xAxisGapValue = Number.parseFloat(value);
    }
}