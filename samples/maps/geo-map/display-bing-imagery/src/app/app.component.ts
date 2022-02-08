import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { BingMapsImageryStyle } from "igniteui-angular-maps";
import { IgxBingMapsMapImagery } from "igniteui-angular-maps";
import { IgxGeographicMapComponent } from "igniteui-angular-maps";
import { MapUtility } from "./MapUtility";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})

export class AppComponent {

    @ViewChild("map", {static: true})
    public map: IgxGeographicMapComponent;

    constructor() {
    }

    public ngAfterViewInit(): void {
        const tileSource = new IgxBingMapsMapImagery();
        tileSource.apiKey = MapUtility.getBingKey();
        tileSource.imageryStyle = BingMapsImageryStyle.AerialWithLabels;
        let tileUri = tileSource.actualBingImageryRestUri;

        // resolving BingMaps uri based on HTTP protocol of hosting website
        const isHttpSecured = window.location.toString().startsWith("https:");
        if (isHttpSecured) {
            tileUri = tileUri.replace("http:", "https:");
        } else {
            tileUri = tileUri.replace("https:", "http:");
        }
        tileSource.bingImageryRestUri = tileUri;

        this.map.backgroundContent = tileSource;

        this.map.windowRect = { left: 0.2, top: 0.1, width: 0.7, height: 0.7 };
    }
}
