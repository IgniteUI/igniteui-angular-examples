import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, LegendDescriptionModule, CategoryChartDescriptionModule, DataChartAnnotationDescriptionModule, DataChartInteractivityDescriptionModule, DataChartCoreDescriptionModule } from 'igniteui-angular-core';
import { EnergyRenewableConsumptionItem, EnergyRenewableConsumption } from './EnergyRenewableConsumption';
import { IgxCategoryChartComponent, IgxChartSelection, IgxSeriesMatcher } from 'igniteui-angular-charts';
import { IgxLegendComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("legend", { static: true } )
	private legend: IgxLegendComponent
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
            LegendDescriptionModule.register(context);
            CategoryChartDescriptionModule.register(context);
            DataChartAnnotationDescriptionModule.register(context);
            DataChartInteractivityDescriptionModule.register(context);
            DataChartCoreDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
		this.selectionMatcherOnViewInit();
	}

	private _timer: ReturnType<typeof setInterval>;

	public selectionMatcherOnViewInit(): void {

		var chart = this.chart;

		this._timer = setTimeout(() => {
			var data = this.energyRenewableConsumption;
			let matcher: IgxSeriesMatcher = new IgxSeriesMatcher();

			let selection: IgxChartSelection = new IgxChartSelection();
			selection.item = data[1];
			matcher.memberPath = "hydro";
			matcher.memberPathType = "ValueMemberPath";
			selection.matcher = matcher;
			chart.selectedSeriesItems.add(selection);

			let matcher2: IgxSeriesMatcher = new IgxSeriesMatcher();
			let selection2: IgxChartSelection = new IgxChartSelection();
			selection2.item = data[2];
			matcher2.memberPath = "wind";
			matcher2.memberPathType = "ValueMemberPath";
			selection2.matcher = matcher2;

			chart.selectedSeriesItems.add(selection2);

	    }, 100);
	}

}

