import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, SparklineDescriptionModule } from 'igniteui-angular-core';
import { SparklineMixedDataItem, SparklineMixedData } from './SparklineMixedData';

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

    private _sparklineMixedData: SparklineMixedData = null;
    public get sparklineMixedData(): SparklineMixedData {
        if (this._sparklineMixedData == null)
        {
            this._sparklineMixedData = new SparklineMixedData();
        }
        return this._sparklineMixedData;
    }
    

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            SparklineDescriptionModule.register(context);
        }
        return this._componentRenderer
    }

}

