import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxBulletGraphModule } from "igniteui-angular-gauges";

import { IgxButtonModule } from "igniteui-angular";


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
    IgxBulletGraphModule,
    IgxButtonModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
