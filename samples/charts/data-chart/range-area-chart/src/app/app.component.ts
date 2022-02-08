import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public dataLA: any[];
    public dataNY: any[];

    constructor() {

        this.dataLA = [
            { Month: "JAN", High : 28.3, Low : 7.8 },
            { Month: "FEB", High : 31.1, Low : 5.6 },
            { Month: "MAR", High : 27.8, Low : 8.3 },
            { Month: "APR", High : 33.9, Low : 10.6 },
            { Month: "MAY", High : 35.0, Low : 13.9 },
            { Month: "JUN", High : 36.7, Low : 16.1 },
            { Month: "JUL", High : 33.3, Low : 15.6 },
            { Month: "AUG", High : 36.7, Low : 15.6 },
            { Month: "SEP", High : 43.9, Low : 16.1 },
            { Month: "OCT", High : 38.3, Low : 11.1 },
            { Month: "NOV", High : 32.8, Low : 6.7 },
            { Month: "DEC", High : 28.9, Low : 5.6 }
        ];

        this.dataNY = [
            { Month: "JAN", High : 10.6, Low : -6.6  },
            { Month: "FEB", High : 7.8,  Low : -9.9  },
            { Month: "MAR", High : 12.2, Low : -3.8  },
            { Month: "APR", High : 11.7, Low : 2.2   },
            { Month: "MAY", High : 19.4, Low : 1.1   },
            { Month: "JUN", High : 23.3, Low : 10.6  },
            { Month: "JUL", High : 27.2, Low : 19.4  },
            { Month: "AUG", High : 25.6, Low : 16.7  },
            { Month: "SEP", High : 22.8, Low : 8.9   },
            { Month: "OCT", High : 17.8, Low : 0.0   },
            { Month: "NOV", High : 17.8, Low : -1    },
            { Month: "DEC", High : 8.3,  Low : -6.6  }
        ];
    }
}
