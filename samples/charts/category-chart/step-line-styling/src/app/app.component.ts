import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public data: any;

    constructor() {
        const dataUSA: any = [
            { Year: "2009", UnitedStates: 19 },
            { Year: "2010", UnitedStates: 24 },
            { Year: "2011", UnitedStates: 28 },
            { Year: "2012", UnitedStates: 26 },
            { Year: "2013", UnitedStates: 38 },
            { Year: "2014", UnitedStates: 31 },
            { Year: "2015", UnitedStates: 19 },
            { Year: "2016", UnitedStates: 52 },
            { Year: "2017", UnitedStates: 50 },
            { Year: "2018", UnitedStates: 34 },
            { Year: "2019", UnitedStates: 38 }

        ];
        const dataChina: any = [
            { Year: "2009", China: 21 },
            { Year: "2010", China: 26 },
            { Year: "2011", China: 29 },
            { Year: "2012", China: 32 },
            { Year: "2013", China: 47 },
            { Year: "2014", China: 46 },
            { Year: "2015", China: 50 },
            { Year: "2016", China: 90 },
            { Year: "2017", China: 132 },
            { Year: "2018", China: 134 },
            { Year: "2019", China: 96 }
        ];
        const dataEurope: any = [
            { Year: "2009", Europe: 31 },
            { Year: "2010", Europe: 43 },
            { Year: "2011", Europe: 66 },
            { Year: "2012", Europe: 69 },
            { Year: "2013", Europe: 58 },
            { Year: "2014", Europe: 40 },
            { Year: "2015", Europe: 78 },
            { Year: "2016", Europe: 13 },
            { Year: "2017", Europe: 78 },
            { Year: "2018", Europe: 40 },
            { Year: "2019", Europe: 80 }
        ];
        this.data = [ dataEurope, dataChina, dataUSA ];
    }
}
