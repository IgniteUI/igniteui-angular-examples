import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxNumericXAxisModule,
	IgxNumericYAxisModule,
	IgxMoneyFlowIndexIndicatorModule,
	IgxLegendModule,
	IgxDataChartCoreModule,
	IgxDataChartCategoryModule,
	IgxDataChartInteractivityModule,
	IgxFinancialPriceSeriesModule
 } from "igniteui-angular-charts";
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
	IgxNumericXAxisModule,
	IgxNumericYAxisModule,
	IgxMoneyFlowIndexIndicatorModule,
	IgxLegendModule,
	IgxDataChartCoreModule,
	IgxDataChartCategoryModule,
	IgxDataChartInteractivityModule,
	IgxFinancialPriceSeriesModule
],
  providers: [SampleFinancialData],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
