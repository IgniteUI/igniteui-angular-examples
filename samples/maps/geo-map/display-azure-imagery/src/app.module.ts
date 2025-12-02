import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

// Ignite UI Maps & Charts
import { IgxAzureMapsImageryModule, IgxGeographicMapModule } from "igniteui-angular-maps";
import { IgxDataChartInteractivityModule } from "igniteui-angular-charts";

// Ignite UI Angular components
import { IgxButtonModule, IgxDialogModule, IgxIconModule, IgxInputGroupModule, IgxSelectModule } from "igniteui-angular";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxGeographicMapModule,
    IgxAzureMapsImageryModule,
    IgxDataChartInteractivityModule,
    IgxDialogModule,
    IgxInputGroupModule,
    IgxIconModule,
    IgxButtonModule,
    IgxSelectModule       // <-- Add this for the dropdown combo
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // <-- Needed to allow Web Components like igx-combo
})
export class AppModule {}
