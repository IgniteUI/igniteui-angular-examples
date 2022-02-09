import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    public data: any[];

    constructor() { }

    ngOnInit(): void {

        this.data = [
            { Date: "Jan 1, 2019", Revenue: 16914, Expenses: 10183 },
            { Date: "Mar 1, 2019", Revenue: 15077, Expenses: 12813 },
            { Date: "Jun 1, 2019", Revenue: 16886, Expenses: 14476 },
            { Date: "Sep 1, 2019", Revenue: 17652, Expenses: 11705 },
            { Date: "Jan 1, 2020", Revenue: 21082, Expenses: 14044 },
            { Date: "Mar 1, 2020", Revenue: 17737, Expenses: 12803 },
            { Date: "Jun 1, 2020", Revenue: 18687, Expenses: 13677 },
            { Date: "Sep 1, 2020", Revenue: 21470, Expenses: 13717 },
            { Date: "Jan 1, 2021", Revenue: 28072, Expenses: 17133 }
        ];

        for(let i=0; i<this.data.length; i++){
            const item = this.data[i];

            item.Income = item.Revenue - item.Expenses;
            item.IncomePerRevenue = (item.Income / item.Revenue * 100);
        }
    }
}
