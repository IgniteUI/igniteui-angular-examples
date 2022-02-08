import { Component } from "@angular/core";
import { SampleRadialData } from "./SampleRadialData";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public data: any[] = SampleRadialData.create();

    constructor() {
    }
}
