import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, SparklineDescriptionModule } from 'igniteui-angular-core';
import { SparklineUnknownDataItem, SparklineUnknownData } from './SparklineUnknownData';
import { IgxPropertyEditorPanelComponent, IgxPropertyEditorPropertyDescriptionComponent } from 'igniteui-angular-layouts';
import { IgxSparklineComponent } from 'igniteui-angular-charts';

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
    @ViewChild("unknownValuePlottingEditor", { static: true } )
    private unknownValuePlottingEditor: IgxPropertyEditorPropertyDescriptionComponent
    @ViewChild("chart", { static: true } )
    private chart: IgxSparklineComponent

    private _sparklineUnknownData: SparklineUnknownData = null;
    public get sparklineUnknownData(): SparklineUnknownData {
        if (this._sparklineUnknownData == null)
        {
            this._sparklineUnknownData = new SparklineUnknownData();
        }
        return this._sparklineUnknownData;
    }
    

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            SparklineDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

