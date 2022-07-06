import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, DataChartCoreDescriptionModule, DataChartCategoryDescriptionModule } from 'igniteui-angular-core';
import { CompanyIncomeDataItem, CompanyIncomeData } from './CompanyIncomeData';
import { IgxPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-angular-layouts';
import { IgxDataChartComponent } from 'igniteui-angular-charts';
import { IgxPropertyEditorPanelComponent, IgxPropertyEditorPropertyDescriptionComponent } from 'igniteui-angular-layouts';
import { IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxWaterfallSeriesComponent } from 'igniteui-angular-charts';

import 'igniteui-webcomponents/themes/light/bootstrap.css';
import { defineAllComponents } from 'igniteui-webcomponents';

defineAllComponents();

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

    public constructor(private _detector: ChangeDetectorRef) {

    }

    @ViewChild("propertyEditorPanel1", { static: true } )
    private propertyEditorPanel1: IgxPropertyEditorPanelComponent
    @ViewChild("propertyEditorPropertyDescription1", { static: true } )
    private propertyEditorPropertyDescription1: IgxPropertyEditorPropertyDescriptionComponent
    @ViewChild("chart", { static: true } )
    private chart: IgxDataChartComponent
    @ViewChild("xAxis", { static: true } )
    private xAxis: IgxCategoryXAxisComponent
    @ViewChild("yAxis", { static: true } )
    private yAxis: IgxNumericYAxisComponent
    @ViewChild("waterfallSeries1", { static: true } )
    private waterfallSeries1: IgxWaterfallSeriesComponent
    @ViewChild("waterfallSeries2", { static: true } )
    private waterfallSeries2: IgxWaterfallSeriesComponent

    private _companyIncomeData: CompanyIncomeData = null;
    public get companyIncomeData(): CompanyIncomeData {
        if (this._companyIncomeData == null)
        {
            this._companyIncomeData = new CompanyIncomeData();
        }
        return this._companyIncomeData;
    }
    

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            DataChartCoreDescriptionModule.register(context);
            DataChartCategoryDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    
    public editorButtonReplayTransitionIn({ sender, args }: { sender: any, args: IgxPropertyEditorPropertyDescriptionButtonClickEventArgs }): void {
        var series = this.chart.actualSeries;
        for (var i = 0; i < series.length; i++) {
            series[i].replayTransitionIn();
        }
    }
        
}

