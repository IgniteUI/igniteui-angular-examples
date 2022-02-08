import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxShapeDataSource } from "igniteui-angular-core";
import { IgxGeographicMapComponent } from "igniteui-angular-maps";
import { IgxGeographicPolylineSeriesComponent } from "igniteui-angular-maps";
import { IgxGeographicShapeSeriesComponent } from "igniteui-angular-maps";
import { IgxGeographicSymbolSeriesComponent } from "igniteui-angular-maps";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})

export class AppComponent {

    @ViewChild("map", {static: true})
    public map: IgxGeographicMapComponent;

    @ViewChild("shapeSeries", {static: true})
    public shapeSeries: IgxGeographicShapeSeriesComponent;

    @ViewChild("polylineSeries", {static: true})
    public polylineSeries: IgxGeographicPolylineSeriesComponent;

    @ViewChild("symbolSeries", {static: true})
    public symbolSeries: IgxGeographicSymbolSeriesComponent;

    @ViewChild("polylineTooltip", {static: true})
    public polylineTooltip: TemplateRef<object>;

    @ViewChild("shapeTooltip", {static: true})
    public shapeTooltip: TemplateRef<object>;

    @ViewChild("pointTooltip", {static: true})
    public pointTooltip: TemplateRef<object>;

    constructor() {
    }

    public ngAfterViewInit(): void {

        this.map.windowRect = { left: 0.2, top: 0.1, width: 0.6, height: 0.6 };
        this.map.backgroundContent = null;

        // loading a shapefile with geographic polygons
        const sdsPolygons = new IgxShapeDataSource();
        sdsPolygons.importCompleted.subscribe(() => this.onPolygonsLoaded(sdsPolygons, ""));
        sdsPolygons.shapefileSource = "https://static.infragistics.com/xplatform/shapes/WorldCountries.shp";
        sdsPolygons.databaseSource  = "https://static.infragistics.com/xplatform/shapes/WorldCountries.dbf";
        sdsPolygons.dataBind();
        // loading a shapefile with geographic polylines at runtime.
        const sdsPolylines = new IgxShapeDataSource();
        sdsPolylines.shapefileSource = "https://static.infragistics.com/xplatform/shapes/WorldCableRoutes.shp";
        sdsPolylines.databaseSource  = "https://static.infragistics.com/xplatform/shapes/WorldCableRoutes.dbf";
        sdsPolylines.dataBind();
        sdsPolylines.importCompleted.subscribe(() => this.onPolylinesLoaded(sdsPolylines, ""));
        // loading a shapefile with geographic points
        const sdsPoints = new IgxShapeDataSource();
        sdsPoints.importCompleted.subscribe(() => this.onPointsLoaded(sdsPoints, ""));
        sdsPoints.shapefileSource = "https://static.infragistics.com/xplatform/shapes/WorldCities.shp";
        sdsPoints.databaseSource  = "https://static.infragistics.com/xplatform/shapes/WorldCities.dbf";
        sdsPoints.dataBind();
    }

    public onPointsLoaded(sds: IgxShapeDataSource, e: any) {

        const geoLocations: any[] = [];
        // parsing shapefile data and creating geo-locations
        for (const record of sds.getPointData()) {
            const pop = record.fieldValues.POPULATION;
            if (pop > 1000000) {
                // each shapefile record has just one point
                const location = {
                    city: record.fieldValues.NAME,
                    latitude: record.points[0][0].y,
                    longitude: record.points[0][0].x,
                    population: (pop / 1000000).toFixed(0) + "M"
                };
                geoLocations.push(location);
            }
        }
        this.symbolSeries.dataSource = geoLocations;
        this.symbolSeries.markerOutline = "Red";
        this.symbolSeries.markerBrush = "White";
        this.symbolSeries.tooltipTemplate = this.pointTooltip;
    }

    public onPolylinesLoaded(sds: IgxShapeDataSource, e: any) {

        const geoPolylines: any[] = [];
        // parsing shapefile data and creating geo-polygons
        for (const record of sds.getPointData()) {
            // using field/column names from .DBF file
            const route = {
                capacity: record.fieldValues.CapacityG,
                distance: record.fieldValues.DistanceKM,
                name: record.fieldValues.Name,
                points: record.points
            };
            geoPolylines.push(route);
        }
        this.polylineSeries.shapeMemberPath = "points";
        this.polylineSeries.shapeFilterResolution = 2.0;
        this.polylineSeries.shapeStrokeThickness = 2;
        this.polylineSeries.shapeStroke = "rgba(13, 124, 252, 0.9)";
        this.polylineSeries.tooltipTemplate = this.polylineTooltip;
        this.polylineSeries.dataSource = geoPolylines;
    }

    public onPolygonsLoaded(sds: IgxShapeDataSource, e: any) {

        const geoPolygons: any[] = [];
        // parsing shapefile data and creating geo-polygons
        sds.getPointData().forEach((record) => {
            // using field/column names from .DBF file
            const pop = record.fieldValues.POPULATION;
            const country = {
                gdp: record.fieldValues.GDP,
                name: record.fieldValues.NAME,
                points: record.points,
                population: (pop / 1000000).toFixed(1) + "M"
            };
            geoPolygons.push(country);
        });
        this.shapeSeries.dataSource = geoPolygons;
        this.shapeSeries.shapeStroke = "Black";
        this.shapeSeries.shapeFill = "rgba(184, 183, 183, 0.5)";
        this.shapeSeries.tooltipTemplate = this.shapeTooltip;
    }
}
