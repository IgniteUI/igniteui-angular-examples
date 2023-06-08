import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxToolbarModule } from 'igniteui-angular-layouts';
import { IgxDataChartToolbarModule, IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartAnnotationModule, IgxDataChartInteractivityModule, IgxAnnotationLayerProxyModule } from 'igniteui-angular-charts';

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
    IgxToolbarModule,
    IgxDataChartToolbarModule,
    IgxDataChartCoreModule,
    IgxDataChartCategoryModule,
    IgxDataChartAnnotationModule,
    IgxDataChartInteractivityModule,
    IgxAnnotationLayerProxyModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}