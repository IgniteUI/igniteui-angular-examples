import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FinancialDataService, StockSeries } from "./FinancialDataService";

@Component({
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {
    public data: StockSeries[];
    constructor(dataService: FinancialDataService) {
        this.data = dataService.getMultiple();
    }
}
