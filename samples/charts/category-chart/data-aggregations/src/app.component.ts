import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, LegendDescriptionModule, CategoryChartDescriptionModule } from 'igniteui-angular-core';
import { SalesData } from './SalesData';
import { IgxPropertyEditorPanelComponent, PropertyEditorValueType, IgxPropertyEditorPropertyDescriptionChangedEventArgs, IgxPropertyEditorPropertyDescriptionComponent } from 'igniteui-angular-layouts';
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
	    var initialSummariesDropdown = new IgxPropertyEditorPropertyDescriptionComponent();
	    var sortGroupsDropdown = new IgxPropertyEditorPropertyDescriptionComponent();

	    initialSummariesDropdown.label = "Initial Summaries";
	    initialSummariesDropdown.valueType = PropertyEditorValueType.EnumValue;
	    initialSummariesDropdown.shouldOverrideDefaultEditor = true;
	    initialSummariesDropdown.dropDownNames = ["Sum(Sales) as Sales", "Avg(Sales) as Sales", "Min(Sales) as Sales", "Max(Sales) as Sales", "Count(Sales) as Sales" ];
	    initialSummariesDropdown.dropDownValues = ["Sum(Sales) as Sales", "Avg(Sales) as Sales", "Min(Sales) as Sales", "Max(Sales) as Sales", "Count(Sales) as Sales" ];

	    sortGroupsDropdown.label = "Sort Groups"
	    sortGroupsDropdown.valueType = PropertyEditorValueType.EnumValue;
	    sortGroupsDropdown.shouldOverrideDefaultEditor = true;
	    sortGroupsDropdown.dropDownNames = ["Sales Asc", "Sales Desc"];
	    sortGroupsDropdown.dropDownValues = ["Sales Asc","Sales Desc"];

	    editor.properties.add(initialSummariesDropdown);
	    editor.properties.add(sortGroupsDropdown);

	    initialSummariesDropdown.changed.subscribe((event: { sender: any, args: IgxPropertyEditorPropertyDescriptionChangedEventArgs }) => {

	        var chart = this.chart;
	        var intialSummaryVal = event.args.newValue.toString();
	        chart.initialSummaries = intialSummaryVal;
	    });

	    sortGroupsDropdown.changed.subscribe((event: { sender: any, args: IgxPropertyEditorPropertyDescriptionChangedEventArgs }) => {

	        var chart = this.chart;
	        var groupSortsVal = event.args.newValue.toString();
	        chart.groupSorts = groupSortsVal;
	    });
	}

	public editorChangeUpdateInitialGroups({ sender, args }: { sender: any, args: IgxPropertyEditorPropertyDescriptionChangedEventArgs }): void {

	    var chart = this.chart;
	    var intialGroupVal = args.newValue.toString();
	    chart.initialGroups = intialGroupVal;
	}

}

