import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxStyleShapeEventArgs } from "igniteui-angular-charts";
import { IgxScatterPolylineSeriesComponent } from "igniteui-angular-charts";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent implements AfterViewInit {

    @ViewChild('airplaneShapeSeries', { static: true })
    public airplaneShapeSeries: IgxScatterPolylineSeriesComponent;

    @ViewChild('airplaneSeatSeries', { static: true })
    public airplaneSeatSeries: IgxScatterPolylineSeriesComponent;

    @ViewChild('seatTooltip', { static: true })
    public seatTooltip: TemplateRef<object>;

    constructor() {
    }

    public ngAfterViewInit() {

      fetch('https://static.infragistics.com/xplatform/json/airplane-shape.json')
        .then((response) => response.json())
        .then((data) => this.onLoadedJsonShape(data));

      fetch('https://static.infragistics.com/xplatform/json/airplane-seats.json')
        .then((response) => response.json())
        .then((data) => this.onLoadedJsonSeats(data));
    }

    public onLoadedJsonShape(jsonData: any[]) {
        // console.log('airplane-shape.json ' + jsonData.length);
        this.airplaneShapeSeries.dataSource = jsonData;
    }

    public onLoadedJsonSeats(jsonData: any[]) {
      // console.log('airplane-seats.json ' + jsonData.length);
      this.airplaneSeatSeries.dataSource = jsonData;
      this.airplaneSeatSeries.showDefaultTooltip = true;
      this.airplaneSeatSeries.tooltipTemplate = this.seatTooltip;
    }

    public onStylingShape(ev: { sender: any, args: IgxStyleShapeEventArgs }) {

        ev.args.shapeOpacity = 1.0;
        ev.args.shapeStrokeThickness = 1.0;
        ev.args.shapeStroke = 'Black';

        const itemRecord = ev.args.item as any;
        if (itemRecord.class === 'First') {
            ev.args.shapeStroke = 'DodgerBlue';
        }
        if (itemRecord.class === 'Business') {
            ev.args.shapeStroke = 'LimeGreen';
        }
        if (itemRecord.class === 'Premium') {
            ev.args.shapeStroke = 'Orange';
        }
        if (itemRecord.class === 'Economy') {
          ev.args.shapeStroke = 'Red';
        }

        if (itemRecord.status === 'Sold') {
          ev.args.shapeFill = 'Gray';
        }
    }
}
