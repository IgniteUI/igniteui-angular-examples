import { ChangeDetectionStrategy, Component } from "@angular/core";
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
    public trendlineType = "CubicFit";

    constructor(private dataService: FinancialDataService) {
        this.data = [this.dataService.getMsft()];
    }

    public OnTrendlineTypeChanged(e: any) {
        this.trendlineType = e.target.value;
    }
}
