import { ChangeDetectionStrategy, Component } from "@angular/core";
import { StockIndexDataService } from "./StockIndexDataService";

@Component({
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ StockIndexDataService ],
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public stocksData: any;

    constructor(private dataService: StockIndexDataService) {
        this.stocksData = [
            this.dataService.getData()
        ];
    }
}
