import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';
import { IgxToolCommandEventArgs } from 'igniteui-angular-layouts';
import { IgxDataChartComponent, IgxSeriesComponent } from 'igniteui-angular-charts';
import { IgxToolbarComponent, IgxToolActionColorEditorComponent } from 'igniteui-angular-layouts';
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
	@ViewChild("colorEditorTool", { static: true } )
	private colorEditorTool: IgxToolActionColorEditorComponent
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

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

	public colorEditorToggleSeriesBrush({ sender, args }: { sender: any, args: IgxToolCommandEventArgs }): void {
	    var target = this.chart;
		var color = args.command.argumentsList[0].value;

		switch (args.command.commandId)
		{
			case "ToggleSeriesBrush":
				let series = target.contentSeries.first as IgxSeriesComponent;
				series.brush = color;
			break;
		}
	}

}

