import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import {
    IgxDataChartCoreModule,
    IgxDataChartScatterModule,
    IgxDataChartScatterCoreModule,
    IgxLegendModule,
    IgxScatterContourSeriesModule,
    IgxScatterAreaSeriesModule,
    IgxDataChartInteractivityModule
 } from "igniteui-angular-charts";
import { SampleScatterData } from "./SampleScatterData";


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,

],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxDataChartCoreModule,
    IgxDataChartScatterModule,
    IgxDataChartScatterCoreModule,
    IgxLegendModule,
    IgxScatterContourSeriesModule,
    IgxScatterAreaSeriesModule,
    IgxDataChartInteractivityModule
],
  providers: [SampleScatterData],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
