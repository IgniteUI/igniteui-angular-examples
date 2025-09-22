import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxAzureMapsMapImageryModule, IgxGeographicMapModule } from "igniteui-angular-maps";
import { IgxDataChartInteractivityModule } from "igniteui-angular-charts";
import { IgxDialogModule, IgxIconModule, IgxInputGroupModule } from "igniteui-angular";


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
    IgxGeographicMapModule,
    IgxAzureMapsMapImageryModule,
    IgxDataChartInteractivityModule,
    IgxDialogModule, 
    IgxInputGroupModule,
    IgxIconModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
