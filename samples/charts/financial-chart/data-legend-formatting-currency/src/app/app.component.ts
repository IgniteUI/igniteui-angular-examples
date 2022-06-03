import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MultipleStocks, MultipleStocksItem } from './MultipleStocks';



@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    private _multipleStocks: MultipleStocks = null;
    private _multipleStocks_fetching: boolean = false;
    public get multipleStocks(): MultipleStocks {
        if (this._multipleStocks == null && !this._multipleStocks_fetching)
        {
            _multipleStocks_fetching = true;
            ( async () => { this._multipleStocks = await (await MultipleStocks.fetch());  })();
        }
        return this._multipleStocks;
    }
    


}

