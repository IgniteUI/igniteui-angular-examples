import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, ToolbarDescriptionModule, DataChartToolbarDescriptionModule, DataChartCoreDescriptionModule, DataChartCategoryDescriptionModule, DataChartAnnotationDescriptionModule, DataChartInteractivityDescriptionModule, AnnotationLayerProxyDescriptionModule, DataChartCategoryTrendLineDescriptionModule } from 'igniteui-angular-core';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';
import { IgxPropertyEditorPanelComponent, IgxToolbarComponent } from 'igniteui-angular-layouts';
import { IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxLineSeriesComponent } from 'igniteui-angular-charts';

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
	@ViewChild("toolbar", { static: true } )
	private toolbar: IgxToolbarComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxDataChartComponent
	@ViewChild("xAxis", { static: true } )
	private xAxis: IgxCategoryXAxisComponent
	@ViewChild("yAxis", { static: true } )
	private yAxis: IgxNumericYAxisComponent
	@ViewChild("lineSeries1", { static: true } )
	private lineSeries1: IgxLineSeriesComponent
    private _countryRenewableElectricity: CountryRenewableElectricity = null;
    public get countryRenewableElectricity(): CountryRenewableElectricity {
        if (this._countryRenewableElectricity == null)
        {
            this._countryRenewableElectricity = new CountryRenewableElectricity();
        }
        return this._countryRenewableElectricity;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            ToolbarDescriptionModule.register(context);
            DataChartToolbarDescriptionModule.register(context);
            DataChartCoreDescriptionModule.register(context);
            DataChartCategoryDescriptionModule.register(context);
            DataChartAnnotationDescriptionModule.register(context);
            DataChartInteractivityDescriptionModule.register(context);
            AnnotationLayerProxyDescriptionModule.register(context);
            DataChartCategoryTrendLineDescriptionModule.register(context);
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

