import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import {
    IgxDataChartCoreModule,
    IgxLegendModule,
    IgxDataChartRadialModule,
    IgxDataChartRadialCoreModule,
    IgxDataChartInteractivityModule
 } from "igniteui-angular-charts";
import { SampleRadialData } from "./SampleRadialData";


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
    IgxLegendModule,
    IgxDataChartRadialModule,
    IgxDataChartRadialCoreModule,
    IgxDataChartInteractivityModule
],
  providers: [SampleRadialData],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
