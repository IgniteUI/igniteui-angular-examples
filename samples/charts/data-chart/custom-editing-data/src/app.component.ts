import { Component, ViewChild } from "@angular/core";
import { IgxDataChartComponent, IgxNumericXAxisComponent, IgxNumericYAxisComponent, IgxLegendComponent, IgxDataChartMouseButtonEventArgs, IgxPlotAreaMouseButtonEventArgs, IgxPlotAreaMouseEventArgs } from "igniteui-angular-charts";
import { EditableDataSource } from "./EditableDataSource";

@Component({
    standalone: false,
    providers: [ EditableDataSource ],
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    @ViewChild("lineChart", { static: true })
    public lineChart: IgxDataChartComponent;
    @ViewChild("scatterChart", { static: true })
    public scatterChart: IgxDataChartComponent;
    @ViewChild("legend", { static: true })
    public legend: IgxLegendComponent;
    @ViewChild("lineXAxis", { static: true })
    public lineXAxis: IgxNumericXAxisComponent;
    @ViewChild("lineYAxis", { static: true })
    public lineYAxis: IgxNumericYAxisComponent;
    @ViewChild("scatterXAxis", { static: true })
    public scatterXAxis: IgxNumericXAxisComponent;
    @ViewChild("scatterYAxis", { static: true })
    public scatterYAxis: IgxNumericYAxisComponent;

    public lineData: any[];
    public scatterData: any[];    

    private lineSeriesEditingActive = false;
    private lineSeriesEditingIndex = -1;

    private scatterLineEditingActive = false;
    private scatterLineEditingIndex = -1;

    constructor() {      
        this.lineData = EditableDataSource.getLineData();
        this.scatterData = EditableDataSource.getScatterData();  
    }    

    public onLineChartMouseDown(e: IgxDataChartMouseButtonEventArgs){
        this.lineSeriesEditingActive = true;
        this.lineSeriesEditingIndex = -1;

        var itemData = e.item;
        
        for(var i=0; i<this.lineData.length; i++){
            
            var lineDataItem = this.lineData[i];            
            var newItemData = { Category: lineDataItem.Category, DataValue: lineDataItem.DataValue, EditingValue: lineDataItem.EditingValue };   

            newItemData.EditingValue = null;

            if(lineDataItem.Category === itemData.Category){
                this.lineSeriesEditingIndex = i;
            }

            this.lineChart.notifySetItem(this.lineData, i, lineDataItem, newItemData);
        }
    }

    public onLineChartMouseMove(e: IgxPlotAreaMouseEventArgs) {
        if (this.lineSeriesEditingIndex !== -1) {
            var index = this.lineSeriesEditingIndex;

            var oldItem = this.lineData[index];
            var newItem = { Category: oldItem.Category, DataValue: oldItem.DataValue, EditingValue: oldItem.EditingValue };

            if (!this.lineSeriesEditingActive) {
                newItem.EditingValue = null;
                this.lineChart.notifySetItem(this.lineData, index, oldItem, newItem);
            }
            else {
                var y = this.lineYAxis.unscaleValue(e.chartPosition.y);

                newItem.DataValue = y;
                newItem.EditingValue = y;

                oldItem.DataValue = y;
                oldItem.EditingValue = y;

                this.lineChart.notifySetItem(this.lineData, index, oldItem, newItem);
            }
        }
    }

    public onLineChartMouseUp(e: IgxPlotAreaMouseButtonEventArgs){
        this.lineSeriesEditingActive = false;
    }

    public onScatterChartMouseDown(e: IgxDataChartMouseButtonEventArgs){
        this.scatterLineEditingActive = true;
        this.scatterLineEditingIndex = -1;

        var itemData = e.item;
        
        for(var i=0; i<this.scatterData.length; i++){
            
            var scatterDataItem = this.scatterData[i];            
            var newItemData = { X: scatterDataItem.X, Y: scatterDataItem.Y, EditingX: scatterDataItem.EditingX, EditingY: scatterDataItem.EditingY };   

            newItemData.EditingX = null;
            newItemData.EditingY = null;

            if(scatterDataItem.X === itemData.X && scatterDataItem.Y === itemData.Y){
                this.scatterLineEditingIndex = i;
            }

            this.scatterChart.notifySetItem(this.lineData, i, scatterDataItem, newItemData);
        }
    }

    public onScatterChartMouseMove(e: IgxPlotAreaMouseEventArgs){
        if (this.scatterLineEditingIndex !== -1) {
            var index = this.scatterLineEditingIndex;

            var oldItem = this.scatterData[index];
            var newItem = { X: oldItem.X, Y: oldItem.Y, EditingX: oldItem.EditingX, EditingY: oldItem.EditingY };

            if (!this.scatterLineEditingActive) {
                newItem.EditingX = null;
                newItem.EditingY = null;
                this.scatterChart.notifySetItem(this.scatterData, index, oldItem, newItem);
            }
            else {
                var x = this.scatterXAxis.unscaleValue(e.chartPosition.x);
                var y = this.scatterYAxis.unscaleValue(e.chartPosition.y);

                newItem.X = x;
                newItem.EditingX = x;

                newItem.Y = y;
                newItem.EditingY = y;

                oldItem.X = x;
                oldItem.EditingX = x;

                oldItem.Y = y;
                oldItem.EditingY = y;

                this.scatterChart.notifySetItem(this.scatterData, index, oldItem, newItem);
            }
        }
    }

    public onScatterChartMouseUp(e: IgxPlotAreaMouseButtonEventArgs){
        this.scatterLineEditingActive = false;
    }
}
