import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { MapDisplayImageryEsriTiles } from "./maps/MapDisplayImageryEsriTiles/component";
import { IgxGeographicMapModule } from "igniteui-angular-maps";


@NgModule({
  bootstrap: [AppComponent]
  declarations: [
    AppComponent,
    MapDisplayImageryEsriTiles
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxGeographicMapModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
