import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartScatterCoreModule, IgxDataChartScatterModule, IgxNumberAbbreviatorModule, IgxDataChartInteractivityModule, IgxLegendModule } from "igniteui-angular-charts";
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
    IgxDataChartCoreModule,
    IgxDataChartScatterCoreModule,
    IgxDataChartScatterModule,
    IgxNumberAbbreviatorModule,
    IgxDataChartInteractivityModule,
    IgxLegendModule
],
  providers: [SampleScatterStats],
schemas: []
})
export class AppModule {}
