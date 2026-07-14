// tslint:disable:max-line-length
import { NgModule } from "@angular/core";
import { NavigationStart, Router, RouterModule, Routes } from "@angular/router";
import { filter } from 'rxjs/operators';
import { HomeComponent } from "./home/home.component";
import { FallbackComponent } from "./fallback/fallback.component";
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
    { path: "excel", data: ["SamplesForExcel"], loadChildren: () => import("../samples/excel/samples-modules").then(m => m.SamplesForExcel) },
    { path: "gauges", data: ["SamplesForGauges"], loadChildren: () => import("../samples/gauges/samples-modules").then(m => m.SamplesForGauges) },
    { path: "inputs", data: ["SamplesForInputs"], loadChildren: () => import("../samples/inputs/samples-modules").then(m => m.SamplesForInputs) },
    { path: "maps", data: ["SamplesForMaps"], loadChildren: () => import("../samples/maps/samples-modules").then(m => m.SamplesForMaps) }


    // Auto-Insert-Modules-End

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
    },
    {
        path: '**',
        component: FallbackComponent
    }
];
@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(appRoutes)]
})
export class AppRoutingModule {

    constructor(private router: Router) {

        // console.log("app routes = " + appRoutes.length);
        // for (const route of appRoutes) {
        //     console.log("app routes patent path: " + route.path)
        //     if (route.children) {
        //         for (const child of route.children) {
        //             console.log("app routes child path: " + child.path)
        //         }
        //     }
        // }

        router.events.pipe(
            filter((event) => event instanceof NavigationStart)
        )
            .subscribe((event: NavigationStart) => {
                // console.log("app nav: " + event.url)
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
