import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CalendarSeasonsItem, CalendarSeasons } from './CalendarSeasons';
import { CalendarMonthsItem, CalendarMonths } from './CalendarMonths';



@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

    public constructor(private _detector: ChangeDetectorRef) {

    }

    private _calendarSeasons: CalendarSeasons = null;
    public get calendarSeasons(): CalendarSeasons {
        if (this._calendarSeasons == null)
        {
            this._calendarSeasons = new CalendarSeasons();
        }
        return this._calendarSeasons;
    }
    
    private _calendarMonths: CalendarMonths = null;
    public get calendarMonths(): CalendarMonths {
        if (this._calendarMonths == null)
        {
            this._calendarMonths = new CalendarMonths();
        }
        return this._calendarMonths;
    }
    


}

