import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import {
    IgxFinancialChartModule,
    IgxLegendModule
 } from "igniteui-angular-charts";
import { GenerateHourlyPricesService } from "./GenerateHourlyPricesService";


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,

],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxFinancialChartModule,
    IgxLegendModule
],
  providers: [GenerateHourlyPricesService],
  entryComponents: [],
  schemas: []
})
export class AppModule {}