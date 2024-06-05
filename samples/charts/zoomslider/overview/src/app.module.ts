import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxZoomSliderDynamicModule, IgxNumericYAxisModule, IgxNumericXAxisModule, IgxCrosshairLayerModule, IgxDataChartScatterModule, IgxDataChartScatterCoreModule, IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartCategoryCoreModule, IgxDataChartAnnotationModule, IgxDataChartInteractivityModule, IgxBubbleSeriesModule } from "igniteui-angular-charts";
import { IgxNumberAbbreviatorModule  } from "igniteui-angular-charts";
import { SampleScatterStats } from "./SampleScatterStats";


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
    IgxZoomSliderDynamicModule,
    IgxNumberAbbreviatorModule,
    IgxNumericYAxisModule,
    IgxNumericXAxisModule,
    IgxCrosshairLayerModule,
    IgxDataChartScatterModule,
    IgxDataChartScatterCoreModule,
    IgxDataChartCoreModule,
    IgxDataChartCategoryModule,
    IgxDataChartCategoryCoreModule,
    IgxDataChartAnnotationModule,
    IgxDataChartInteractivityModule,
    IgxBubbleSeriesModule
],
  providers: [SampleScatterStats],
schemas: []
})
export class AppModule {}
