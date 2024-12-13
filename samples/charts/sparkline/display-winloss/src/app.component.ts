import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { SparklineMixedDataItem, SparklineMixedData } from './SparklineMixedData';
import { IgxSparklineComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

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

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}

