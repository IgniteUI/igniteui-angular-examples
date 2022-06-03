import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { DataItem, Data } from './SampleData';



@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    private _data: Data = null;
    public get data(): Data {
        if (this._data == null)
        {
            this._data = new Data();
        }
        return this._data;
    }
    


}

