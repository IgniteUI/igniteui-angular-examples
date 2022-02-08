import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxFinancialChartModule } from "igniteui-angular-charts";
import { IgxSliderModule } from "igniteui-angular";


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,

],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxFinancialChartModule,
    IgxSliderModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
