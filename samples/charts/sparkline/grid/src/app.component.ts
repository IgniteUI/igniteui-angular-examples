import { Component, Injectable, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { BehaviorSubject, Observable } from "rxjs";
import { Products } from "./Products";

@Injectable()
export class LocalService {
    public records: Observable<any[]>;
    private _records: BehaviorSubject<any[]>;

    constructor() {
        this._records = new BehaviorSubject([]);
        this.records = this._records.asObservable();
    }

    public getData() {
        const data = Products.getData();
        this._records.next(data);
    }
}

@Component({
    providers: [LocalService],
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})

export class AppComponent {

    @ViewChild("grid1", { static: true }) public grid1: IgxGridComponent;
    public data: Observable<any[]>;

    constructor(private localService: LocalService) {
        this.localService.getData();
        this.data = this.localService.records;
    }

    public ngOnInit(): void {
    }

    public formatNumber(value: number) {
        return value.toFixed(2);
    }

    public formatCurrency(value: number) {
        return "$" + value.toFixed(2);
    }
}
