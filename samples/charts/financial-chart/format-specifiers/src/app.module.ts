import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxFinancialChartModule, IgxDataChartInteractivityModule, IgxDataLegendModule } from 'igniteui-angular-charts';
import { IgxNumberFormatSpecifierModule, IgxDateTimeFormatSpecifierModule } from 'igniteui-angular-core';

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
    IgxFinancialChartModule,
    IgxDataChartInteractivityModule,
    IgxDataLegendModule,
    IgxNumberFormatSpecifierModule,
    IgxDateTimeFormatSpecifierModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
