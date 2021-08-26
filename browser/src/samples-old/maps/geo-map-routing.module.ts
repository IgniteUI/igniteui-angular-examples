// /* tslint:disable */

// import { NgModule } from "@angular/core";
// import { RouterModule, Routes } from "@angular/router";

// import { geoMapRoutesData } from "./geo-map-routes-data";
// import { MapBindingDataCsvComponent } from "./geo-map-binding-data-csv/map-binding-data-csv.component";
// import { MapBindingDataJsonPointsComponent } from "./geo-map-binding-data-json-points/map-binding-data-json-points.component";
// import { MapBindingDataModelComponent } from "./geo-map-binding-data-model/map-binding-data-model.component";
// import { MapBindingMultipleShapesComponent } from "./geo-map-binding-multiple-shapes/map-binding-multiple-shapes.component";
// import { MapBindingMultipleSourcesComponent } from "./geo-map-binding-multiple-sources/map-binding-multiple-sources.component";
// import { MapBindingShapefilePointsComponent } from "./geo-map-binding-shp-points/map-binding-shp-points.component";
// import { MapBindingShapefilePolygonsComponent } from "./geo-map-binding-shp-polygons/map-binding-shp-polygons.component";
// import { MapBindingShapefilePolylinesComponent } from "./geo-map-binding-shp-polylines/map-binding-shp-polylines.component";
// import { MapCustomTooltipsComponent } from "./geo-map-custom-tooltips/map-custom-tooltips.component";
// import { MapDisplayImageryHeatTilesComponent } from "./geo-map-display-imagery-heat-tiles/map-display-imagery-heat-tiles.component";
// import { MapOverviewComponent } from "./geo-map-overview/map-overview.component";
// import { MapTriangulatingDataComponent } from './geo-map-triangulating-data/map-triangulating-data.component';
// import { MapTypeScatterAreaSeriesComponent } from "./geo-map-type-scatter-area-series/map-type-scatter-area-series.component";
// import { MapTypeScatterBubbleSeriesComponent } from "./geo-map-type-scatter-bubble-series/map-type-scatter-bubble-series.component";
// import { MapTypeScatterContourSeriesComponent } from "./geo-map-type-scatter-contour-series/map-type-scatter-contour-series.component";
// import { MapTypeScatterDensitySeriesComponent } from "./geo-map-type-scatter-density-series/map-type-scatter-density-series.component";
// import { MapTypeScatterSymbolSeriesComponent } from "./geo-map-type-scatter-symbol-series/map-type-scatter-symbol-series.component";
// import { MapTypeShapePolygonSeriesComponent } from "./geo-map-type-shape-polygon-series/map-type-shape-polygon-series.component";
// import { MapTypeShapePolylineSeriesComponent } from "./geo-map-type-shape-polyline-series/map-type-shape-polyline-series.component";

// import { MapDisplayImageryBingTiles } from "./MapDisplayImageryBingTiles/component";
// import { MapDisplayImageryEsriTiles } from "./MapDisplayImageryEsriTiles/component";
// import { MapDisplayImageryOSM } from "./MapDisplayImageryOSM/component";
// import { MapNavigationComponent } from './geo-map-navigation/map-navigation.component';
// import { MapMarkerLayoutsComponent } from './geo-map-marker-layouts/map-marker-layouts.component';
// import { MapMarkerTypeComponent } from './geo-map-marker-type/map-marker-type.component';
// import { MapMarkerTemplateComponent } from './geo-map-marker-template/map-marker-template.component';
// import { MapShapeStylingComponent } from './geo-map-shape-styling/geo-map-shape-styling.component';

// export const routes: Routes = [
//     {
//         component: MapDisplayImageryBingTiles,
//         data: geoMapRoutesData["geo-map-display-bing-imagery"],
//         path: "geo-map-display-bing-imagery"
//     },
//     {
//         component: MapDisplayImageryEsriTiles,
//         data: geoMapRoutesData["geo-map-display-esri-imagery"],
//         path: "geo-map-display-esri-imagery"
//     },
//     {
//         component: MapDisplayImageryOSM,
//         data: geoMapRoutesData["geo-map-display-osm-imagery"],
//         path: "geo-map-display-osm-imagery"
//     },
//     {
//         component: MapDisplayImageryHeatTilesComponent,
//         data: geoMapRoutesData["geo-map-display-heat-imagery"],
//         path: "geo-map-display-heat-imagery"
//     },
//     {
//         component: MapBindingDataCsvComponent,
//         data: geoMapRoutesData["geo-map-binding-data-csv"],
//         path: "geo-map-binding-data-csv"
//     },
//     {
//         component: MapBindingDataJsonPointsComponent,
//         data: geoMapRoutesData["geo-map-binding-data-json-points"],
//         path: "geo-map-binding-data-json-points"
//     },
//     {
//         component: MapBindingDataModelComponent,
//         data: geoMapRoutesData["geo-map-binding-data-model"],
//         path: "geo-map-binding-data-model"
//     },
//     {
//         component: MapBindingMultipleShapesComponent,
//         data: geoMapRoutesData["geo-map-binding-multiple-shapes"],
//         path: "geo-map-binding-multiple-shapes"
//     },
//     {
//         component: MapBindingMultipleSourcesComponent,
//         data: geoMapRoutesData["geo-map-binding-multiple-sources"],
//         path: "geo-map-binding-multiple-sources"
//     },
//     {
//         component: MapBindingShapefilePolygonsComponent,
//         data: geoMapRoutesData["geo-map-binding-shp-polygons"],
//         path: "geo-map-binding-shp-polygons"
//     },
//     {
//         component: MapBindingShapefilePolylinesComponent,
//         data: geoMapRoutesData["geo-map-binding-shp-polylines"],
//         path: "geo-map-binding-shp-polylines"
//     },
//     {
//         component: MapBindingShapefilePointsComponent,
//         data: geoMapRoutesData["geo-map-binding-shp-points"],
//         path: "geo-map-binding-shp-points"
//     },
//     {
//         component: MapCustomTooltipsComponent,
//         data: geoMapRoutesData["geo-map-custom-tooltips"],
//         path: "geo-map-custom-tooltips"
//     },
//     {
//         component: MapOverviewComponent,
//         data: geoMapRoutesData["geo-map-overview"],
//         path: "geo-map-overview"
//     },
//     {
//         component: MapTypeScatterAreaSeriesComponent,
//         data: geoMapRoutesData["geo-map-type-scatter-area-series"],
//         path: "geo-map-type-scatter-area-series"
//     },
//     {
//         component: MapTypeScatterBubbleSeriesComponent,
//         data: geoMapRoutesData["geo-map-type-scatter-bubble-series"],
//         path: "geo-map-type-scatter-bubble-series"
//     },
//     {
//         component: MapTypeScatterContourSeriesComponent,
//         data: geoMapRoutesData["geo-map-type-scatter-contour-series"],
//         path: "geo-map-type-scatter-contour-series"
//     },
//     {
//         component: MapTypeScatterDensitySeriesComponent,
//         data: geoMapRoutesData["geo-map-type-scatter-density-series"],
//         path: "geo-map-type-scatter-density-series"
//     },
//     {
//         component: MapTypeShapePolygonSeriesComponent,
//         data: geoMapRoutesData["geo-map-type-shape-polygon-series"],
//         path: "geo-map-type-shape-polygon-series"
//     },
//     {
//         component: MapTypeShapePolylineSeriesComponent,
//         data: geoMapRoutesData["geo-map-type-shape-polyline-series"],
//         path: "geo-map-type-shape-polyline-series"
//     },
//     {
//         component: MapTypeScatterSymbolSeriesComponent,
//         data: geoMapRoutesData["geo-map-type-scatter-symbol-series"],
//         path: "geo-map-type-scatter-symbol-series"
//     },
//     {
//         component: MapNavigationComponent,
//         data: geoMapRoutesData["geo-map-navigation"],
//         path: "geo-map-navigation"
//     },{
//         component: MapMarkerLayoutsComponent,
//         data: geoMapRoutesData["geo-map-marker-layouts"],
//         path: "geo-map-marker-layouts"
//     },
//     {
//         component: MapMarkerTypeComponent,
//         data: geoMapRoutesData["geo-map-marker-type"],
//         path: "geo-map-marker-type"
//     },
//     {
//         component: MapMarkerTemplateComponent,
//         data: geoMapRoutesData["geo-map-marker-template"],
//         path: "geo-map-marker-template"
//     },
//     {
//         component: MapTriangulatingDataComponent,
//         data: geoMapRoutesData["geo-map-triangulating-data"],
//         path: "geo-map-triangulating-data"
//     },
//     {
//         component: MapShapeStylingComponent,
//         data: geoMapRoutesData["geo-map-shape-styling"],
//         path: "geo-map-shape-styling"
//     }
// ];


// @NgModule({
//     exports: [
//         RouterModule
//     ],
//     imports: [
//         RouterModule.forChild(routes)
//     ]
// })
// export class GeoMapRoutingModule { }
