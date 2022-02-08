import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public data: any;

    constructor() {
        this.data = [
            { MarketShare : 30, Company : "Google" },
            { MarketShare : 25, Company : "Apple" },
            { MarketShare : 20, Company : "Microsoft" },
            { MarketShare : 15, Company : "Samsung"},
            { MarketShare : 10, Company : "Other" },
        ];
    }
}
