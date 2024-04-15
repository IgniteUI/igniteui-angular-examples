import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, NumberAbbreviatorDescriptionModule, DataChartCoreDescriptionModule, DataChartScatterDescriptionModule, DataChartScatterCoreDescriptionModule, DataChartInteractivityDescriptionModule, DataChartAnnotationDescriptionModule } from 'igniteui-angular-core';
import { WorldDebtAndPopulationItem, WorldDebtAndPopulation } from './WorldDebtAndPopulation';
import { IgxDataChartComponent, IgxNumericXAxisComponent, IgxNumericYAxisComponent, IgxBubbleSeriesComponent, IgxSizeScaleComponent, IgxValueBrushScaleComponent } from 'igniteui-angular-charts';

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("chart", { static: true } )
	private chart: IgxDataChartComponent
	@ViewChild("xAxis", { static: true } )
	private xAxis: IgxNumericXAxisComponent
	@ViewChild("yAxis", { static: true } )
	private yAxis: IgxNumericYAxisComponent
	@ViewChild("bubbleSeries1", { static: true } )
	private bubbleSeries1: IgxBubbleSeriesComponent
	private  _sizeScale1: IgxSizeScaleComponent | null = null;
	public get sizeScale1(): IgxSizeScaleComponent {
	    if (this._sizeScale1 == null)
	    {
	        var sizeScale1 = new IgxSizeScaleComponent();
	        sizeScale1.isLogarithmic = false;
	        sizeScale1.minimumValue = 10;
	        sizeScale1.maximumValue = 120;

	        this._sizeScale1 = sizeScale1;
	    }
	    return this._sizeScale1;
	}
	private  _valueBrushScale1: IgxValueBrushScaleComponent | null = null;
	public get valueBrushScale1(): IgxValueBrushScaleComponent {
	    if (this._valueBrushScale1 == null)
	    {
	        var valueBrushScale1 = new IgxValueBrushScaleComponent();
	        valueBrushScale1.isLogarithmic = false;
	        valueBrushScale1.minimumValue = 0;
	        valueBrushScale1.maximumValue = 100000;
	        valueBrushScale1.brushes = ["rgba(26, 161, 226, 1)", "rgba(24, 154, 217, 1)", "rgba(22, 146, 206, 1)", "rgba(19, 133, 188, 1)", "rgba(15, 121, 171, 1)", "rgba(12, 107, 153, 1)", "rgba(9, 94, 136, 1)", "rgba(5, 82, 119, 1)", "rgba(2, 70, 105, 1)", "rgba(0, 63, 94, 1)"];

	        this._valueBrushScale1 = valueBrushScale1;
	    }
	    return this._valueBrushScale1;
	}
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

