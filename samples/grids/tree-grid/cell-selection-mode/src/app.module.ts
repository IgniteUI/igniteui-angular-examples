import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";


import { IgxPropertyEditorPanelModule } from 'igniteui-angular-layouts';
import { IgxWebTreeGridModule } from 'igniteui-angular-grids';

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
    IgxPropertyEditorPanelModule,
    IgxWebTreeGridModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
