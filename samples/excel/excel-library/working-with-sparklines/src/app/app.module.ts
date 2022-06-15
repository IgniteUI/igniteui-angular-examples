import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxButtonModule, IgxGridModule } from "igniteui-angular";
import { IgxCategoryChartModule, IgxDataChartCategoryModule, IgxDataChartCoreModule, IgxDataChartInteractivityModule } from "igniteui-angular-charts";
import { IgxExcelModule } from "igniteui-angular-excel";
import { ExcelUtility } from "./ExcelUtility";

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
    IgxButtonModule,
    IgxCategoryChartModule,
    IgxGridModule,
    IgxExcelModule,
    IgxDataChartCategoryModule,
    IgxDataChartCoreModule,
    IgxDataChartInteractivityModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
