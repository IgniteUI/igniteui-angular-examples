import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { OnlineTrafficHighlightTotalsItem, OnlineTrafficHighlightTotals } from './OnlineTrafficHighlightTotals';
import { IgxPropertyEditorPanelComponent, IgxPropertyEditorPropertyDescriptionComponent } from 'igniteui-angular-layouts';
import { IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxColumnSeriesComponent } from 'igniteui-angular-charts';

import { defineAllComponents } from 'igniteui-webcomponents';

defineAllComponents();

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("propertyEditor", { static: true } )
	private propertyEditor: IgxPropertyEditorPanelComponent
	@ViewChild("highlightedValuesDisplayModeEditor", { static: true } )
	private highlightedValuesDisplayModeEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxDataChartComponent
	@ViewChild("xAxis", { static: true } )
	private xAxis: IgxCategoryXAxisComponent
	@ViewChild("yAxis", { static: true } )
	private yAxis: IgxNumericYAxisComponent
	@ViewChild("columnSeries1", { static: true } )
	private columnSeries1: IgxColumnSeriesComponent
    private _onlineTrafficHighlightTotals: OnlineTrafficHighlightTotals = null;
    public get onlineTrafficHighlightTotals(): OnlineTrafficHighlightTotals {
        if (this._onlineTrafficHighlightTotals == null)
        {
            this._onlineTrafficHighlightTotals = new OnlineTrafficHighlightTotals();
        }
        return this._onlineTrafficHighlightTotals;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}

