import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { AzureMapsImageryStyle } from "igniteui-angular-maps";
import { IgxAzureMapsMapImagery } from "igniteui-angular-maps";
import { IgxGeographicMapComponent } from "igniteui-angular-maps";
import { MapUtility } from "./MapUtility";
import { IgxDialogComponent } from "igniteui-angular";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})

export class AppComponent implements AfterViewInit {

    @ViewChild("map", { static: true })
    public map: IgxGeographicMapComponent;
    public map2: IgxGeographicMapComponent;
    public apiKey: string;
    public form!: IgxDialogComponent;

    public applyApiKey(key: string) {
        if (!key) return;
        this.apiKey = key;

        const azureImagery = new IgxAzureMapsMapImagery();
        azureImagery.apiKey = key;
        azureImagery.imageryStyle = AzureMapsImageryStyle.Imagery;
        this.map.backgroundContent = azureImagery;

        const azureImagery2 = new IgxAzureMapsMapImagery();
        azureImagery2.apiKey = key;
        azureImagery2.imageryStyle = AzureMapsImageryStyle.Road;
        this.map2.backgroundContent = azureImagery2;
    }

    constructor() {
    }

    public ngAfterViewInit(): void {
      setTimeout(() => {
        if (this.form) {
          this.form.open();
        }
      });
    }
    
}
