import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { DataEuropeItem, DataEurope, DataAfricaItem, DataAfrica } from './SampleData';



@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    private _dataEurope: DataEurope = null;
    public get dataEurope(): DataEurope {
        if (this._dataEurope == null)
        {
            this._dataEurope = new DataEurope();
        }
        return this._dataEurope;
    }
    
    private _dataAfrica: DataAfrica = null;
    public get dataAfrica(): DataAfrica {
        if (this._dataAfrica == null)
        {
            this._dataAfrica = new DataAfrica();
        }
        return this._dataAfrica;
    }
    


}

