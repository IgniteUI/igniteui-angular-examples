import { Component, ViewChild } from "@angular/core";
import { IgxDataChartComponent, IgxLegendComponent, IgxNumericXAxisComponent, IgxNumericYAxisComponent, IgxPlotAreaMouseButtonEventArgs, IgxPlotAreaMouseEventArgs } from "igniteui-angular-charts";
import { IgPoint } from "igniteui-angular-core";
import { StocksHistory } from "./StocksHistory";
import { IgxToolCommandEventArgs, IgxToolActionLabelComponent } from "igniteui-angular-layouts";

@Component({
    providers: [ StocksHistory ],
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    @ViewChild("chart", { static: true })
    public chart: IgxDataChartComponent;
    @ViewChild("legend", { static: true })
    public legend: IgxLegendComponent;
    @ViewChild("xAxis", { static: true })
    public xAxis: IgxNumericXAxisComponent;
    @ViewChild("yAxis", { static: true })
    public yAxis: IgxNumericYAxisComponent;
    @ViewChild("drawRangeAreaToolAction", { static: true})    
    public drawRangeAreaToolAction: IgxToolActionLabelComponent;    
    @ViewChild("drawSlopeLineToolAction", { static: true})    
    public drawSlopeLineToolAction: IgxToolActionLabelComponent;    
    @ViewChild("drawHorizontalLineToolAction", { static: true})    
    public drawHorizontalLineToolAction: IgxToolActionLabelComponent;    

    public data: any[];
    public horizontalLineData: any[];
    public slopeLineData: any[];
    public rangeAreaData: any[];

    private axisMinValue: number;
    private axisMaxValue: number;

    private chartMouseDownLocation: IgPoint;
    private chartMouseMoveLocation: IgPoint;

    private drawMode: string;

    private isAxisRangeInitialized: boolean;
    private isDrawingHorizontalLine: boolean;
    private isDrawingRangeArea: boolean;
    private isDrawingSlopeLine: boolean;    

    constructor() {

        StocksHistory.getMicrosoftStock().then((stocks: any[]) => {
            this.data = stocks;                                
            this.plotHorizontalLine(38, true);
            this.plotRangeArea(50, 60, true);
            this.plotSlopeLine({x: 0, y:45}, {x: this.data.length - 1, y: 80}, true);
        });

        this.onChartMouseLeftButtonDown = this.onChartMouseLeftButtonDown.bind(this);
        this.onChartMouseLeftButtonUp = this.onChartMouseLeftButtonUp.bind(this);
        this.onChartMouseOver = this.onChartMouseOver.bind(this);
        this.onToolbarCommandChanged = this.onToolbarCommandChanged.bind(this);
        this.initializeAxisRange = this.initializeAxisRange.bind(this);
    }

    public onChartMouseLeftButtonDown(e: IgxPlotAreaMouseButtonEventArgs){
        this.initializeAxisRange();        
        if (!this.isAxisRangeInitialized) return;    

        if (this.drawMode == "DrawHorizontalLine") this.isDrawingHorizontalLine = true; 
        if (this.drawMode == "DrawSlopeLine") this.isDrawingSlopeLine = true; 
        if (this.drawMode == "DrawRangeArea") this.isDrawingRangeArea = true; 

        this.chartMouseDownLocation = this.getDataLocation(e.plotAreaPosition); 
        this.chartMouseMoveLocation = this.getDataLocation(e.plotAreaPosition); 

        this.plotRangeArea(this.chartMouseDownLocation.y, this.chartMouseMoveLocation.y, false); 
        this.plotSlopeLine(this.chartMouseDownLocation, this.chartMouseMoveLocation, false); 
        this.plotHorizontalLine(this.chartMouseMoveLocation.y, false); 
    }

    public onChartMouseOver(e: IgxPlotAreaMouseEventArgs){
        if (!this.isAxisRangeInitialized) return; 

        this.chartMouseMoveLocation = this.getDataLocation(e.plotAreaPosition);        

        this.plotRangeArea(this.chartMouseDownLocation.y, this.chartMouseMoveLocation.y, false); 
        this.plotSlopeLine(this.chartMouseDownLocation, this.chartMouseMoveLocation, false); 
        this.plotHorizontalLine(this.chartMouseMoveLocation.y, false);         
    }

    public onChartMouseLeftButtonUp(e: IgxPlotAreaMouseButtonEventArgs){
        this.isDrawingSlopeLine = false;
        this.isDrawingRangeArea = false;
        this.isDrawingHorizontalLine = false;   
    }

    public initializeAxisRange(){
        if (this.isAxisRangeInitialized) return;
        this.isAxisRangeInitialized = true;        

        this.axisMaxValue = this.yAxis.actualMaximumValue;
        this.axisMinValue = this.yAxis.actualMinimumValue;        

        this.yAxis.maximumValue = this.axisMaxValue;
        this.yAxis.minimumValue = this.axisMinValue;
    }

    public getDataLocation(chartPixel: IgPoint): IgPoint
    {    
        var x = this.xAxis.unscaleValue(chartPixel.x);
        var y = this.yAxis.unscaleValue(chartPixel.y);

        return {x: x, y: y};
    }

    public plotHorizontalLine(value: number, forceRender: boolean){
        if(!forceRender){
            if(!this.isAxisRangeInitialized) return;
            if(!this.isDrawingHorizontalLine) return;
        }

        let dataPoints: any[] = [];

        for(let i=0; i<this.data.length; i++){
            let point: IgPoint = { x: i, y: value};
            dataPoints.push(point);            
        }

        this.horizontalLineData = dataPoints;        
    }

    public plotSlopeLine(start: IgPoint, end: IgPoint, forceRender: boolean){
        if(!forceRender){
            if(!this.isAxisRangeInitialized) return;
            if(!this.isDrawingSlopeLine) return;
        }

        let slope = 0.0;
        let offset = end.y;

        if(Math.abs(end.x - start.x) > 0.01){
            slope = (end.y - start.y) / (end.x - start.x);
            offset = end.y - (end.x  * slope);
        }

        let dataPoints: any[] = [];

        for(let i=0; i<this.data.length; i++){
            let y = (slope * i) + offset;
            let point: IgPoint = {x: i, y: y};
            dataPoints.push(point);
        }

        this.slopeLineData = dataPoints;        
    }

    public plotRangeArea(start: number, end: number, forceRender: boolean){
        if(!forceRender){
            if(!this.isAxisRangeInitialized) return;
            if(!this.isDrawingRangeArea) return;
        }

        let low = Math.min(end, start);
        let high = Math.max(end, start);

        let dataPoints: any[] = [];

        for(let i=0; i<this.data.length; i++){
            let point: any = {low: low, high: high};            
            dataPoints.push(point);
        }

        this.rangeAreaData = dataPoints;        
    }         

    public onFormatXAxisLabel(item: any): string{
        
        let year = item.date.getFullYear();
        let monthString: string = "";
        let dayString: string = "";        

        if((item.date.getMonth() + 1) < 10){
            monthString = "0" + (item.date.getMonth() + 1);
        }
        else{
            monthString = item.date.getMonth() + 1;
        }

        if((item.date.getDay() + 1) < 10){
            dayString = "0" + (item.date.getDay() + 1);
        }
        else{
            dayString = item.date.getDay() + 1;
        }

        return year + "-" + monthString + "-" + dayString;
    }

    public onToolbarCommandChanged(e: IgxToolCommandEventArgs){        
        this.updateDrawMode(e.command.commandId);
    }

    public updateDrawMode(selectedDrawMode: string) {
        switch (selectedDrawMode) {
            case "DrawRangeArea":
                this.drawMode = "DrawRangeArea";
                this.drawHorizontalLineToolAction.textStyle = "13px Verdana";
                this.drawSlopeLineToolAction.textStyle = "13px Verdana";
                this.drawRangeAreaToolAction.textStyle = "800 13px Verdana";
                break;

            case "DrawSlopeLine":
                this.drawMode = "DrawSlopeLine";
                this.drawHorizontalLineToolAction.textStyle = "13px Verdana";
                this.drawSlopeLineToolAction.textStyle = "800 13px Verdana";
                this.drawRangeAreaToolAction.textStyle = "13px Verdana";
                break;

            case "DrawHorizontalLine":
                this.drawMode = "DrawHorizontalLine";
                this.drawHorizontalLineToolAction.textStyle = "800 13px Verdana";
                this.drawSlopeLineToolAction.textStyle = "13px Verdana";
                this.drawRangeAreaToolAction.textStyle = "13px Verdana";
                break;
        }
    }  
}
