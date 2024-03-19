import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, NumberAbbreviatorDescriptionModule, DataChartCoreDescriptionModule, DataChartScatterDescriptionModule, DataChartScatterCoreDescriptionModule, DataChartInteractivityDescriptionModule, DataChartAnnotationDescriptionModule, PropertyEditorPanelDescriptionModule } from 'igniteui-angular-core';
import { WorldDebtAndPopulationItem, WorldDebtAndPopulation } from './WorldDebtAndPopulation';
import { IgxPropertyEditorPropertyDescriptionChangedEventArgs, IgxPropertyEditorPropertyDescriptionComponent } from 'igniteui-angular-layouts';
import { IgxBubbleSeriesComponent } from 'igniteui-angular-charts';
import { EnumUtil } from 'igniteui-angular-core';
import { IgxPropertyEditorPanelComponent } from 'igniteui-angular-layouts';
import { IgxDataChartComponent, IgxNumericXAxisComponent, IgxNumericYAxisComponent } from 'igniteui-angular-charts';

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
	@ViewChild("fillScaleMinimumValueEditor", { static: true } )
	private fillScaleMinimumValueEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("fillScaleMaximumValueEditor", { static: true } )
	private fillScaleMaximumValueEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxDataChartComponent
	@ViewChild("xAxis", { static: true } )
	private xAxis: IgxNumericXAxisComponent
	@ViewChild("yAxis", { static: true } )
	private yAxis: IgxNumericYAxisComponent
	@ViewChild("bubbleSeries1", { static: true } )
	private bubbleSeries1: IgxBubbleSeriesComponent
    private _worldDebtAndPopulation: WorldDebtAndPopulation = null;
    public get worldDebtAndPopulation(): WorldDebtAndPopulation {
        if (this._worldDebtAndPopulation == null)
        {
            this._worldDebtAndPopulation = new WorldDebtAndPopulation();
        }
        return this._worldDebtAndPopulation;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            NumberAbbreviatorDescriptionModule.register(context);
            DataChartCoreDescriptionModule.register(context);
            DataChartScatterDescriptionModule.register(context);
            DataChartScatterCoreDescriptionModule.register(context);
            DataChartInteractivityDescriptionModule.register(context);
            DataChartAnnotationDescriptionModule.register(context);
            PropertyEditorPanelDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

	public scatterBubbleSeriesFillScaleSliderChanged({ sender, args }: { sender: any, args: IgxPropertyEditorPropertyDescriptionChangedEventArgs }): void {
	    let series: IgxBubbleSeriesComponent = this.chart.actualSeries[0] as IgxBubbleSeriesComponent;

	    let fillScale = (series.fillScale as any);

	    if(args.newValue >= 25000){
	        fillScale.maximumValue = args.newValue;
	    }
	    else{
	        fillScale.minimumValue = args.newValue;
	    }
	}

}

