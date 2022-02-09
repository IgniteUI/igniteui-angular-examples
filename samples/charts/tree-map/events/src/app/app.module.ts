import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxTreemapModule } from "igniteui-angular-charts";
import { IgxButtonModule } from "igniteui-angular";


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,

],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxTreemapModule,
    IgxButtonModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
