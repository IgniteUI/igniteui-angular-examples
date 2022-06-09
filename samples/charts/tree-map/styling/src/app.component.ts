import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CountyHierarchicalDataItem, CountyHierarchicalData } from './CountyHierarchicalData';
import { IgxTreemapComponent, IgxTreemapNodeStyleMappingComponent } from 'igniteui-angular-charts';



@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

    public constructor(private _detector: ChangeDetectorRef) {

    }

    @ViewChild("treemap", { static: true } )
    private treemap: IgxTreemapComponent
    @ViewChild("styling1", { static: true } )
    private styling1: IgxTreemapNodeStyleMappingComponent
    @ViewChild("styling2", { static: true } )
    private styling2: IgxTreemapNodeStyleMappingComponent
    @ViewChild("styling3", { static: true } )
    private styling3: IgxTreemapNodeStyleMappingComponent
    @ViewChild("styling4", { static: true } )
    private styling4: IgxTreemapNodeStyleMappingComponent
    @ViewChild("styling5", { static: true } )
    private styling5: IgxTreemapNodeStyleMappingComponent
    @ViewChild("styling6", { static: true } )
    private styling6: IgxTreemapNodeStyleMappingComponent
    @ViewChild("styling7", { static: true } )
    private styling7: IgxTreemapNodeStyleMappingComponent
    @ViewChild("styling8", { static: true } )
    private styling8: IgxTreemapNodeStyleMappingComponent

    private _countyHierarchicalData: CountyHierarchicalData = null;
    public get countyHierarchicalData(): CountyHierarchicalData {
        if (this._countyHierarchicalData == null)
        {
            this._countyHierarchicalData = new CountyHierarchicalData();
        }
        return this._countyHierarchicalData;
    }
    


}

