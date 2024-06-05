import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
    public data: any[];
    public markersType: string;

    constructor() { }

    public ngOnInit() {
        this.markersType = "Circle";

        this.data = [
            { Year: "1996", USA: 148, China: 110, Russia: 95 },
            { Year: "2000", USA: 142, China: 115, Russia: 91 },
            { Year: "2004", USA: 134, China: 121, Russia: 86 },
            { Year: "2008", USA: 131, China: 129, Russia: 65 },
            { Year: "2012", USA: 135, China: 115, Russia: 77 },
            { Year: "2016", USA: 146, China: 112, Russia: 88 }
        ];
    }

    public onMarkerTypeChanged(e: any) {
        this.markersType = e.target.value.toString();
    }
}
