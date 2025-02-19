import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, DataChartCategoryDescriptionModule, DataChartInteractivityDescriptionModule } from 'igniteui-angular-core';
import { TemperatureAverageDataLongLabelsItem, TemperatureAverageDataLongLabels } from './TemperatureAverageDataLongLabels';
import { IgxPropertyEditorPanelComponent, IgxPropertyEditorPropertyDescriptionComponent } from 'igniteui-angular-layouts';
import { IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxColumnSeriesComponent } from 'igniteui-angular-charts';

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
	@ViewChild("shouldConsiderAutoRotationForInitialLabels", { static: true } )
	private shouldConsiderAutoRotationForInitialLabels: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("autoMarginAndAngleUpdateMode", { static: true } )
	private autoMarginAndAngleUpdateMode: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxDataChartComponent
	@ViewChild("xAxis", { static: true } )
	private xAxis: IgxCategoryXAxisComponent
	@ViewChild("yAxis", { static: true } )
	private yAxis: IgxNumericYAxisComponent
	@ViewChild("colSeries1", { static: true } )
	private colSeries1: IgxColumnSeriesComponent
    private _temperatureAverageDataLongLabels: TemperatureAverageDataLongLabels = null;
    public get temperatureAverageDataLongLabels(): TemperatureAverageDataLongLabels {
        if (this._temperatureAverageDataLongLabels == null)
        {
            this._temperatureAverageDataLongLabels = new TemperatureAverageDataLongLabels();
        }
        return this._temperatureAverageDataLongLabels;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            DataChartCategoryDescriptionModule.register(context);
            DataChartInteractivityDescriptionModule.register(context);
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

