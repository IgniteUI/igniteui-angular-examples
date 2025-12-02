import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxToolbarModule } from 'igniteui-angular-layouts';
import { IgxColorEditorModule } from 'igniteui-angular-inputs';

import { 
  IgxAnnotationLayerProxyModule, 
  IgxDataChartToolbarModule, 
  IgxDataChartCoreModule, 
  IgxDataChartCategoryModule,
  IgxDataChartInteractivityModule,
  IgxDataChartAnnotationDynamicModule, 
  IgxDataChartCategoryTrendLineModule 
} from 'igniteui-angular-charts';

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
    IgxToolbarModule,
    IgxDataChartToolbarModule,
    IgxDataChartCoreModule,
    IgxDataChartCategoryModule,
    IgxDataChartAnnotationDynamicModule,
    IgxDataChartInteractivityModule,
    IgxAnnotationLayerProxyModule,
    IgxDataChartCategoryTrendLineModule,
    IgxColorEditorModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
