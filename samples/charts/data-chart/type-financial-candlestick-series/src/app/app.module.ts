import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxLegendModule, IgxIndicatorsModule, IgxFinancialPriceSeriesModule, IgxDataChartInteractivityModule, IgxBollingerBandsOverlayModule, IgxNumericXAxisModule, IgxNumericYAxisModule, IgxCategoryXAxisModule } from "igniteui-angular-charts";
import { SampleFinancialData } from "./SampleFinancialData";


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
    IgxLegendModule,
    IgxIndicatorsModule,
    IgxFinancialPriceSeriesModule,
    IgxDataChartInteractivityModule,
    IgxBollingerBandsOverlayModule,
    IgxNumericXAxisModule,
    IgxNumericYAxisModule,
    IgxCategoryXAxisModule
],
  providers: [SampleFinancialData],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
