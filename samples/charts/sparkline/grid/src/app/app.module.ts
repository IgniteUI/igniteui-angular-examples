import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxSparklineModule } from "igniteui-angular-charts";
import { IgxGridModule } from "igniteui-angular";
import { Products } from "./Products";

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
    IgxSparklineModule,
    IgxGridModule
],
  providers: [Products],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
