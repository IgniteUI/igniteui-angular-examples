import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FinancialDataService } from "./FinancialDataService";

@Component({
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ FinancialDataService ],
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {
    public data: any;
    constructor(private dataService: FinancialDataService) {
        this.data = [ this.dataService.getAmzn(), this.dataService.getMsft() ];
    }
}
