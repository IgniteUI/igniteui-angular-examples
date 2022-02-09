import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    public gerData: any[];
    public fraData: any[];
    public luxData: any[];

    constructor() { }

    ngOnInit(): void {
        this.fraData = [
            { Country: "France", Year: "1985", HealthExpense: 1923.14, LifeExpectancy: 75.30 },
            { Country: "France", Year: "1990", HealthExpense: 2300.90, LifeExpectancy: 76.60 },
            { Country: "France", Year: "1991", HealthExpense: 2377.84, LifeExpectancy: 76.85 },
            { Country: "France", Year: "1992", HealthExpense: 2469.41, LifeExpectancy: 77.10 },
            { Country: "France", Year: "1993", HealthExpense: 2561.99, LifeExpectancy: 77.30 },
            { Country: "France", Year: "1994", HealthExpense: 2607.91, LifeExpectancy: 77.65 },
            { Country: "France", Year: "1995", HealthExpense: 2965.82, LifeExpectancy: 77.75 },
            { Country: "France", Year: "1996", HealthExpense: 2997.76, LifeExpectancy: 77.95 },
            { Country: "France", Year: "1997", HealthExpense: 3018.34, LifeExpectancy: 78.30 },
            { Country: "France", Year: "1998", HealthExpense: 3082.74, LifeExpectancy: 78.60 },
            { Country: "France", Year: "1999", HealthExpense: 3172.00, LifeExpectancy: 78.76 },
            { Country: "France", Year: "2000", HealthExpense: 3248.95, LifeExpectancy: 79.06 },
            { Country: "France", Year: "2001", HealthExpense: 3331.44, LifeExpectancy: 79.16 },
            { Country: "France", Year: "2002", HealthExpense: 3454.06, LifeExpectancy: 79.26 },
            { Country: "France", Year: "2003", HealthExpense: 3478.58, LifeExpectancy: 79.11 },
            { Country: "France", Year: "2004", HealthExpense: 3578.90, LifeExpectancy: 80.16 },
            { Country: "France", Year: "2005", HealthExpense: 3629.21, LifeExpectancy: 80.16 },
            { Country: "France", Year: "2006", HealthExpense: 3644.73, LifeExpectancy: 80.81 },
            { Country: "France", Year: "2007", HealthExpense: 3680.69, LifeExpectancy: 81.11 },
            { Country: "France", Year: "2008", HealthExpense: 3713.79, LifeExpectancy: 81.21 },
            { Country: "France", Year: "2009", HealthExpense: 3836.71, LifeExpectancy: 81.41 },
            { Country: "France", Year: "2010", HealthExpense: 3859.53, LifeExpectancy: 81.66 },
            { Country: "France", Year: "2011", HealthExpense: 3917.43, LifeExpectancy: 82.11 },
            { Country: "France", Year: "2012", HealthExpense: 3942.39, LifeExpectancy: 81.97 },
            { Country: "France", Year: "2013", HealthExpense: 3989.24, LifeExpectancy: 82.22 },
            { Country: "France", Year: "2014", HealthExpense: 4035.95, LifeExpectancy: 82.67 },
            { Country: "France", Year: "2015", HealthExpense: 4027.95, LifeExpectancy: 82.27 }
        ];

        this.gerData = [
            { Country: "Germany", Year: "1985", HealthExpense: 2579.64, LifeExpectancy: 74.05 },
            { Country: "Germany", Year: "1986", HealthExpense: 2603.94, LifeExpectancy: 74.31 },
            { Country: "Germany", Year: "1987", HealthExpense: 2668.49, LifeExpectancy: 74.56 },
            { Country: "Germany", Year: "1988", HealthExpense: 2812.94, LifeExpectancy: 74.79 },
            { Country: "Germany", Year: "1989", HealthExpense: 2689.51, LifeExpectancy: 75.01 },
            { Country: "Germany", Year: "1990", HealthExpense: 2774.68, LifeExpectancy: 75.23 },
            { Country: "Germany", Year: "1992", HealthExpense: 2909.85, LifeExpectancy: 75.82 },
            { Country: "Germany", Year: "1993", HealthExpense: 2853.09, LifeExpectancy: 75.87 },
            { Country: "Germany", Year: "1994", HealthExpense: 2989.64, LifeExpectancy: 76.27 },
            { Country: "Germany", Year: "1995", HealthExpense: 3122.13, LifeExpectancy: 76.42 },
            { Country: "Germany", Year: "1996", HealthExpense: 3241.89, LifeExpectancy: 76.67 },
            { Country: "Germany", Year: "1997", HealthExpense: 3257.29, LifeExpectancy: 77.07 },
            { Country: "Germany", Year: "1998", HealthExpense: 3327.26, LifeExpectancy: 77.48 },
            { Country: "Germany", Year: "1999", HealthExpense: 3414.57, LifeExpectancy: 77.73 },
            { Country: "Germany", Year: "2000", HealthExpense: 3536.35, LifeExpectancy: 77.93 },
            { Country: "Germany", Year: "2001", HealthExpense: 3603.77, LifeExpectancy: 78.33 },
            { Country: "Germany", Year: "2002", HealthExpense: 3687.38, LifeExpectancy: 78.23 },
            { Country: "Germany", Year: "2003", HealthExpense: 3745.14, LifeExpectancy: 78.38 },
            { Country: "Germany", Year: "2004", HealthExpense: 3704.96, LifeExpectancy: 78.68 },
            { Country: "Germany", Year: "2005", HealthExpense: 3787.13, LifeExpectancy: 78.93 },
            { Country: "Germany", Year: "2006", HealthExpense: 3875.14, LifeExpectancy: 79.13 },
            { Country: "Germany", Year: "2007", HealthExpense: 3950.17, LifeExpectancy: 79.53 },
            { Country: "Germany", Year: "2008", HealthExpense: 4079.09, LifeExpectancy: 79.74 },
            { Country: "Germany", Year: "2009", HealthExpense: 4232.58, LifeExpectancy: 79.84 },
            { Country: "Germany", Year: "2010", HealthExpense: 4358.61, LifeExpectancy: 79.99 },
            { Country: "Germany", Year: "2011", HealthExpense: 4396.44, LifeExpectancy: 80.44 },
            { Country: "Germany", Year: "2012", HealthExpense: 4516.99, LifeExpectancy: 80.54 },
            { Country: "Germany", Year: "2013", HealthExpense: 4589.37, LifeExpectancy: 80.49 },
            { Country: "Germany", Year: "2014", HealthExpense: 4684.49, LifeExpectancy: 81.09 },
            { Country: "Germany", Year: "2015", HealthExpense: 4772.33, LifeExpectancy: 80.64 }
        ];

        this.luxData = [
            { Country: "Luxembourg", Year: "1995", HealthExpense: 3316.78, LifeExpectancy: 76.51 },
            { Country: "Luxembourg", Year: "1996", HealthExpense: 3373.07, LifeExpectancy: 76.52 },
            { Country: "Luxembourg", Year: "1997", HealthExpense: 3489.24, LifeExpectancy: 76.88 },
            { Country: "Luxembourg", Year: "1998", HealthExpense: 3712.84, LifeExpectancy: 77.02 },
            { Country: "Luxembourg", Year: "1999", HealthExpense: 4052.56, LifeExpectancy: 77.77 },
            { Country: "Luxembourg", Year: "2000", HealthExpense: 4607.01, LifeExpectancy: 77.87 },
            { Country: "Luxembourg", Year: "2001", HealthExpense: 5120.93, LifeExpectancy: 77.82 },
            { Country: "Luxembourg", Year: "2002", HealthExpense: 5534.75, LifeExpectancy: 77.97 },
            { Country: "Luxembourg", Year: "2003", HealthExpense: 5733.32, LifeExpectancy: 77.73 },
            { Country: "Luxembourg", Year: "2004", HealthExpense: 6206.89, LifeExpectancy: 79.12 },
            { Country: "Luxembourg", Year: "2005", HealthExpense: 6192.66, LifeExpectancy: 79.43 },
            { Country: "Luxembourg", Year: "2006", HealthExpense: 6020.64, LifeExpectancy: 79.29 },
            { Country: "Luxembourg", Year: "2007", HealthExpense: 5982.60, LifeExpectancy: 79.38 },
            { Country: "Luxembourg", Year: "2008", HealthExpense: 6130.74, LifeExpectancy: 80.54 },
            { Country: "Luxembourg", Year: "2009", HealthExpense: 6451.66, LifeExpectancy: 80.64 },
            { Country: "Luxembourg", Year: "2010", HealthExpense: 6401.90, LifeExpectancy: 80.63 },
            { Country: "Luxembourg", Year: "2011", HealthExpense: 5628.02, LifeExpectancy: 80.99 },
            { Country: "Luxembourg", Year: "2012", HealthExpense: 5811.15, LifeExpectancy: 81.39 },
            { Country: "Luxembourg", Year: "2013", HealthExpense: 5787.44, LifeExpectancy: 81.80 },
            { Country: "Luxembourg", Year: "2014", HealthExpense: 5777.43, LifeExpectancy: 82.23 },
            { Country: "Luxembourg", Year: "2015", HealthExpense: 6758.79, LifeExpectancy: 82.29 }
        ];
    }

}
