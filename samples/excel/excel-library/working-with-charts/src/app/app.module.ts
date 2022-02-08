import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxButtonModule } from "igniteui-angular";
import { IgxCategoryChartModule } from "igniteui-angular-charts";
import { ExcelUtility } from "./ExcelUtility";


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,

],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxButtonModule,
    IgxCategoryChartModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
