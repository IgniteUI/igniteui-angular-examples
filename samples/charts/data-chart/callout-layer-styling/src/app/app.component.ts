import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public data: any[];
    public calloutDataSource : any[];

    constructor() { }

    ngOnInit(): void {
        this.data = [
            { Year: "2009", USA: 19 },
            { Year: "2010", USA: 24 },
            { Year: "2011", USA: 28 },
            { Year: "2012", USA: 26 },
            { Year: "2013", USA: 38 },
            { Year: "2014", USA: 31 },
            { Year: "2015", USA: 19 },
            { Year: "2016", USA: 52 },
            { Year: "2017", USA: 50 },
            { Year: "2018", USA: 34 },
            { Year: "2019", USA: 38 }
        ];

        this.calloutDataSource = [];

        for(let i=0; i<this.data.length; i++){
            const item = this.data[i];
            this.calloutDataSource.push({ Index: i, Value: item.USA, Label: item.USA + " TWh" });
        }
    }
}
