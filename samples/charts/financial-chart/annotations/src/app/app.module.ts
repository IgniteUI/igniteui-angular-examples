import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxFinancialChartModule, IgxLegendModule } from "igniteui-angular-charts";
import { StocksUtility } from "./StocksUtility";


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
    IgxFinancialChartModule,
    IgxLegendModule
],
  providers: [StocksUtility],
schemas: []
})
export class AppModule {}
