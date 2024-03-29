import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxLegendModule, IgxDataChartCategoryModule, IgxDataChartInteractivityModule } from "igniteui-angular-charts";
import { SampleRangeData } from "./SampleRangeData";


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
    IgxDataChartCategoryModule,
    IgxDataChartInteractivityModule
],
  providers: [SampleRangeData],
schemas: []
})
export class AppModule {}
