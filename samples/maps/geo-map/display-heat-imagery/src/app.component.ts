import { AfterViewInit, Component, ChangeDetectionStrategy, ViewChild } from "@angular/core";
import { IgxHeatTileGenerator } from "igniteui-angular-core";
import { IgxShapeDataSource } from "igniteui-angular-core";
import { IgxGeographicMapComponent } from "igniteui-angular-maps";
import { IgxGeographicTileSeriesComponent } from "igniteui-angular-maps";
import { IgxTileGeneratorMapImagery } from "igniteui-angular-maps";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {

    @ViewChild("map", { static: true })
    public map: IgxGeographicMapComponent;
    public tileImagery: IgxTileGeneratorMapImagery;

    constructor() {
        this.tileImagery = new IgxTileGeneratorMapImagery();

        const sds: IgxShapeDataSource = new IgxShapeDataSource();
        sds.importCompleted.subscribe((s, e) => {
            const data = sds.getPointData();
            const lat: number[] = [];
            const lon: number[] = [];
            const val: number[] = [];

            for (let i = 0; i < data.length; i++) {
                const item = data[i];
                for (let j = 0; j < item.points.length; j++) {
                    const pointsList = item.points[j];
                    for (let k = 0; k < pointsList.length; k++) {
                        lat.push(pointsList[k].y);
                        lon.push(pointsList[k].x);
                    }
                }
                const value = parseInt(item.fieldValues["POP2010"], 10);
                if (value >= 0) {
                    val.push(value);
                } else {
                    val.push(0);
                }
            }

            // generating heat map imagery tiles
            const gen = new IgxHeatTileGenerator();
            gen.xValues = lon;
            gen.yValues = lat;
            gen.values = val;
            gen.blurRadius = 6;
            gen.maxBlurRadius = 20;
            gen.useBlurRadiusAdjustedForZoom = true;
            gen.minimumColor = "rgba(100, 255, 0, 0.5)";
            gen.maximumColor = "rgba(255, 255, 0, 0.5)";
            gen.useGlobalMinMax = true;
            gen.useGlobalMinMaxAdjustedForZoom = true;
            gen.useLogarithmicScale = true;
            gen.useWebWorkers = true;
            // gen.webWorkerInstance = new Worker();
            // gen.webWorkerInstance = new Worker("./HeatmapWorker", { type: "module" });
            gen.webWorkerInstance = new Worker(new URL('./HeatmapWorker', import.meta.url), { type: "module" });

            gen.scaleColors = [
                "rgba(0, 0, 255, .251)", "rgba(0, 255, 255, .3765)",
                "rgba(50,205,50, .2675)", "rgba(255, 255, 0, .7059)",
                "rgba(255, 0, 0, .7843)"
            ];
            this.tileImagery.tileGenerator = gen;

            // generating heat map series
            const series = new IgxGeographicTileSeriesComponent();
            series.name = "heatMapSeries";
            series.tileImagery = this.tileImagery;

            // add heat map series to the map
            this.map.series.add(series);
        });

        sds.shapefileSource = "https://static.infragistics.com/xplatform/shapes/AmericanCities.shp";
        sds.databaseSource  = "https://static.infragistics.com/xplatform/shapes/AmericanCities.dbf";
        sds.dataBind();
    }

    public ngAfterViewInit(): void {
        this.map.zoomToGeographic({ left: -134.5, top: 16.0, width: 70.0, height: 37.0 });
    }
}
