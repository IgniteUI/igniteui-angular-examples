import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartTypeScatterShapeSeriesComponent } from "./data-chart-type-scatter-shape-series/data-chart-type-scatter-shape-series.component";
import {
    IgxDataChartCoreModule,
    IgxDataChartShapeModule,
    IgxDataChartShapeCoreModule,
    IgxLegendModule,
    IgxDataChartScatterModule
 } from "igniteui-angular-charts";

import { SampleShapeData } from "./SampleShapeData";


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    DataChartTypeScatterShapeSeriesComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxDataChartCoreModule,
    IgxDataChartShapeModule,
    IgxDataChartShapeCoreModule,
    IgxLegendModule,

    IgxDataChartScatterModule
],
  providers: [SampleShapeData],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
