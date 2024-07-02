import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { SelectableDataItem, SelectableData } from './SelectableData';
import { IgxDataLegendComponent, IgxCategoryChartComponent } from 'igniteui-angular-charts';

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("legend", { static: true } )
	private legend: IgxDataLegendComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxCategoryChartComponent
    private _selectableData: SelectableData = null;
    public get selectableData(): SelectableData {
        if (this._selectableData == null)
        {
            this._selectableData = new SelectableData();
        }
        return this._selectableData;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}

