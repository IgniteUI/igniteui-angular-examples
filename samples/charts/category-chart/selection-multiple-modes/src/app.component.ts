import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, LegendDescriptionModule, CategoryChartDescriptionModule } from 'igniteui-angular-core';
import { EnergyRenewableConsumptionItem, EnergyRenewableConsumption } from './EnergyRenewableConsumption';
import { IgxLegendComponent, IgxCategoryChartComponent } from 'igniteui-angular-charts';
import { IgxPropertyEditorPanelComponent, IgxPropertyEditorPropertyDescriptionComponent } from 'igniteui-angular-layouts';

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

	@ViewChild("legend", { static: true } )
	private legend: IgxLegendComponent
	@ViewChild("propertyEditor", { static: true } )
	private propertyEditor: IgxPropertyEditorPanelComponent
	@ViewChild("selectionModeEditor", { static: true } )
	private selectionModeEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("selectionBehaviorEditor", { static: true } )
	private selectionBehaviorEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxCategoryChartComponent
    private _energyRenewableConsumption: EnergyRenewableConsumption = null;
    public get energyRenewableConsumption(): EnergyRenewableConsumption {
        if (this._energyRenewableConsumption == null)
        {
            this._energyRenewableConsumption = new EnergyRenewableConsumption();
        }
        return this._energyRenewableConsumption;
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
	}

}

