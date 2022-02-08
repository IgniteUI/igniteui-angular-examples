import { AfterViewInit, Component, ElementRef, NgZone, ViewChild } from "@angular/core";
import { IgxDoughnutChartComponent, IgxRingSeriesComponent } from "igniteui-angular-charts";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public data: any;
    @ViewChild("chart", { static: true })

    public chart: IgxDoughnutChartComponent;
    public series1: IgxRingSeriesComponent;

    public animateChart: string = "Pause Animation";
    private _refreshInterval: number = 10;
    private _interval: number = -1;
    private isTimerStarted: boolean = false;

    constructor(private _zone: NgZone) {
        this.data = [
            { Label: "Administration", Value: 2 },
            { Label: "Sales", Value: 8 },
            { Label: "IT", Value: 3 },
            { Label: "Marketing", Value: 8 },
            { Label: "Development", Value: 4 },
            { Label: "Customer Support", Value: 6 }
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
        this.series1 = this.chart.actualSeries[0] as IgxRingSeriesComponent;
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
            this.series1.radiusFactor += 0.0025;
            this.series1.startAngle++;
            if (this.series1.startAngle >= 360) {
                this.series1.startAngle = 0;
            }
            if (this.series1.radiusFactor > 1.0) {
                this.series1.radiusFactor = 0.1;
            }
        }
    }
}
