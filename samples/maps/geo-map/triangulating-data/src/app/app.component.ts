import { ChangeDetectionStrategy, Component, ViewChild, AfterViewInit } from "@angular/core";
import { ColorScaleInterpolationMode } from "igniteui-angular-charts";
import { IgxCustomPaletteColorScaleComponent } from "igniteui-angular-charts";
import { IgxGeographicMapComponent } from "igniteui-angular-maps";
import { IgxGeographicScatterAreaSeriesComponent } from "igniteui-angular-maps";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements AfterViewInit {

    @ViewChild("map", { static: true })
    public geoMap: IgxGeographicMapComponent;

    constructor() {
    }

    public ngAfterViewInit(): void {

        const brushes = [
            "green",
            "yellow",
            "orange",
            "red"
        ];

        const colorScale: IgxCustomPaletteColorScaleComponent = new IgxCustomPaletteColorScaleComponent();
        colorScale.palette = brushes;
        colorScale.minimumValue = 0.05;
        colorScale.interpolationMode = ColorScaleInterpolationMode.InterpolateRGB;

        const geoSeries = new IgxGeographicScatterAreaSeriesComponent();
        geoSeries.colorScale = colorScale;
        geoSeries.opacity = 0.75;
        geoSeries.triangulationDataSource = "https://static.infragistics.com/xplatform/shapes/weather/nws_precip_2011091820.itf";
        geoSeries.triangleVertexMemberPath1 = "v1";
        geoSeries.triangleVertexMemberPath1 = "v2";
        geoSeries.triangleVertexMemberPath1 = "v3";

        this.geoMap.series.add(geoSeries);

        const geoBounds = {
            left: -115,
            top: 25,
            width: 40,
            height: 20
        };

        this.geoMap.zoomToGeographic(geoBounds);
    }
}
