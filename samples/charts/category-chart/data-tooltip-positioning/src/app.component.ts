import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, PropertyEditorPaneDescriptionModule, LegendDescriptionModule, CategoryChartDescriptionModule } from 'igniteui-angular-core';
import { HighestGrossingMoviesItem, HighestGrossingMovies } from './HighestGrossingMovies';
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
    @ViewChild("groupedPositionXEditor", { static: true } )
    private groupedPositionXEditor: IgxPropertyEditorPropertyDescriptionComponent
    @ViewChild("groupedPositionYEditor", { static: true } )
    private groupedPositionYEditor: IgxPropertyEditorPropertyDescriptionComponent
    @ViewChild("groupingModeEditor", { static: true } )
    private groupingModeEditor: IgxPropertyEditorPropertyDescriptionComponent
    @ViewChild("chart", { static: true } )
    private chart: IgxCategoryChartComponent

    private _highestGrossingMovies: HighestGrossingMovies = null;
    public get highestGrossingMovies(): HighestGrossingMovies {
        if (this._highestGrossingMovies == null)
        {
            this._highestGrossingMovies = new HighestGrossingMovies();
        }
        return this._highestGrossingMovies;
    }
    

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPaneDescriptionModule.register(context);
            LegendDescriptionModule.register(context);
            CategoryChartDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

