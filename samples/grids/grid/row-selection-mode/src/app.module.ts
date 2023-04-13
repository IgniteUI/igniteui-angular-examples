import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";


import { IgxWebBadgeModule } from 'igniteui-angular-webinputs';
import { IgxWebGridModule } from 'igniteui-angular-grids';
import { IgxPropertyEditorPanelModule } from 'igniteui-angular-layouts';

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
    IgxWebBadgeModule,
    IgxWebGridModule,
    IgxPropertyEditorPanelModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
