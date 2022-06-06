import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";


import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { IgxPropertyEditorModule } from 'igniteui-angular-grids';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxCategoryChartModule,
    IgxPropertyEditorModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
