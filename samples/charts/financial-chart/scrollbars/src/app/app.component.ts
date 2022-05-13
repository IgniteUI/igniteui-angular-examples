import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from "@angular/core";
import { StockIndexDataService } from "./StockIndexDataService";
import { IgxFinancialChartComponent } from "igniteui-angular-charts";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ StockIndexDataService ],
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements AfterViewInit {

    public stocksData: any;
    @ViewChild("chart", { static: true })
    public chart: IgxFinancialChartComponent;

    constructor(private dataService: StockIndexDataService) {
        this.stocksData = [
            this.dataService.getData()
        ];
    }

    public ngAfterViewInit(): void {
        this.chart.windowRect = { left: 1, top: 1, width: 0.90, height: 0.90};
    }
}
