import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, TreemapDescriptionModule } from 'igniteui-angular-core';
import { CountyHierarchicalDataItem, CountyHierarchicalData } from './CountyHierarchicalData';
import { IgxPropertyEditorPanelComponent, IgxPropertyEditorPropertyDescriptionComponent } from 'igniteui-angular-layouts';
import { IgxTreemapComponent } from 'igniteui-angular-charts';

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

	@ViewChild("propertyEditor", { static: true } )
	private propertyEditor: IgxPropertyEditorPanelComponent
	@ViewChild("highlightedModeEditor", { static: true } )
	private highlightedModeEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("treemap", { static: true } )
	private treemap: IgxTreemapComponent
    private _countyHierarchicalData: CountyHierarchicalData = null;
    public get countyHierarchicalData(): CountyHierarchicalData {
        if (this._countyHierarchicalData == null)
        {
            this._countyHierarchicalData = new CountyHierarchicalData();
        }
        return this._countyHierarchicalData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            TreemapDescriptionModule.register(context);
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

