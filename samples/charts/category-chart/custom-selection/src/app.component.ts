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

	public categoryChartCustomSelectionPointerDown(e: any): void {

	    let oldItem = e.args.item as SelectableDataItem;

	    if (oldItem === null) return;

	    let newItem: SelectableDataItem = new SelectableDataItem({
	        category: oldItem.category,
	        dataValue: oldItem.dataValue,
	        selectedValue: oldItem.selectedValue
	    });

	    var selectedIndex = -1;
	    for (var i = 0; i < this.selectableData.length; i++) {
	        if (oldItem.category === this.selectableData[i].category) {
	            selectedIndex = i;
	            break;
	        }
	    }

	    if (oldItem.selectedValue === oldItem.dataValue)
	        newItem.selectedValue = null;
	    else
	        newItem.selectedValue = newItem.dataValue;

	    this.chart.notifySetItem(this.selectableData, selectedIndex, oldItem, newItem);
	}

}

