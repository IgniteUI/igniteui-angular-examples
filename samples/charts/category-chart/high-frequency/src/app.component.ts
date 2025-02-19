import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, OnDestroy, ViewChild } from "@angular/core";
import { IgxCategoryChartComponent } from "igniteui-angular-charts";

@Component({
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements AfterViewInit, OnDestroy {

    public data: any[];

    @ViewChild("chart", { static: true })
    public chart: IgxCategoryChartComponent;

    private currValue: number = 15;
    private currIndex: number = 0;

    private shouldTick: boolean = true;
    private _timerStatusText: string = "Stop";

    private _maxPoints: number = 5000;

    private _refreshInterval: number = 10;
    private _interval: number = -1;
    private _frames: number = 0;
    private _time: Date;

    constructor(private _zone: NgZone) {
        this.data = this.generateData();
    }

    public onChangeAmountClicked() {
        this.data = this.generateData();
    }

    public onTimerStartStopClick() {
        if (this.shouldTick) {
            this.shouldTick = false;
            this._timerStatusText = "Start";
        }
        else {
            this.shouldTick = true;
            this._timerStatusText = "Stop";
        }
    }

    public onRefreshFrequencyChanged(e: any) {
        let num: number = parseInt(e.target.value, 10);

        if (isNaN(num)) {
            num = 10;
        }
        if (num < 10) {
            num = 10;
        }
        if (num > 1000) {
            num = 1000;
        }
        this._refreshInterval = num;
        this.setupInterval();
    }

    public onMaxPointsChanged(e: any) {
        let num: number = parseInt(e.target.value, 10);

        if (isNaN(num)) {
            num = 1000;
        }
        if (num < 1000) {
            num = 1000;
        }
        if (num > 1000000) {
            num = 1000000;
        }
        this._maxPoints = num;
    }

    public get maxPointsText(): string {
        return this.toShortString(this._maxPoints);
    }

    public get maxPoints(): number {
        return this._maxPoints;
    }

    @Input()
    public set maxPoints(v: number) {
        this._maxPoints = v;
    }

    public get refreshInterval(): number {
        return this._refreshInterval;
    }

    @Input()
    public set refreshInterval(v: number) {
        this._refreshInterval = v;
        this.setupInterval();
    }

    public get refreshIntervalText(): string {
        return (this._refreshInterval / 1000).toFixed(3) + "s";
    }

    public get timerStatusText() {
        return this._timerStatusText;
    }

    @Input()
    public set timerStatusText(v: string) {
        this._timerStatusText = v;
    }

    public ngOnDestroy(): void {
        if (this._interval >= 0) {
            this._zone.runOutsideAngular(() => {
                window.clearInterval(this._interval);
            });
            this._interval = -1;
        }
    }

    public ngAfterViewInit(): void {
        this._time = new Date();
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

    private generateData(): any[] {
        const data: any[] = [];
        for (this.currIndex = 0; this.currIndex < this.maxPoints; this.currIndex++) {
            this.currValue += Math.random() * 4.0 - 2.0;
            data.push({ Label: this.currIndex.toString(), Value: this.currValue });
        }
        return data;
    }


    private tick(): void {

        if (this.shouldTick) {

            this.currValue += Math.random() * 4.0 - 2.0;
            this.currIndex++;
            const newVal = { Label: this.currIndex.toString(), Value: this.currValue };

            const oldVal = this.data[0];
            this.data.push(newVal);
            this.chart.notifyInsertItem(this.data, this.data.length - 1, newVal);
            this.data.shift();
            this.chart.notifyRemoveItem(this.data, 0, oldVal);

            this._frames++;
            const currTime = new Date();
            const elapsed = (currTime.getTime() - this._time.getTime());
            if (elapsed > 5000) {
                const fps = this._frames / (elapsed / 1000.0);
                this._time = currTime;
                this._frames = 0;
            }
        }
    }

    private toShortString(largeValue: number): string {
        let roundValue: string;

        if (largeValue >= 1000000) {
            roundValue = (largeValue / 1000000).toFixed(1);
            return roundValue + "m";
        }
        if (largeValue >= 1000) {
            roundValue = (largeValue / 1000).toFixed(0);
            return roundValue + "k";
        }

        roundValue = largeValue.toFixed(0);
        return roundValue + "";
    }
}
