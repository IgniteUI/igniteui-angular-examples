import { AfterViewInit, Component, ElementRef, NgZone, ViewChild } from "@angular/core";
import { IgxPieChartComponent } from "igniteui-angular-charts";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements AfterViewInit {

    public data: any;

    @ViewChild("chart", { static: true })
    public chart: IgxPieChartComponent;
    public animateChart: string = "Pause Animation";
    private _refreshInterval: number = 10;
    private _interval: number = -1;
    private isTimerStarted: boolean = false;

    constructor(private _zone: NgZone) {
        this.data = [
            { MarketShare : 25, Company : "Residential" },
            { MarketShare : 12, Company : "Heating" },
            { MarketShare : 8,  Company : "Lighting" },
            { MarketShare : 18, Company : "Other" },
            { MarketShare : 37, Company : "Cooling" }
        ];
    }

    public onClicked() {
        if (!this.isTimerStarted) {
            this.animateChart = "Start Animation";
            this.isTimerStarted = true;
            window.setTimeout(() => this.tick(), 16);
        } else {
            this.isTimerStarted = false;
            this.animateChart = "Pause Animation";
        }
    }

    public get refreshInterval(): number {
        return this._refreshInterval;
    }

    public set refreshInterval(v: number) {
        this._refreshInterval = v;
        this.setupInterval();
    }

    public ngAfterViewInit(): void {
        this.setupInterval();
    }

    private setupInterval(): void {
        if (this._interval >= 0) {
            this._zone.runOutsideAngular(() => {
                window.clearInterval(this._interval);
            });
            this._interval = -1;
        }

        this._zone.runOutsideAngular(() => {
            this._interval = window.setInterval(() => this.tick(),
                this.refreshInterval);
        });
    }

    private tick(): void {

        if (!this.isTimerStarted) {

            this.chart.radiusFactor += 0.0025;
            this.chart.startAngle++;
            if (this.chart.startAngle >= 360) {
                this.chart.startAngle = 0;
            }
            if (this.chart.radiusFactor > 1.0) {
                this.chart.radiusFactor = 0.1;
            }
        }
    }

}
