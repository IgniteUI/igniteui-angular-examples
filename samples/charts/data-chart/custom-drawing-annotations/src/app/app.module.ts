import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartScatterCoreModule, IgxDataChartScatterModule, IgxNumberAbbreviatorModule, IgxDataChartInteractivityModule, IgxLegendModule, IgxDataChartToolbarModule, IgxDataChartCategoryModule, IgxDataChartCategoryCoreModule, IgxDataChartFinancialCoreModule, IgxDataChartFinancialModule, IgxDataChartFinancialOverlaysModule, IgxDataChartAnnotationModule } from "igniteui-angular-charts";

import { IgxToolbarModule } from "igniteui-angular-layouts";
import { StocksHistory } from "./StocksHistory";


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
    IgxToolbarModule,
    IgxLegendModule,
    IgxDataChartToolbarModule,
    IgxDataChartCoreModule,
    IgxDataChartCategoryModule,
    IgxDataChartCategoryCoreModule,
    IgxDataChartFinancialCoreModule,
    IgxDataChartFinancialModule,
    IgxDataChartFinancialOverlaysModule,
    IgxDataChartInteractivityModule,
    IgxDataChartAnnotationModule    
],
  providers: [StocksHistory],  
  schemas: []
})
export class AppModule {}
