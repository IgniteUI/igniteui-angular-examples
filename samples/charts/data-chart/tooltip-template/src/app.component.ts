import { Component } from "@angular/core";
import { UnknownValuePlotting } from "igniteui-angular-core";

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public data: any;
    public unknownValuePlotting: UnknownValuePlotting = UnknownValuePlotting.DontPlot;
    
    constructor() {
        this.data = [
            { Country: "Canada", Coal: 400, Oil: 100, Gas: 175, Nuclear: 225, Hydro: 350 },
            { Country: "China", Coal: 925, Oil: null, Gas: null, Nuclear: 400, Hydro: 625 },
            { Country: "Russia", Coal: 550, Oil: null, Gas: null, Nuclear: 475, Hydro: 425 },
            { Country: "Australia", Coal: 450, Oil: 100, Gas: 150, Nuclear: 175, Hydro: 350 },
            { Country: "United States", Coal: 800, Oil: 250, Gas: 475, Nuclear: 575, Hydro: 750 },
            { Country: "France", Coal: 375, Oil: 150, Gas: 350, Nuclear: 275, Hydro: 325 }
        ];
    }
}
