import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import {
    IgxButtonModule, IgxIconModule, IgxInputGroupModule,
    IgxLayoutModule, IgxNavbarModule, IgxNavigationDrawerModule, IgxRippleModule
} from "igniteui-angular";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { DocsLayoutComponent } from "./index/docs-layout.component";
import { IndexComponent } from "./index/index.component";
import { FallbackComponent } from './fallback/fallback.component';

@NgModule({ 
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        HomeComponent,
        DocsLayoutComponent,
        IndexComponent,
        FallbackComponent
    ], 
    imports: [AppRoutingModule,
        RouterModule,
        IgxRippleModule,
        IgxNavbarModule,
        IgxNavigationDrawerModule,
        IgxIconModule,
        IgxLayoutModule,
        IgxInputGroupModule,
        BrowserModule,
        BrowserAnimationsModule,
        IgxButtonModule,
        FormsModule], 
    providers: [provideHttpClient(withInterceptorsFromDi())],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
