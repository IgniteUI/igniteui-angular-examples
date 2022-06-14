import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, SparklineDescriptionModule } from 'igniteui-angular-core';
import { SparklineProfitDataItem, SparklineProfitData } from './SparklineProfitData';
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
    @ViewChild("firstMarkerVisibilityEditor", { static: true } )
    private firstMarkerVisibilityEditor: IgxPropertyEditorPropertyDescriptionComponent
    @ViewChild("highMarkerVisibilityEditor", { static: true } )
    private highMarkerVisibilityEditor: IgxPropertyEditorPropertyDescriptionComponent
    @ViewChild("lowMarkerVisibilityEditor", { static: true } )
    private lowMarkerVisibilityEditor: IgxPropertyEditorPropertyDescriptionComponent
    @ViewChild("negativeMarkerVisibilityEditor", { static: true } )
    private negativeMarkerVisibilityEditor: IgxPropertyEditorPropertyDescriptionComponent
    @ViewChild("lastMarkerVisibilityEditor", { static: true } )
    private lastMarkerVisibilityEditor: IgxPropertyEditorPropertyDescriptionComponent
    @ViewChild("markerVisibilityEditor", { static: true } )
    private markerVisibilityEditor: IgxPropertyEditorPropertyDescriptionComponent
    @ViewChild("chart", { static: true } )
    private chart: IgxSparklineComponent

    private _sparklineProfitData: SparklineProfitData = null;
    public get sparklineProfitData(): SparklineProfitData {
        if (this._sparklineProfitData == null)
        {
            this._sparklineProfitData = new SparklineProfitData();
        }
        return this._sparklineProfitData;
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

