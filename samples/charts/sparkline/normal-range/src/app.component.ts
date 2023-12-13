import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, SparklineDescriptionModule } from 'igniteui-angular-core';
import { SparklineMixedDataItem, SparklineMixedData } from './SparklineMixedData';
import { IgxPropertyEditorPanelComponent, IgxPropertyEditorPropertyDescriptionComponent } from 'igniteui-angular-layouts';
import { IgxSparklineComponent } from 'igniteui-angular-charts';

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

	@ViewChild("propertyEditorPanel1", { static: true } )
	private propertyEditorPanel1: IgxPropertyEditorPanelComponent
	@ViewChild("normalRangeVisibilityEditor", { static: true } )
	private normalRangeVisibilityEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("normalRangeMinimumEditor", { static: true } )
	private normalRangeMinimumEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("normalRangeMaximumEditor", { static: true } )
	private normalRangeMaximumEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxSparklineComponent
    private _sparklineMixedData: SparklineMixedData = null;
    public get sparklineMixedData(): SparklineMixedData {
        if (this._sparklineMixedData == null)
        {
            this._sparklineMixedData = new SparklineMixedData();
        }
        return this._sparklineMixedData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            SparklineDescriptionModule.register(context);
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

