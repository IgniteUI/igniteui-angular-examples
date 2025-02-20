import { AfterViewInit, Component, TemplateRef, ViewChild, ChangeDetectorRef } from "@angular/core";
import { IgxArcGISOnlineMapImagery  } from "igniteui-angular-maps";
import { IgxGeographicMapComponent } from "igniteui-angular-maps";
import { MapUtility, MapRegion } from "./MapUtility";
import { IgxRectChangedEventArgs } from "igniteui-angular-core";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})

export class AppComponent implements AfterViewInit {

    public isRunning: boolean;
    public regionType: string = "United States";
    @ViewChild("map", { static: true })
    public geoMap: IgxGeographicMapComponent;
    @ViewChild("template", { static: true })
    public tooltip: TemplateRef<object>;

    public geoRect: any;
    public geoT: string;
    public geoL: string;
    public geoH: string;
    public geoW: string;

    public winT: string;
    public winL: string;
    public winH: string;
    public winW: string;

    public posHorizontal: number;
    public posVertical: number;
    public scale: number;
    public mapHoverLongitude: string = "0.0°W";
    public mapHoverLatitude: string = "0.0°S";
    public mapHoverX: string = "0.0000";
    public mapHoverY: string = "0.0000";
    public mapHoverPixelX = "0 px";
    public mapHoverPixelY = "0 px";
    public navigationOptions: Element[] = [];
    public navigationRegions: any = {};

    constructor(private ref: ChangeDetectorRef) {

        const regions =  MapUtility.getRegions();
        for (const key in regions) {
            if (regions.hasOwnProperty(key)) {
                const region = regions[key];
                const name = region.name;
                this.navigationRegions[name] = region;
            }
        }
    }

    public ngAfterViewInit(): void {
        this.componentDidMount();

        if (this.geoMap !== undefined) {
            // console.log("ngAfterViewInit map");
            this.geoMap.actualWindowRectChanged.subscribe((e: IgxRectChangedEventArgs) =>
                this.onMapWindowRectChanged(this.geoMap, e)
            );

            this.geoMap.zoomToGeographic({ left: -134.5, top: 16.5, width: 70.0, height: 37.0 });

         
        }
    }

    public onMapWindowRectChanged(geoMap: IgxGeographicMapComponent, e: any) {

        // converting window rect to geographic rect/region:
        const geoRect: any = geoMap.getGeographicFromZoom(e.args.newRect);
        geoRect.bottom = geoRect.top + geoRect.height;
        geoRect.right = geoRect.left + geoRect.width;
        // calculating center of geographic region
        geoRect.longitude = geoRect.left + (geoRect.width / 2);
        geoRect.latitude = geoRect.top + (geoRect.height / 2);
        this.geoRect = geoRect;

        const h = geoMap.actualWindowPositionHorizontal
        const v = geoMap.actualWindowPositionVertical;
        const s = geoMap.actualWindowScale;

        this.geoT = "T: " + MapUtility.toLat(this.geoRect.top);
        this.geoL = "L: " + MapUtility.toLng(this.geoRect.left);
        this.geoH = "H: " + MapUtility.toLng(this.geoRect.height);
        this.geoW = "W: " + MapUtility.toLng(this.geoRect.width);

        this.winT = "T: " + e.args.newRect.top.toFixed(4);
        this.winL = "L: " + e.args.newRect.left.toFixed(4);
        this.winH = "H: " + e.args.newRect.height.toFixed(4);
        this.winW = "W: " + e.args.newRect.width.toFixed(4);

        this.posHorizontal = parseFloat(h.toFixed(4));
        this.posVertical = parseFloat(v.toFixed(4));
        this.scale = parseFloat(s.toFixed(4));

        this.ref.detectChanges();
    }

    public onMapMouseMove = (e: any) => {

        const bounds = e.target.getBoundingClientRect();
        const relativeCoordinate = {
            x: e.clientX - bounds.left,
            y: e.clientY - bounds.top
        };

        const windowCoordinate = {
            x: (e.clientX - bounds.left) / bounds.width,
            y: (e.clientY - bounds.top) / bounds.height
        };

        // converting mouse pixel coordinate to geographic coordinate:
        const geoCoordinate: any = this.geoMap.getGeographicPoint(relativeCoordinate);

        this.mapHoverLongitude = MapUtility.toLng(geoCoordinate.x);
        this.mapHoverLatitude = MapUtility.toLat(geoCoordinate.y);
        this.mapHoverX = windowCoordinate.x.toFixed(4);
        this.mapHoverY = windowCoordinate.y.toFixed(4);
        this.mapHoverPixelX = MapUtility.toPixel(relativeCoordinate.x);
        this.mapHoverPixelY = MapUtility.toPixel(relativeCoordinate.y);

        this.ref.detectChanges();
    }

    public componentDidMount() {
        const elem = document.getElementById('map');
        elem.addEventListener('mousemove', this.onMapMouseMove, false);
    }

    public onSelectionChanged = (e: any) => {
        if (this.geoMap === undefined) return;

        const name = e.target.value.toString();
        const region = this.navigationRegions[name];

        this.geoMap.zoomToGeographic(region);
    }
}
