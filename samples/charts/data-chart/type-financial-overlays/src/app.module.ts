import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxNumericXAxisModule, IgxNumericYAxisModule, IgxMoneyFlowIndexIndicatorModule, IgxLegendModule, IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxFinancialPriceSeriesModule } from "igniteui-angular-charts";
import { SampleFinancialData } from "./SampleFinancialData";


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
    IgxNumericXAxisModule,
    IgxNumericYAxisModule,
    IgxMoneyFlowIndexIndicatorModule,
    IgxLegendModule,
    IgxDataChartCoreModule,
    IgxDataChartCategoryModule,
    IgxFinancialPriceSeriesModule
],
  providers: [SampleFinancialData],
schemas: []
})
export class AppModule {}
