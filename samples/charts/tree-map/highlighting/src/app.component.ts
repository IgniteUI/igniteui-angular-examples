import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, TreemapDescriptionModule } from 'igniteui-angular-core';
import { CountyHierarchicalDataItem, CountyHierarchicalData } from './CountyHierarchicalData';
import { IgxPropertyEditorPanelComponent, IgxPropertyEditorPropertyDescriptionComponent } from 'igniteui-angular-layouts';
import { IgxTreemapComponent, TreemapHighlightingMode } from 'igniteui-angular-charts';

import { defineAllComponents } from 'igniteui-webcomponents';

defineAllComponents();

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})


export class AppComponent implements AfterViewInit
{			
	@ViewChild("treemap", { static: true } )
	private treemap: IgxTreemapComponent
    private _countyHierarchicalData: CountyHierarchicalData = null;
    public get countyHierarchicalData(): CountyHierarchicalData {
        if (this._countyHierarchicalData == null)
        {
            this._countyHierarchicalData = new CountyHierarchicalData();
        }
        return this._countyHierarchicalData;
    }    

    public onHighlightingModeChange(args: any){
        let value = args.target.value;

        if(value === "Brighten"){
            this.treemap.highlightingMode = TreemapHighlightingMode.Brighten;
        }
        else{
            this.treemap.highlightingMode = TreemapHighlightingMode.FadeOthers;
        }      
    }
		
	public constructor(private _detector: ChangeDetectorRef) 
	{
	}
	
	public ngAfterViewInit(): void 
	{	
	}
	

}

