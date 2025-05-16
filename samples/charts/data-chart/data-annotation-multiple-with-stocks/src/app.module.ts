import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartCategoryCoreModule, IgxDataChartFinancialCoreModule, IgxDataChartFinancialModule, IgxDataChartFinancialOverlaysModule, IgxDataChartInteractivityModule, IgxDataChartAnnotationModule, IgxDataAnnotationStripLayerModule, IgxDataAnnotationSliceLayerModule, IgxDataAnnotationLineLayerModule, IgxNumberAbbreviatorModule, IgxAnnotationLayerProxyModule } from 'igniteui-angular-charts';

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
    IgxDataChartCategoryModule,
    IgxDataChartCategoryCoreModule,
    IgxDataChartFinancialCoreModule,
    IgxDataChartFinancialModule,
    IgxDataChartFinancialOverlaysModule,
    IgxDataChartInteractivityModule,
    IgxDataChartAnnotationModule,
    IgxDataAnnotationStripLayerModule,
    IgxDataAnnotationSliceLayerModule,
    IgxDataAnnotationLineLayerModule,
    IgxNumberAbbreviatorModule,
    IgxAnnotationLayerProxyModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
