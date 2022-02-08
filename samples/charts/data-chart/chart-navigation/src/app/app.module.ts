import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartScatterCoreModule, IgxDataChartScatterModule, IgxLegendModule, IgxNumberAbbreviatorModule, IgxDataChartInteractivityModule } from "igniteui-angular-charts";
import { SampleScatterStats } from "./SampleScatterStats";


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
    IgxDataChartScatterCoreModule,
    IgxDataChartScatterModule,
    IgxLegendModule,
    IgxNumberAbbreviatorModule,
    IgxDataChartInteractivityModule
],
  providers: [SampleScatterStats],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
