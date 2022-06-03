import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { StockGoogleItem, StockGoogle } from './StockGoogle';



@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    private _stockGoogle: StockGoogle = null;
    public get stockGoogle(): StockGoogle {
        if (this._stockGoogle == null)
        {
            this._stockGoogle = new StockGoogle();
        }
        return this._stockGoogle;
    }
    


}

