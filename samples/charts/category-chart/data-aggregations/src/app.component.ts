import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, LegendDescriptionModule, CategoryChartDescriptionModule } from 'igniteui-angular-core';
import { SalesData } from './SalesData';
import { IgxPropertyEditorPanelComponent, IgxPropertyEditorPropertyDescriptionChangedEventArgs, IgxPropertyEditorPropertyDescriptionComponent } from 'igniteui-angular-layouts';
import { IgxCategoryChartComponent, MarkerType, MarkerType_$type } from 'igniteui-angular-charts';
import { EnumUtil } from 'igniteui-angular-core';

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

	@ViewChild("editor", { static: true } )
	private editor: IgxPropertyEditorPanelComponent
	@ViewChild("initialGroups", { static: true } )
	private initialGroups: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("initialSummaries", { static: true } )
	private initialSummaries: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("groupSorts", { static: true } )
	private groupSorts: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxCategoryChartComponent
    private _salesData: SalesData = null;
    public get salesData(): SalesData {
        if (this._salesData == null)
        {
            this._salesData = new SalesData();
        }
        return this._salesData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            LegendDescriptionModule.register(context);
            CategoryChartDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
		this.propertyEditorInitAggregationsOnViewInit();
	}

	public propertyEditorInitAggregationsOnViewInit(): void {

	    var editor = this.editor;
	    var initialSummaries = editor.actualProperties.filter((p) => p.label == "Initial Summaries")[0];
	    initialSummaries.dropDownNames = ["Sum(Sales) as Sales", "Avg(Sales) as Sales", "Min(Sales) as Sales", "Max(Sales) as Sales", "Count(Sales) as Sales" ];
	    initialSummaries.dropDownValues = ["Sum(Sales) as Sales", "Avg(Sales) as Sales", "Min(Sales) as Sales", "Max(Sales) as Sales", "Count(Sales) as Sales" ];

	    var groupSorts = editor.actualProperties.filter((p) => p.label == "Sort Groups")[0];
	    groupSorts.dropDownNames = ["Sales Desc", "Sales Asc"];
	    groupSorts.dropDownValues = ["Sales Desc", "Sales Asc"];
	}

	public editorChangeUpdateInitialGroups({ sender, args }: { sender: any, args: IgxPropertyEditorPropertyDescriptionChangedEventArgs }): void {

	    var chart = this.chart;
	    var intialGroupVal = args.newValue.toString();
	    chart.initialGroups = intialGroupVal;
	}

	public editorChangeUpdateInitialSummaries({ sender, args }: { sender: any, args: IgxPropertyEditorPropertyDescriptionChangedEventArgs }): void {

	    var chart = this.chart;
	    var intialSummaryVal = args.newValue.toString();
	    chart.initialSummaries = intialSummaryVal;
	}

	public editorChangeUpdateGroupSorts({ sender, args }: { sender: any, args: IgxPropertyEditorPropertyDescriptionChangedEventArgs }): void {
	    var chart = this.chart;
	    var groupSortsVal = args.newValue.toString();
	    chart.groupSorts = groupSortsVal;
	}

}

