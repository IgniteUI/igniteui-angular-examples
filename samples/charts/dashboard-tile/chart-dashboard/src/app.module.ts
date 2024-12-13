import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDashboardTileModule, IgxDataChartDashboardTileModule, IgxGeographicMapDashboardTileModule, IgxLinearGaugeDashboardTileModule, IgxPieChartDashboardTileModule, IgxRadialGaugeDashboardTileModule } from 'igniteui-angular-dashboards';

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
    IgxGridModule,
    IgxDashboardTileModule,
    IgxDataChartDashboardTileModule,
    IgxGeographicMapDashboardTileModule,
    IgxLinearGaugeDashboardTileModule,
    IgxPieChartDashboardTileModule,
    IgxRadialGaugeDashboardTileModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
