import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { NavigationStart, Route, Router } from "@angular/router";
// import { IgxNavigationDrawerComponent } from "igniteui-angular";
import { filter } from "rxjs/operators";

// const BrowserInfo = require("./assets/BrowserInfo.json"); // auto-generated
import BrowserInfo  from "../../browser-info.json";

// note these section is auto-generated - do not change it:
// Auto-Insert-Imports-RoutingData-Start
import { RoutingDataForCharts } from "../../samples/charts/routing-data";
import { RoutingDataForExcel } from "../../samples/excel/routing-data";
import { RoutingDataForMaps } from "../../samples/maps/routing-data";
import { RoutingDataForGauges } from "../../samples/gauges/routing-data";


// Auto-Insert-Imports-RoutingData-End

@Component({
    selector: "app-index",
    styleUrls: ["./index.component.scss"],
    templateUrl: "./index.component.html"
})
export class IndexComponent implements OnInit, AfterViewInit {

    // @ViewChild("navdrawer", { read: IgxNavigationDrawerComponent, static: true })
    // public navdrawer: IgxNavigationDrawerComponent;
    public homeRouteItem: IRouteItem;
    public currentNavItems: INavigationItem[] = [];
    public selectedDisplayName: string;
    public selectedJsonPath: string;
    public selectedRepoPath: string;

    public searchValue: string = "";
    public drawerState = {
        enableGestures: true,
        miniWidth: "80px",
        open: true,
        pin: false,
        pinThreshold: 768,
        position: "left",
        width: "220px"
    };

    private appRoutes: any[];

    // note these section is auto-generated - do not change it:
    private modulesRoutes = [
        // Auto-Insert-SamplesRoutingArray-Start
        { path: "charts", routesData: RoutingDataForCharts },
        { path: "excel", routesData: RoutingDataForExcel },
        { path: "maps", routesData: RoutingDataForMaps },
        { path: "gauges", routesData: RoutingDataForGauges }


        // Auto-Insert-SamplesRoutingArray-End
    ];

    private allNavItems: INavigationItem[] = [];
    public igVersion: string = "";

    constructor(private router: Router, private cdr: ChangeDetectorRef) {
        // console.log("index new");
        this.appRoutes = this.getAllSampleRoutes("/samples",
            router.config.filter((c) => c.path === "samples")[0].children, this.modulesRoutes);

    }

    public updateNavigationBar(selectedSample: any, sampleRoute?: string) {
        if (selectedSample) {
            if (sampleRoute) {
                this.selectedDisplayName = selectedSample.parentName + " - " + selectedSample.displayName;
                this.selectedJsonPath = window.location.origin + sampleRoute.replace('/samples/', '/assets/code-viewer/') + ".json";
                this.selectedRepoPath = "https://github.com/IgniteUI/igniteui-angular-examples/tree/vnext" + sampleRoute;
            } else {
                this.selectedDisplayName = selectedSample.parentName + " - " + selectedSample.displayName;
                this.selectedJsonPath = window.location.href.replace('/samples/', '/assets/code-viewer/') + ".json";
                this.selectedRepoPath = "https://github.com/IgniteUI/igniteui-angular-examples/tree/vnext" + window.location.pathname;
            }
            // console.log(this.selectedJsonPath);
            // console.log(this.selectedRepoPath);
        }
    }

    public ngOnInit() {
        // console.log("index ngOnInit");
        const loadedSample = this.appRoutes.filter(
            (route: any) => route.path === this.router.url)[0];

        this.updateNavigationBar(loadedSample);

        this.router.events.pipe(
            filter((x) => x instanceof NavigationStart)
        ).subscribe((event: NavigationStart) => {
            console.log("SB " + event.url);
            // console.log(window.location);
            const selectedSample = this.appRoutes.filter(
                (route: any) => route.path === event.url)[0];

            this.updateNavigationBar(selectedSample, event.url);
            // if (event.url !== "/" && !this.navdrawer.pin) {
            //     // Close drawer when selecting a view on mobile (unpinned)
            //     this.navdrawer.close();
            // }
        });

        this.createAllNavItems();

        // logging versions of IG packages
        for (const item of BrowserInfo) {
            if (item.name.indexOf('igniteui-angular-core') >= 0) {
                this.igVersion = "v" + item.ver;
                console.log('SB v' + item.ver + ' ' + item.name);
            }
        }
    }

    public ngAfterViewInit() {
        // console.log("index routes = " + this.appRoutes.length);
        const loadedRouteItem = this.appRoutes.filter(
            (route: any) => route.path === this.router.url)[0];

        if (loadedRouteItem) {
            // Get parent (INavItem)
            const loadedParentItem = this.currentNavItems.filter(
                (navItem) => navItem.name === loadedRouteItem.parentName)[0];
            // Get loaded child (IRouteItem)
            const loadedChildItem = loadedParentItem.children.filter(
                (routeItem) => routeItem.displayName === loadedRouteItem.displayName)[0];

            this.toggleParent("header" + loadedParentItem.name);
            document.getElementById("child" + loadedChildItem.displayName).scrollIntoView();
            this.cdr.detectChanges();
        }
    }

    public searchValueChanged() {
        this.currentNavItems = this.filter(this.allNavItems);
    }

    public clearSearchValue() {
        this.searchValue = "";
        this.searchValueChanged();
    }

    // toggle a header element from the navigation
    public toggleParent(nodeId) {
        const theSpan = document.getElementById(nodeId);
        if (theSpan != null) {
            if (theSpan.style.display === "inline") {
                theSpan.style.display = "none";
            } else if (theSpan.style.display === "none") {
                theSpan.style.display = "inline";
            }
        }
    }

    // convert a header element's visibility to a material icon name
    public convertNodeStateToIcon(nodeId) {
        const theSpan = document.getElementById(nodeId);
        if (theSpan != null) {
            const theSpanDisplay = theSpan.style.display;
            if (theSpanDisplay === "inline") {
                return "remove";
            } else if (theSpanDisplay === "none") {
                return "add";
            }
        }
        return "add";
    }

    public refresh() {
        window.dispatchEvent(new Event("resize"));
    }

    private getAllSampleRoutes(basePath: string, appModuleRoutes: Route[], modulesRoutes: any[]): any[] {
        const routes = [];
        const pushRoute = (route: Route, baseRoutePath: string) => {
            const data = route.data as any;
            if (data && data.displayName && data.parentName) {
                const routePath = baseRoutePath + "/" + route.path;
                // console.log("index route: " + routePath);
                routes.push({
                    displayName: data.displayName,
                    parentName: data.parentName,
                    path: routePath,
                    showLink: data.showLink
                });
            }
        };

        appModuleRoutes.forEach((route: Route) => {
            // console.log("index route app: ");
            pushRoute(route, basePath);
        });

        modulesRoutes.forEach((moduleRoutes: any) => {
            // console.log("index route modules: ");
            // tslint:disable-next-line:forin
            for (const key in moduleRoutes.routesData) {
                const route: Route = {
                    data: moduleRoutes.routesData[key],
                    path: key === "empty-path" ? "" : key
                };
                pushRoute(route, basePath + "/" + moduleRoutes.path);
            }
        });

        return routes;
    }

    private createAllNavItems() {
        // console.log("index nav items: ");
        // Create home route item
        this.homeRouteItem = { path: "/samples/home", displayName: "Home" };

        // Create all navigation items (headers)
        for (const appRoute of this.appRoutes) {
            const controlName = appRoute.parentName;
            // console.log("index nav item control: " + controlName);

            if (this.allNavItems.filter((item) => item.name === controlName).length <= 0) {
                this.allNavItems.push({ name: controlName, children: [] });
            }
        }

        // Sort navItems
        this.allNavItems = this.sort(this.allNavItems);

        // Create children route items for each navigation item
        for (const appRoute of this.appRoutes) {
            // console.log("index nav item: " + appRoute.path);
            const controlName = appRoute.parentName;
            const navItem = this.allNavItems.filter((item) => item.name === controlName)[0];

            if (appRoute.showLink) {
                navItem.children.push({ path: appRoute.path, displayName: appRoute.displayName });
            }

        }

        this.currentNavItems = this.allNavItems;
    }

    private sort(navItems: INavigationItem[]) {
        return navItems.sort((current, next) => {
            return current.name.toLowerCase().localeCompare(next.name.toLowerCase());
        });
    }

    private filter(navItems: INavigationItem[]) {
        const filteredNavItems: INavigationItem[] = [];

        for (const navItem of navItems) {
            const filteredChildren: IRouteItem[] = [];
            for (const routeItem of navItem.children) {
                if (routeItem.displayName.toLowerCase().indexOf(this.searchValue.toLowerCase()) !== -1) {
                    filteredChildren.push(routeItem);
                }
            }
            if (filteredChildren.length > 0) {
                filteredNavItems.push({ name: navItem.name, children: filteredChildren });
            }
        }

        return filteredNavItems;
    }

    private sidebarExpanded: boolean = true;
    public onToggleSidebar(): void {
        const sidebar = document.getElementById("sidebar");
        if (sidebar != null) {
            // const sidebarDisplay = sidebar.style.display;
            if (this.sidebarExpanded) {
                sidebar.style.display = "none";
            } else { // if (sidebar.style.display === "none") {
                sidebar.style.display = "flex";
            }
            this.sidebarExpanded = !this.sidebarExpanded;
        }
    }
}

export interface INavigationItem {
    name: string;
    children: IRouteItem[];
}

export interface IRouteItem {
    path: string;
    displayName: string;
}
