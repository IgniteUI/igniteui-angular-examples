import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxLegendModule, IgxCalloutLayerModule, IgxDataChartInteractivityModule, IgxDataChartAnnotationModule, IgxNumberAbbreviatorModule, IgxDataChartCategoryCoreModule } from "igniteui-angular-charts";


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,

],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxDataChartCoreModule,
    IgxDataChartCategoryModule,
    IgxDataChartCategoryCoreModule,
    IgxLegendModule,
    IgxCalloutLayerModule,
    IgxDataChartInteractivityModule,
    IgxDataChartAnnotationModule,
    IgxNumberAbbreviatorModule,
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
