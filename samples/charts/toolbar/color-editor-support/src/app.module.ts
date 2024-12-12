import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxXIconModule } from 'igniteui-angular-inputs';
import { IgxToolbarModule, IgxToolActionComboModule, IgxToolActionColorEditorModule } from 'igniteui-angular-layouts';
import { IgxDataChartToolbarModule, IgxDataLegendModule, IgxNumberAbbreviatorModule, IgxDataChartCategoryModule, IgxDataChartCoreModule, IgxDataChartAnnotationModule, IgxDataChartInteractivityModule } from 'igniteui-angular-charts';

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
    IgxXIconModule,
    IgxToolbarModule,
    IgxToolActionComboModule,
    IgxToolActionColorEditorModule,
    IgxDataChartToolbarModule,
    IgxDataLegendModule,
    IgxNumberAbbreviatorModule,
    IgxDataChartCategoryModule,
    IgxDataChartCoreModule,
    IgxDataChartCategoryModule,
    IgxDataChartAnnotationModule,
    IgxDataChartInteractivityModule,
    IgxDataChartAnnotationModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
