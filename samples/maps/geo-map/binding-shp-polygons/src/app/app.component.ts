import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxShapeDataSource } from "igniteui-angular-core";
import { IgxGeographicMapComponent } from "igniteui-angular-maps";
import { IgxGeographicShapeSeriesComponent } from "igniteui-angular-maps";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent implements AfterViewInit {

    @ViewChild("map", { static: true })
    public map: IgxGeographicMapComponent;

    @ViewChild("template", { static: true })
    public tooltipTemplate: TemplateRef<object>;

    public data: any;
    constructor() {
    }

    public ngAfterViewInit(): void {
        const sds = new IgxShapeDataSource();
        sds.importCompleted.subscribe(() => this.onDataLoaded(sds, ""));
        sds.shapefileSource = "https://static.infragistics.com/xplatform/shapes/WorldCountries.shp";
        sds.databaseSource  = "https://static.infragistics.com/xplatform/shapes/WorldCountries.dbf";
        sds.dataBind();
    }

    public onDataLoaded(sds: IgxShapeDataSource, e: any) {
        const shapeRecords = sds.getPointData();
        // console.log("loaded /Shapes/WorldCountries.shp " + shapeRecords.length);

        const geoPolygons: any[] = [];
        // parsing shapefile data and creating geo-polygons
        for (const record of shapeRecords) {
            // using field/column names from .DBF file
            const country = {
                gdp: record.fieldValues.GDP,
                name: record.fieldValues.NAME,
                points: record.points,
                population: record.fieldValues.POPULATION
            };
            geoPolygons.push(country);
        }

        const geoSeries = new IgxGeographicShapeSeriesComponent();
        geoSeries.dataSource = geoPolygons;
        geoSeries.shapeMemberPath = "points";
        geoSeries.brush = "rgba(146, 146, 146, 0.6)";
        geoSeries.outline = "Black";
        geoSeries.tooltipTemplate = this.tooltipTemplate;
        geoSeries.thickness = 1;

        this.map.series.add(geoSeries);
  }

}
