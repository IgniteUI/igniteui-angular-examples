import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxDataChartCoreModule, IgxDataChartShapeModule, IgxDataChartShapeCoreModule, IgxLegendModule, IgxDataChartScatterModule } from "igniteui-angular-charts";

import { SampleShapeData } from "./SampleShapeData";


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxDataChartCoreModule,
    IgxDataChartShapeModule,
    IgxDataChartShapeCoreModule,
    IgxLegendModule,

    IgxDataChartScatterModule
],
  providers: [SampleShapeData],
schemas: []
})
export class AppModule {}
