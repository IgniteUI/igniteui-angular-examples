// tslint:disable:max-line-length
import { NgModule } from "@angular/core";
import { NavigationStart, Router, RouterModule, Routes } from "@angular/router";
import "rxjs/add/operator/filter";
import { HomeComponent } from "./home/home.component";
import { DocsLayoutComponent } from "./index/docs-layout.component";
import { IndexComponent } from "./index/index.component";

export const samplesRoutes: Routes = [
    {
        component: HomeComponent,
        data: { displayName: "Home" },
        path: "home"
    },
    // note these section is auto-generated - do not change it:
    // Auto-Insert-Modules-Start
    { path: "charts", data: ["SamplesForCharts"], loadChildren: () => import("../samples/charts/samples-modules").then(m => m.SamplesForCharts) },
    { path: "maps", data: ["SamplesForMaps"], loadChildren: () => import("../samples/maps/samples-modules").then(m => m.SamplesForMaps) },
    { path: "gauges", data: ["SamplesForGauges"], loadChildren: () => import("../samples/gauges/samples-modules").then(m => m.SamplesForGauges) }

    // Auto-Insert-Modules-End

    // {
    //     data: ["ChartsModule"],
    //     loadChildren: () => import("./charts/charts.module").then(m => m.ChartsModule),
    //     path: "charts"
    // },
    // {
    //     data: ["ExcelLibraryModule"],
    //     loadChildren: () => import("./excel-library/excel-library.module").then(m => m.ExcelLibraryModule),
    //     path: "excel"
    // },
    // {
    //     data: ["GaugesModule"],
    //     loadChildren: () => import("./gauges/gauges.module").then(m => m.GaugesModule),
    //     path: "gauges"
    // },
    // {
    //     data: ["GeoMapModule"],
    //     loadChildren: () => import("./maps/geo-map.module").then(m => m.GeoMapModule),
    //     path: "maps"
    // },
    // {
    //     data: ["SpreadsheetModule"],
    //     loadChildren: () => import("./spreadsheet/spreadsheet.module").then(m => m.SpreadsheetModule),
    //     path: "excel"
    // }
];
export const appRoutes: Routes = [
    {
        path: "", pathMatch: "full", redirectTo: "/samples/home"
    },
    {
        children: samplesRoutes,
        component: DocsLayoutComponent,
        path: ""
    },
    {
        children: samplesRoutes,
        component: IndexComponent,
        path: "samples"
    }
];
@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })]
})
export class AppRoutingModule {

    constructor(private router: Router) {

        console.log("app routes = " + appRoutes.length);
        for (const route of appRoutes) {
            console.log("app routes patent path: " + route.path)
            if (route.children) {
                for (const child of route.children) {
                    console.log("app routes child path: " + child.path)
                }
            }
        }

        router.events
            .filter((event) => event instanceof NavigationStart)
            .subscribe((event: NavigationStart) => {
                console.log("app nav: " + event.url)
                this.setOverflow(event.url);
            });
    }

    public setOverflow(url: string) {
        if (url.endsWith("finjs-sample")) {
            document.body.style.overflow = "auto";
        } else {
            document.body.style.overflow = "hidden";
        }
    }
}
