import { ChangeDetectionStrategy, Component } from "@angular/core";
import { StockDataService } from "./StockDataService";

@Component({
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ StockDataService ],
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public data: any;

    constructor(private dataService: StockDataService) {
        this.data = this.dataService.GetStockTSLA();
    }
}
