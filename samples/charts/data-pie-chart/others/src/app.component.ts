import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, DataPieChartDescriptionModule, ItemLegendDescriptionModule } from 'igniteui-angular-core';
import { DataPieDataItem, DataPieData } from './DataPieData';
import { IgxPropertyEditorPanelComponent, IgxPropertyEditorPropertyDescriptionComponent } from 'igniteui-angular-layouts';
import { IgxDataPieChartComponent } from 'igniteui-angular-charts';

import { defineAllComponents } from 'igniteui-webcomponents';

defineAllComponents();

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("propertyEditorPanel1", { static: true } )
	private propertyEditorPanel1: IgxPropertyEditorPanelComponent
	@ViewChild("othersCategoryTypeEditor", { static: true } )
	private othersCategoryTypeEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("othersCategoryThresholdEditor", { static: true } )
	private othersCategoryThresholdEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("othersCategoryTextEditor", { static: true } )
	private othersCategoryTextEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxDataPieChartComponent
    private _dataPieData: DataPieData = null;
    public get dataPieData(): DataPieData {
        if (this._dataPieData == null)
        {
            this._dataPieData = new DataPieData();
        }
        return this._dataPieData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            DataPieChartDescriptionModule.register(context);
            ItemLegendDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}

