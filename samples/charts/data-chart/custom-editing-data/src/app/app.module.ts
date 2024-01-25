import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartScatterCoreModule, IgxDataChartScatterModule, IgxNumberAbbreviatorModule, IgxDataChartInteractivityModule, IgxLegendModule, IgxDataChartCategoryModule, IgxDataChartAnnotationModule, IgxAnnotationLayerProxyModule } from "igniteui-angular-charts";
import { EditableDataSource } from "./EditableDataSource";


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
    IgxLegendModule,
    IgxDataChartCoreModule,
    IgxDataChartCategoryModule,
    IgxDataChartScatterCoreModule,
    IgxDataChartScatterModule,
    IgxDataChartInteractivityModule,
    IgxDataChartAnnotationModule,
    IgxAnnotationLayerProxyModule,
    IgxNumberAbbreviatorModule
],
  providers: [EditableDataSource],  
  schemas: []
})
export class AppModule {}
