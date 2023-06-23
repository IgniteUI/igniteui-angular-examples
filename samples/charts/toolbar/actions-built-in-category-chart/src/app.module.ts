import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";


import { IgxLegendModule, IgxCategoryChartModule, IgxCategoryChartToolbarModule } from 'igniteui-angular-charts';
import { IgxToolbarModule } from 'igniteui-angular-layouts';

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
    IgxLegendModule,
    IgxToolbarModule,
    IgxCategoryChartModule,
    IgxCategoryChartToolbarModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
