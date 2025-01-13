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

    public financialData: any;
    public sampleOptions: SampleOptions = new SampleOptions();

    constructor(private dataService: FinancialDataService) {
        this.financialData = [ this.dataService.getAmzn(), this.dataService.getGoog() ];
    }
}

class SampleOptions {
    public tooltipType: string = "Category";
}
