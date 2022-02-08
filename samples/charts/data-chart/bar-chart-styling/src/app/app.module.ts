import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import {
    IgxDataChartCoreModule,
    IgxDataChartVerticalCategoryModule,
    IgxDataChartAnnotationModule,
    IgxLegendModule,
    IgxDataChartInteractivityModule,
    IgxCalloutLayerModule
 } from "igniteui-angular-charts";


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
    IgxDataChartVerticalCategoryModule,
    IgxDataChartAnnotationModule,
    IgxLegendModule,
    IgxDataChartInteractivityModule,
    IgxCalloutLayerModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
