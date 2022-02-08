import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxLegendModule, IgxDataChartCategoryModule, IgxDataChartInteractivityModule } from "igniteui-angular-charts";
import { SampleRangeData } from "./SampleRangeData";


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
    IgxDataChartCategoryModule,
    IgxDataChartInteractivityModule
],
  providers: [SampleRangeData],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
