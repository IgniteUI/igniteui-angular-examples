import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxArcGISOnlineMapImagery } from "igniteui-angular-maps";
import { IgxGeographicMapComponent } from "igniteui-angular-maps";
import { EsriStyle, EsriUtility } from "./EsriUtility";

@Component({
  standalone: false,
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
        const tileSource = new IgxArcGISOnlineMapImagery();
        tileSource.mapServerUri = EsriUtility.getUri(EsriStyle.WorldOceansMap);
        // or
        // tileSource.mapServerUri = "https://services.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer";
        this.map.backgroundContent = tileSource;
        
        this.map.updateZoomWindow({ left: 0.2, top: 0.1, width: 0.7, height: 0.7});
    }
}
