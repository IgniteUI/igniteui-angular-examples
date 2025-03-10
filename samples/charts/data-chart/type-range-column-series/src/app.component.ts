import { Component } from "@angular/core";
import { SampleRangeData } from "./SampleRangeData";

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public data: any[] = SampleRangeData.create();

    constructor() {
    }
}
