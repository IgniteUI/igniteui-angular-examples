import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FinancialChartCustomIndicatorArgs } from "igniteui-angular-charts";
import { IgxFinancialEventArgs } from "igniteui-angular-charts";
import { FinancialDataService } from "./FinancialDataService";

@Component({
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [FinancialDataService],
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {
    public data: any;

    constructor(private dataService: FinancialDataService) {
        this.data = this.dataService.getGoog();
    }

    public applyCustomIndicators(event: { sender: any, args: FinancialChartCustomIndicatorArgs }) {
        if (event.args.index === 0) {
            const info: IgxFinancialEventArgs = event.args.indicatorInfo;

            if (info != null) {
                const ds = info.dataSource;
                const open = ds.openColumn;
                for (let i = 0; i < ds.indicatorColumn.length; i++) {
                    ds.indicatorColumn[i] = open[i];
                }
            }
        } else {
            const info: IgxFinancialEventArgs = event.args.indicatorInfo;

            if (info != null) {
                const ds = info.dataSource;
                const close = ds.closeColumn;
                for (let i = 0; i < ds.indicatorColumn.length; i++) {
                    let startIndex = i - 9;
                    if (startIndex < 0) {
                        startIndex = 0;
                    }
                    const count = (i - startIndex) + 1;

                    let sum = 0;
                    for (let j = startIndex; j <= i; j++) {
                        sum += close[j];
                    }
                    ds.indicatorColumn[i] = sum / count;
                }
            }
        }
    }
}
