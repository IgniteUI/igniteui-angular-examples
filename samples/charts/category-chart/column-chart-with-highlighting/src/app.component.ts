import { Component, AfterViewInit, ViewChild } from "@angular/core";
import { IgxCategoryChartComponent } from "igniteui-angular-charts";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements AfterViewInit {

    @ViewChild("chart", { static: true })
    public chart: IgxCategoryChartComponent;

    public isItemHighlightingEnabled: boolean = false;
    public isSeriesHighlightingEnabled: boolean = true;
    public isCategoryHighlightingEnabled: boolean = false;
    public highlightMode: string = "Auto";
    public highlightBehavior: string = "Auto";
    public legendHighlightMode: string = "Auto";
    public excludedProperties: any;

    public data = [
        { Month: "JAN", NewYork : 10.6, LosAngeles : 28.3 },
        { Month: "FEB", NewYork : 7.8,  LosAngeles : 31.1 },
        { Month: "MAR", NewYork : 12.2, LosAngeles : 27.8 },
        { Month: "APR", NewYork : 11.7, LosAngeles : 33.9 },
        { Month: "MAY", NewYork : 19.4, LosAngeles : 35.0 },
        { Month: "JUN", NewYork : 23.3, LosAngeles : 36.7 },
        { Month: "JUL", NewYork : 27.2, LosAngeles : 33.3 },
        { Month: "AUG", NewYork : 25.6, LosAngeles : 36.7 },
        { Month: "SEP", NewYork : 22.8, LosAngeles : 43.9 },
        { Month: "OCT", NewYork : 17.8, LosAngeles : 38.3 },
        { Month: "NOV", NewYork : 17.8, LosAngeles : 32.8 },
        { Month: "DEC", NewYork : 8.3,  LosAngeles : 28.9 }
    ];

    public OnEnableHighlightingChange = (e : any) => {

        const value = e.target.value;

        if(value=="Series"){
            this.isItemHighlightingEnabled = false;
            this.isSeriesHighlightingEnabled = true;
            this.isCategoryHighlightingEnabled = false;
        }
         else if(value == "Item") {
            this.isItemHighlightingEnabled = true;
            this.isSeriesHighlightingEnabled = false;
            this.isCategoryHighlightingEnabled = false;
        }
         else if(value == "Category") {
            this.isItemHighlightingEnabled = false;
            this.isSeriesHighlightingEnabled = false;
            this.isCategoryHighlightingEnabled = true;
        }
         else if(value=="None") {
            this.isItemHighlightingEnabled = false;
            this.isSeriesHighlightingEnabled = false;
            this.isCategoryHighlightingEnabled = false;
        }
    }

    public ngAfterViewInit(): void {
    }

    constructor() { }
}
