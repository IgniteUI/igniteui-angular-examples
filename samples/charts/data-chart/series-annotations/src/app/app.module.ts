import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartAnnotationModule, IgxLegendModule, IgxCalloutLayerModule, IgxCrosshairLayerModule, IgxFinalValueLayerModule, IgxDataChartInteractivityModule } from "igniteui-angular-charts";
import { SharedData } from "./SharedData";


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
    IgxDataChartCategoryModule,
    IgxDataChartAnnotationModule,
    IgxLegendModule,
    IgxCalloutLayerModule,
    IgxCrosshairLayerModule,
    IgxFinalValueLayerModule,
    IgxDataChartInteractivityModule
],
  providers: [SharedData],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
