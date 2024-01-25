import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxLegendModule, IgxDataChartScatterCoreModule, IgxDataChartScatterModule, IgxTimeXAxisModule, IgxCategoryXAxisModule, IgxCategoryYAxisModule, IgxNumericXAxisModule, IgxNumericYAxisModule, IgxNumericAngleAxisModule, IgxNumericRadiusAxisModule, IgxCategoryAngleAxisModule } from "igniteui-angular-charts";
import { SampleFinancialData } from "./SampleFinancialData";
import { SampleCategoryData } from "./SampleCategoryData";
import { SampleScatterData } from "./SampleScatterData";


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
    IgxLegendModule,
    IgxDataChartScatterCoreModule,
    IgxDataChartScatterModule,
    IgxTimeXAxisModule,
    IgxCategoryXAxisModule,
    IgxCategoryYAxisModule,
    IgxNumericXAxisModule,
    IgxNumericYAxisModule,
    IgxNumericAngleAxisModule,
    IgxNumericRadiusAxisModule,
    IgxCategoryAngleAxisModule
],
  providers: [
    SampleFinancialData,
    SampleCategoryData,
    SampleScatterData
],
schemas: []
})
export class AppModule {}
