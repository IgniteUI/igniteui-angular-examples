import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxLegendModule, IgxDataChartPolarModule, IgxDataChartPolarCoreModule, IgxDataChartInteractivityModule } from "igniteui-angular-charts";
import { SamplePolarData } from "./SamplePolarData";


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
    IgxLegendModule,
    IgxDataChartPolarModule,
    IgxDataChartPolarCoreModule,
    IgxDataChartInteractivityModule
],
  providers: [SamplePolarData],
schemas: []
})
export class AppModule {}
