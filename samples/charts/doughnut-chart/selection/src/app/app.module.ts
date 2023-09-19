import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDoughnutChartModule, IgxRingSeriesModule, IgxLegendModule, IgxItemLegendModule } from "igniteui-angular-charts";


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
    IgxDoughnutChartModule,
    IgxRingSeriesModule,
    IgxLegendModule,
    IgxItemLegendModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
