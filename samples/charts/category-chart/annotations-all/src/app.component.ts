import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, CategoryChartDescriptionModule } from 'igniteui-angular-core';
import { TemperatureAnnotatedDataItem, TemperatureAnnotatedData } from './TemperatureAnnotatedData';
import { IgxPropertyEditorPanelComponent, IgxPropertyEditorPropertyDescriptionComponent } from 'igniteui-angular-layouts';
import { IgxCategoryChartComponent } from 'igniteui-angular-charts';

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

    @ViewChild("propertyEditor", { static: true } )
    private propertyEditor: IgxPropertyEditorPanelComponent
    @ViewChild("crosshairsDisplayModeEditor", { static: true } )
    private crosshairsDisplayModeEditor: IgxPropertyEditorPropertyDescriptionComponent
    @ViewChild("highlightingModeEditor", { static: true } )
    private highlightingModeEditor: IgxPropertyEditorPropertyDescriptionComponent
    @ViewChild("calloutsVisibleEditor", { static: true } )
    private calloutsVisibleEditor: IgxPropertyEditorPropertyDescriptionComponent
    @ViewChild("finalValueAnnotationsEditor", { static: true } )
    private finalValueAnnotationsEditor: IgxPropertyEditorPropertyDescriptionComponent
    @ViewChild("chart", { static: true } )
    private chart: IgxCategoryChartComponent

    private _temperatureAnnotatedData: TemperatureAnnotatedData = null;
    public get temperatureAnnotatedData(): TemperatureAnnotatedData {
        if (this._temperatureAnnotatedData == null)
        {
            this._temperatureAnnotatedData = new TemperatureAnnotatedData();
        }
        return this._temperatureAnnotatedData;
    }
    

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            CategoryChartDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

