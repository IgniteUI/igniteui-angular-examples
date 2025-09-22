import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { AzureMapsImageryStyle, GeographicMapImagery, IgxGeographicMapImagery } from "igniteui-angular-maps";
import { IgxAzureMapsImagery } from "igniteui-angular-maps";
import { IgxGeographicMapComponent } from "igniteui-angular-maps";
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
    @ViewChild("map2", { static: true })
    public map2: IgxGeographicMapComponent;
    public apiKey: string;
    @ViewChild("form", { static: true })
    public form!: IgxDialogComponent;

    showMap = false;      // Controls visibility of maps
    showImages = true;    // Controls visibility of images

    public applyApiKey(key: string) {
        if (!key) return;
        this.apiKey = key;
        
        // Wait for the next tick to ensure the map is in the DOM
        setTimeout(() => {
          if (this.map && this.map2) {
            const azureImagery = new IgxAzureMapsImagery();
            azureImagery.apiKey = this.apiKey;
            azureImagery.imageryStyle = AzureMapsImageryStyle.Satellite;
            this.map.backgroundContent = azureImagery;

            const azureImagery2 = new IgxAzureMapsImagery();
            azureImagery2.apiKey = this.apiKey;
            azureImagery2.imageryStyle = AzureMapsImageryStyle.Road;
            this.map2.backgroundContent = azureImagery2;
          }
        });
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
