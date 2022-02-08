import { ChangeDetectionStrategy, Component } from "@angular/core";
import { GenerateOhlcPricesService } from "./GenerateOhlcPricesService";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ GenerateOhlcPricesService ],
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public data: any;

    constructor(private dataService: GenerateOhlcPricesService) {
        const dateEnd = new Date(2018, 3, 20); // April 20, 2018
        const dateStart = new Date(1998, 3, 20); // April 20, 1998
        this.data = this.dataService.GetStockHistoryBetween(dateStart, dateEnd);
    }
}
