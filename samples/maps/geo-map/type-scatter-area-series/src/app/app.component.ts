import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxCustomPaletteColorScaleComponent } from "igniteui-angular-charts";
import { IgxShapeDataSource } from "igniteui-angular-core";
import { IgxGeographicMapComponent } from "igniteui-angular-maps";
import { IgxGeographicScatterAreaSeriesComponent } from "igniteui-angular-maps";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent {

    @ViewChild("map", {static: true})
    public map: IgxGeographicMapComponent;
    @ViewChild("template", {static: true})
    public tooltipTemplate: TemplateRef<object>;
    constructor() {
    }

    public ngAfterViewInit(): void {
        const sds = new IgxShapeDataSource();
        sds.importCompleted.subscribe(() => this.onDataLoaded(sds, ""));
        sds.shapefileSource = "https://static.infragistics.com/xplatform/shapes/WorldTemperatures.shp";
        sds.databaseSource  = "https://static.infragistics.com/xplatform/shapes/WorldTemperatures.dbf";
        sds.dataBind();
    }

    public onDataLoaded(sds: IgxShapeDataSource, e: any) {
        const shapeRecords = sds.getPointData();
        console.log("loaded contour shapes: " + shapeRecords.length + " from /Shapes/WorldTemperatures.shp");

        const contourPoints: any[] = [];
        for (const record of shapeRecords) {
            const temp = record.fieldValues.Contour;
            // using only major contours (every 10th degrees Celsius)
            if (temp % 10 === 0 && temp >= 0) {
                for (const shapes of record.points) {
                    for (let i = 0; i < shapes.length; i++) {
                    if (i % 5 === 0) {
                        const p = shapes[i];
                        const item = { lon: p.x, lat: p.y, value: temp};
                        contourPoints.push(item);
                    }
                    }
                }
            }
        }

        console.log("loaded contour points: " + contourPoints.length);
        this.createContourSeries(contourPoints);
    }

    public createContourSeries(data: any[]) {
        const brushes = [
            "rgba(32, 146, 252, 0.5)", // semi-transparent blue
            "rgba(14, 194, 14, 0.5)",  // semi-transparent green
            "rgba(252, 120, 32, 0.5)", // semi-transparent orange
            "rgba(252, 32, 32, 0.5)"  // semi-transparent red
        ];

        const colorScale = new IgxCustomPaletteColorScaleComponent();
        colorScale.palette = brushes;
        colorScale.minimumValue = 0;
        colorScale.maximumValue = 30;

        const areaSeries = new IgxGeographicScatterAreaSeriesComponent();
        areaSeries.dataSource = data;
        areaSeries.longitudeMemberPath = "lon";
        areaSeries.latitudeMemberPath = "lat";
        areaSeries.colorMemberPath = "value";
        areaSeries.colorScale = colorScale;
        areaSeries.tooltipTemplate = this.tooltipTemplate;
        areaSeries.thickness = 4;

        this.map.series.add(areaSeries);
    }
}
