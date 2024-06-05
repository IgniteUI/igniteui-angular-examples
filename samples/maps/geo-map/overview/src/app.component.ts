import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxGeographicMapComponent } from "igniteui-angular-maps";
import { IgRect } from "igniteui-angular-core";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})

export class AppComponent implements AfterViewInit {

    @ViewChild("map", { static: true })
    public map: IgxGeographicMapComponent;
    constructor() {
    }

    public ngAfterViewInit(): void {                
        this.map.updateZoomWindow({ left: 0.2, top: 0.1, width: 0.7, height: 0.7});
    }
}
