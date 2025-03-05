import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';
import { IgxToolCommandEventArgs } from 'igniteui-angular-layouts';
import { IgxDataChartComponent, IgxSeriesComponent, IgxDataToolTipLayerComponent, IgxCrosshairLayerComponent, IgxFinalValueLayerComponent } from 'igniteui-angular-charts';
import { IgxToolbarComponent, IgxToolActionIconMenuComponent, IgxToolActionGroupHeaderComponent, IgxToolActionSubPanelComponent, IgxToolActionCheckboxComponent, IgxToolActionLabelComponent } from 'igniteui-angular-layouts';
import { IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxLineSeriesComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("toolbar", { static: true } )
	private toolbar: IgxToolbarComponent
	@ViewChild("menuForSubPanelTool", { static: true } )
	private menuForSubPanelTool: IgxToolActionIconMenuComponent
	@ViewChild("subPanelGroup", { static: true } )
	private subPanelGroup: IgxToolActionGroupHeaderComponent
	@ViewChild("customSubPanelTools", { static: true } )
	private customSubPanelTools: IgxToolActionSubPanelComponent
	@ViewChild("enableTooltipsLabel", { static: true } )
	private enableTooltipsLabel: IgxToolActionCheckboxComponent
	@ViewChild("enableCrosshairsLabel", { static: true } )
	private enableCrosshairsLabel: IgxToolActionCheckboxComponent
	@ViewChild("enableFinalValuesLabel", { static: true } )
	private enableFinalValuesLabel: IgxToolActionCheckboxComponent
	@ViewChild("zoomResetLabel", { static: true } )
	private zoomResetLabel: IgxToolActionLabelComponent
	@ViewChild("zoomResetHidden", { static: true } )
	private zoomResetHidden: IgxToolActionLabelComponent
	@ViewChild("analyzeMenu", { static: true } )
	private analyzeMenu: IgxToolActionIconMenuComponent
	@ViewChild("copyMenu", { static: true } )
	private copyMenu: IgxToolActionLabelComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxDataChartComponent
	@ViewChild("xAxis", { static: true } )
	private xAxis: IgxCategoryXAxisComponent
	@ViewChild("yAxis", { static: true } )
	private yAxis: IgxNumericYAxisComponent
	@ViewChild("lineSeries1", { static: true } )
	private lineSeries1: IgxLineSeriesComponent
	@ViewChild("lineSeries2", { static: true } )
	private lineSeries2: IgxLineSeriesComponent
	@ViewChild("lineSeries3", { static: true } )
	private lineSeries3: IgxLineSeriesComponent
    private _countryRenewableElectricity: CountryRenewableElectricity = null;
    public get countryRenewableElectricity(): CountryRenewableElectricity {
        if (this._countryRenewableElectricity == null)
        {
            this._countryRenewableElectricity = new CountryRenewableElectricity();
        }
        return this._countryRenewableElectricity;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

	public toolbarToggleAnnotations({ sender, args }: { sender: any, args: IgxToolCommandEventArgs }): void {
	    var target = this.chart;
	    switch (args.command.commandId)
		{
			case "EnableTooltips":
				var enable = args.command.argumentsList[0].value as boolean;
				if (enable)
				{
					target.series.add(new IgxDataToolTipLayerComponent());
				}
				else
				{
					var toRemove = null;
					for (var i = 0; i < target.actualSeries.length; i++) {
	                    let s = target.actualSeries[i] as IgxSeriesComponent;
						if (s instanceof IgxDataToolTipLayerComponent)
						{
							toRemove = s;
						}
					}
					if (toRemove != null)
					{
						target.series.remove(toRemove);
					}
				}
			break;
			case "EnableCrosshairs":
				var enable = args.command.argumentsList[0].value as boolean;
				if (enable)
				{
					target.series.add(new IgxCrosshairLayerComponent());
				}
				else
				{
					var toRemove = null;
					for (var i = 0; i < target.actualSeries.length; i++) {
						let s = target.actualSeries[i] as IgxSeriesComponent;
						if (s instanceof IgxCrosshairLayerComponent)
						{
							toRemove = s;
						}
					}
					if (toRemove != null)
					{
						target.series.remove(toRemove);
					}
				}
			break;
			case "EnableFinalValues":
				var enable = args.command.argumentsList[0].value as boolean;
				if (enable)
				{
					target.series.add(new IgxFinalValueLayerComponent());
				}
				else
				{
					var toRemove = null;
					for (var i = 0; i < target.actualSeries.length; i++) {
						let s = target.actualSeries[i] as IgxSeriesComponent;
						if (s instanceof IgxFinalValueLayerComponent)
						{
							toRemove = s;
						}
					}
					if (toRemove != null)
					{
						target.series.remove(toRemove);
					}
				}
				break;
		}
	}

}

