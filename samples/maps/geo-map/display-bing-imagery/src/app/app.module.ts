import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { MapDisplayImageryBingTiles } from "./maps/MapDisplayImageryBingTiles/component";
import { IgxGeographicMapModule } from "igniteui-angular-maps";


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    MapDisplayImageryBingTiles
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxGeographicMapModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
