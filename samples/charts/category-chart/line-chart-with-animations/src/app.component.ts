import { ChangeDetectionStrategy, Component, ViewChild } from "@angular/core";
import { IgxCategoryChartComponent } from "igniteui-angular-charts";

@Component({
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public transitionInMode: string = "Auto";
    public transitionInInterval: string = "1000";
    public data: any[];

    @ViewChild("chart", { static: true })
    public chart: IgxCategoryChartComponent;

    constructor() {
        this.data = this.generateData();
    }

    public onChangeAmountClicked() {
        this.data = this.generateData();
    }

    public OnTransitionIntervalChange(e: any) {
        this.transitionInInterval = e.target.value;
    }

    private generateData(): any[] {
        const data: any[] = [
            { Year: "2009", Europe: 31, China: 21, USA: 19 },
            { Year: "2010", Europe: 43, China: 26, USA: 24 },
            { Year: "2011", Europe: 66, China: 29, USA: 28 },
            { Year: "2012", Europe: 69, China: 32, USA: 26 },
            { Year: "2013", Europe: 58, China: 47, USA: 38 },
            { Year: "2014", Europe: 40, China: 46, USA: 31 },
            { Year: "2015", Europe: 78, China: 50, USA: 19 },
            { Year: "2016", Europe: 13, China: 90, USA: 52 },
            { Year: "2017", Europe: 78, China: 132, USA: 50 },
            { Year: "2018", Europe: 40, China: 134, USA: 34 },
            { Year: "2019", Europe: 80, China: 96, USA: 38 }
        ];

        return data;
    }
}
