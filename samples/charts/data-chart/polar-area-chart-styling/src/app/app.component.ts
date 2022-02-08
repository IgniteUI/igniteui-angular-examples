import { Component } from "@angular/core";
import { SamplePolarData } from "./SamplePolarData";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent {

    public data: any[] = SamplePolarData.create();

    constructor() {
    }
}
