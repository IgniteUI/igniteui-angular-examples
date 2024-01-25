import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxPropertyEditorPanelModule } from 'igniteui-angular-layouts';
import { IgxDataLegendModule, IgxCategoryChartModule } from 'igniteui-angular-charts';
import { IgxNumberFormatSpecifierModule } from 'igniteui-angular-core';

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
    IgxPropertyEditorPanelModule,
    IgxDataLegendModule,
    IgxCategoryChartModule,
    IgxNumberFormatSpecifierModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
