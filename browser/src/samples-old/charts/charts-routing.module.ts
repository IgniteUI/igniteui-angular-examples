// /* tslint:disable */

// import { NgModule } from "@angular/core";
// import { RouterModule, Routes } from "@angular/router";

// import { chartsRoutesData } from "./charts-routes-data";

// // category-chart samples
// import { CategoryChartAnnotationsComponent } from "./category-chart/annotations/category-chart-annotations.component";
// import { CategoryChartAxisOptionsComponent } from "./category-chart/axis-options/category-chart-axis-options.component";
// import { CategoryChartPerformanceSamplesModule } from "./category-chart/category-chart-performance-samples.module";
// import { CategoryChartSamplesModule } from "./category-chart/category-chart-samples.module";
// import { CategoryChartMarkerOptionsComponent } from "./category-chart/marker-options/category-chart-marker-options.component";
// import { CategoryChartMarkerTemplatesComponent } from "./category-chart/marker-templates/category-chart-marker-templates.component";
// import { CategoryChartHighFrequencyComponent } from "./category-chart/high-frequency/category-chart-high-frequency.component";
// import { CategoryChartHighVolumeComponent } from "./category-chart/high-volume/category-chart-high-volume.component";
// import { CategoryChartHighlightingComponent } from "./category-chart/highlighting/category-chart-highlighting.component";
// import { CategoryChartOverlapColumnsComponent } from "./category-chart/overlap-columns/category-chart-overlap-columns.component";
// import { CategoryChartOverviewComponent } from "./category-chart/overview/category-chart-overview.component";
// import { CategoryChartTooltipTemplateComponent } from "./category-chart/tooltip-template/category-chart-tooltip-template.component";
// import { CategoryChartTooltipTypesComponent } from "./category-chart/tooltip-types/category-chart-tooltip-types.component";
// import { CategoryChartTrendlinesComponent } from "./category-chart/trendline/category-chart-trendlines.component";
// import { CategoryChartAxisGapComponent } from "./category-chart/axis-gap/category-chart-axis-gap.component";
// import { CategoryChartAxisGridlinesComponent } from "./category-chart/axis-gridlines/category-chart-axis-gridlines.component";
// import { CategoryChartAxisLabelsComponent } from "./category-chart/axis-labels/category-chart-axis-labels.component";
// import { CategoryChartAxisLocationsComponent } from "./category-chart/axis-locations/category-chart-axis-locations.component";
// import { CategoryChartAxisOverlapComponent } from "./category-chart/axis-overlap/category-chart-axis-overlap.component";
// import { CategoryChartAxisRangeComponent } from "./category-chart/axis-range/category-chart-axis-range.component";
// import { CategoryChartAxisTickmarksComponent } from "./category-chart/axis-tickmarks/category-chart-axis-tickmarks.component";
// import { CategoryChartAxisTitlesComponent } from "./category-chart/axis-titles/category-chart-axis-titles.component";

// // category-chart types:
// import { CategoryChartAreaChartMultipleSourcesComponent} from "./category-chart/area-chart-multiple-sources/category-chart-area-chart-multiple-sources.component";
// import { CategoryChartAreaChartSingleSourceComponent } from "./category-chart/area-chart-single-source/category-chart-area-chart-single-source.component";
// import { CategoryChartAreaChartStylingComponent } from "./category-chart/area-chart-styling/category-chart-area-chart-styling.component";

// import { CategoryChartColumnChartMultipleSourcesComponent } from "./category-chart/column-chart-multiple-sources/category-chart-column-chart-multiple-sources.component";
// import { CategoryChartColumnChartSingleSourceComponent } from "./category-chart/column-chart-single-source/category-chart-column-chart-single-source.component";
// import { CategoryChartColumnChartStylingComponent } from "./category-chart/column-chart-styling/category-chart-column-chart-styling.component";
// import { CategoryChartColumnChartWithHighlightingComponent } from "./category-chart/column-chart-with-highlighting/category-chart-column-chart-with-highlighting.component";
// import { CategoryChartColumnChartWithTooltipsComponent } from "./category-chart/column-chart-with-tooltips/category-chart-column-chart-with-tooltips.component";

// import { CategoryChartLineChartMultipleSourcesComponent } from "./category-chart/line-chart-multiple-sources/category-chart-line-chart-multiple-sources.component";
// import { CategoryChartLineChartSingleSourceComponent } from "./category-chart/line-chart-single-source/category-chart-line-chart-single-source.component";
// import { CategoryChartLineChartStylingComponent } from "./category-chart/line-chart-styling/category-chart-line-chart-styling.component";
// import { CategoryChartLineChartWithAnnotationsComponent } from "./category-chart/line-chart-with-annotations/category-chart-line-chart-with-annotations.component";
// import { CategoryChartLineChartWithAnimationsComponent } from "./category-chart/line-chart-with-animations/category-chart-line-chart-with-animations.component";
// import { CategoryChartLineChartWithTitlesComponent } from "./category-chart/line-chart-with-titles/category-chart-line-chart-with-titles.component";

// import { CategoryChartSplineAreaStylingComponent } from "./category-chart/spline-area-styling/category-chart-spline-area-styling.component";
// import { CategoryChartSplineAreaMultipleSourcesComponent } from "./category-chart/spline-area-multiple-sources/category-chart-spline-area-multiple-sources.component";
// import { CategoryChartSplineAreaSingleSourceComponent } from "./category-chart/spline-area-single-source/category-chart-spline-area-single-source.component";

// import { CategoryChartSplineStylingComponent } from "./category-chart/spline-styling/category-chart-spline-styling.component";
// import { CategoryChartSplineMultipleSourcesComponent } from "./category-chart/spline-multiple-sources/category-chart-spline-multiple-sources.component";
// import { CategoryChartSplineSingleSourceComponent } from "./category-chart/spline-single-source/category-chart-spline-single-source.component";

// import { CategoryChartStepAreaStylingComponent } from "./category-chart/step-area-styling/category-chart-step-area-styling.component";
// import { CategoryChartStepAreaMultipleSourcesComponent } from "./category-chart/step-area-multiple-sources/category-chart-step-area-multiple-sources.component";
// import { CategoryChartStepAreaSingleSourceComponent } from "./category-chart/step-area-single-source/category-chart-step-area-single-source.component";

// import { CategoryChartStepLineStylingComponent } from "./category-chart/step-line-styling/category-chart-step-line-styling.component";
// import { CategoryChartStepLineMultipleSourcesComponent } from "./category-chart/step-line-multiple-sources/category-chart-step-line-multiple-sources.component";
// import { CategoryChartStepLineSingleSourceComponent } from "./category-chart/step-line-single-source/category-chart-step-line-single-source.component";

// import { CategoryChartPointChartMultipleSourcesComponent } from "./category-chart/point-chart-multiple-sources/category-chart-point-chart-multiple-sources.component";
// import { CategoryChartPointChartSingleSourceComponent } from "./category-chart/point-chart-single-source/category-chart-point-chart-single-source.component";
// import { CategoryChartPointChartStylingComponent } from "./category-chart/point-chart-styling/category-chart-point-chart-styling.component";

// // data-chart samples
// import { DataChartAxisAnnotationsComponent } from "./data-chart/data-chart-axis-annotations/data-chart-axis-annotations.component";
// import { DataChartAxisLocationsComponent } from "./data-chart/data-chart-axis-locations/data-chart-axis-locations.component";
// import { DataChartAxisSettingsComponent } from "./data-chart/data-chart-axis-settings/data-chart-axis-settings.component";
// import { DataChartAxisSharingComponent } from "./data-chart/data-chart-axis-sharing/data-chart-axis-sharing.component";
// import { DataChartAxisTypesComponent } from "./data-chart/data-chart-axis-types/data-chart-axis-types.component";
// import { DataChartLegendsComponent } from "./data-chart/data-chart-legends/data-chart-legends.component";
// import { DataChartNavigationComponent } from "./data-chart/data-chart-navigation/data-chart-navigation.component";
// import { DataChartOverviewComponent } from "./data-chart/data-chart-overview/data-chart-overview.component";
// import { DataChartPerformanceComponent } from "./data-chart/data-chart-performance/data-chart-performance.component";
// import { DataChartSamplesModule } from "./data-chart/data-chart-samples-module";
// import { DataChartSeriesAnimationsComponent } from "./data-chart/data-chart-series-animations/data-chart-series-animations.component";
// import { DataChartSeriesAnnotationsComponent } from "./data-chart/data-chart-series-annotations/data-chart-series-annotations.component";
// import { DataChartSeriesHighlightingComponent } from "./data-chart/data-chart-series-highlighting/data-chart-series-highlighting.component";
// import { DataChartSeriesMarkersComponent } from "./data-chart/data-chart-series-markers/data-chart-series-markers.component";
// import { DataChartSeriesMarkerTemplateComponent } from "./data-chart/data-chart-series-marker-template/data-chart-series-marker-template.component";
// import { DataChartSeriesTooltipsComponent } from "./data-chart/data-chart-series-tooltips/data-chart-series-tooltips.component";
// import { DataChartSeriesTrendlinesComponent } from "./data-chart/data-chart-series-trendlines/data-chart-series-trendlines.component";
// import { DataChartSynchronizationComponent } from "./data-chart/data-chart-synchronization/data-chart-synchronization.component";
// import { DataChartTitlesComponent } from "./data-chart/data-chart-titles/data-chart-titles.component";
// import { DataChartTypeCategorySeriesComponent } from "./data-chart/data-chart-type-category-series/data-chart-type-category-series.component";
// import { DataChartTypeFinancialSeriesComponent } from "./data-chart/data-chart-type-financial-series/data-chart-type-financial-series.component";
// import { DataChartTypeFinancialAreaIndicatorsComponent } from "./data-chart/data-chart-type-financial-area-indicators/data-chart-type-financial-area-indicators.component";
// import { DataChartTypeFinancialColumnIndicatorsComponent } from "./data-chart/data-chart-type-financial-column-indicators/data-chart-type-financial-column-indicators.component";
// import { DataChartTypeFinancialLineIndicatorsComponent } from "./data-chart/data-chart-type-financial-line-indicators/data-chart-type-financial-line-indicators.component";
// import { DataChartTypeFinancialOverlaysComponent } from "./data-chart/data-chart-type-financial-overlays/data-chart-type-financial-overlays.component";
// import { DataChartTypeScatterBubbleSeriesComponent } from './data-chart/data-chart-type-scatter-bubble-series/data-chart-type-scatter-bubble-series.component';
// import { DataChartTypeScatterLineSeriesComponent } from "./data-chart/data-chart-type-scatter-line-series/data-chart-type-scatter-line-series.component";
// import { DataChartTypeScatterPointSeriesComponent } from "./data-chart/data-chart-type-scatter-point-series/data-chart-type-scatter-point-series.component";
// import { DataChartTypeScatterSplineSeriesComponent } from "./data-chart/data-chart-type-scatter-spline-series/data-chart-type-scatter-spline-series.component";
// import { DataChartTypeScatterPolygonSeriesComponent } from "./data-chart/data-chart-type-scatter-polygon-series/data-chart-type-scatter-polygon-series.component";
// import { DataChartTypeScatterPolylineSeriesComponent } from "./data-chart/data-chart-type-scatter-polyline-series/data-chart-type-scatter-polyline-series.component";
// import { DataChartTypePolarSeriesComponent } from "./data-chart/data-chart-type-polar-series/data-chart-type-polar-series.component";
// import { DataChartTypeRadialSeriesComponent } from "./data-chart/data-chart-type-radial-series/data-chart-type-radial-series.component";
// import { DataChartTypeRangeSeriesComponent } from "./data-chart/data-chart-type-range-series/data-chart-type-range-series.component";
// import { DataChartTypeScatterAreaSeriesComponent } from "./data-chart/data-chart-type-scatter-area-series/data-chart-type-scatter-area-series.component";
// import { DataChartTypeScatterContourSeriesComponent } from "./data-chart/data-chart-type-scatter-contour-series/data-chart-type-scatter-contour-series.component";
// import { DataChartTypeScatterHdSeriesComponent } from "./data-chart/data-chart-type-scatter-hd-series/data-chart-type-scatter-hd-series.component";
// import { DataChartTypeScatterSeriesComponent } from "./data-chart/data-chart-type-scatter-series/data-chart-type-scatter-series.component";
// import { DataChartTypeScatterShapeSeriesComponent } from "./data-chart/data-chart-type-scatter-shape-series/data-chart-type-scatter-shape-series.component";
// import { DataChartTypeValueOverlayComponent } from "./data-chart/data-chart-type-value-overlay/data-chart-type-value-overlay.component";
// import { DataChartTypeCategoryAreaSeriesComponent } from "./data-chart/data-chart-type-category-area-series/data-chart-type-category-area-series.component";
// import { DataChartTypeCategoryBarSeriesComponent } from "./data-chart/data-chart-type-category-bar-series/data-chart-type-category-bar-series.component";
// import { DataChartTypeCategoryColumnSeriesComponent } from "./data-chart/data-chart-type-category-column-series/data-chart-type-category-column-series.component";
// import { DataChartTypeCategoryLineSeriesComponent } from "./data-chart/data-chart-type-category-line-series/data-chart-type-category-line-series.component";
// import { DataChartTypeCategoryPointSeriesComponent } from "./data-chart/data-chart-type-category-point-series/data-chart-type-category-point-series.component";
// import { DataChartTypeCategorySplineAreaSeriesComponent } from "./data-chart/data-chart-type-category-spline-area-series/data-chart-type-category-spline-area-series.component";
// import { DataChartTypeCategorySplineSeriesComponent } from "./data-chart/data-chart-type-category-spline-series/data-chart-type-category-spline-series.component";
// import { DataChartTypeCategoryStepAreaSeriesComponent } from "./data-chart/data-chart-type-category-step-area-series/data-chart-type-category-step-area-series.component";
// import { DataChartTypeCategoryStepLineSeriesComponent } from "./data-chart/data-chart-type-category-step-line-series/data-chart-type-category-step-line-series.component";
// import { DataChartTypeCategoryWaterfallSeriesComponent } from "./data-chart/data-chart-type-category-waterfall-series/data-chart-type-category-waterfall-series.component";
// import { DataChartTypeFinancialCandlestickSeriesComponent } from "./data-chart/data-chart-type-financial-candlestick-series/data-chart-type-financial-candlestick-series.component";
// import { DataChartTypeFinancialOhlcSeriesComponent } from "./data-chart/data-chart-type-financial-ohlc-series/data-chart-type-financial-ohlc-series.component";
// import { DataChartTypePolarAreaSeriesComponent } from "./data-chart/data-chart-type-polar-area-series/data-chart-type-polar-area-series.component";
// import { DataChartTypePolarLineSeriesComponent } from "./data-chart/data-chart-type-polar-line-series/data-chart-type-polar-line-series.component";
// import { DataChartTypePolarScatterSeriesComponent } from "./data-chart/data-chart-type-polar-scatter-series/data-chart-type-polar-scatter-series.component";
// import { DataChartTypePolarSplineAreaSeriesComponent } from "./data-chart/data-chart-type-polar-spline-area-series/data-chart-type-polar-spline-area-series.component";
// import { DataChartTypePolarSplineSeriesComponent } from "./data-chart/data-chart-type-polar-spline-series/data-chart-type-polar-spline-series.component";
// import { DataChartTypeRadialAreaSeriesComponent } from "./data-chart/data-chart-type-radial-area-series/data-chart-type-radial-area-series.component";
// import { DataChartTypeRadialColumnSeriesComponent } from "./data-chart/data-chart-type-radial-column-series/data-chart-type-radial-column-series.component";
// import { DataChartTypeRadialLineSeriesComponent } from "./data-chart/data-chart-type-radial-line-series/data-chart-type-radial-line-series.component";
// import { DataChartTypeRadialPieSeriesComponent } from "./data-chart/data-chart-type-radial-pie-series/data-chart-type-radial-pie-series.component";
// import { DataChartTypeRangeAreaSeriesComponent } from "./data-chart/data-chart-type-range-area-series/data-chart-type-range-area-series.component";
// import { DataChartTypeRangeColumnSeriesComponent } from "./data-chart/data-chart-type-range-column-series/data-chart-type-range-column-series.component";
// import { DataChartTypeStackedAreaSeriesComponent } from "./data-chart/data-chart-type-stacked-area-series/data-chart-type-stacked-area-series.component";
// import { DataChartTypeStackedBarSeriesComponent } from "./data-chart/data-chart-type-stacked-bar-series/data-chart-type-stacked-bar-series.component";
// import { DataChartTypeStackedColumnSeriesComponent } from "./data-chart/data-chart-type-stacked-column-series/data-chart-type-stacked-column-series.component";
// import { DataChartTypeStackedLineSeriesComponent } from "./data-chart/data-chart-type-stacked-line-series/data-chart-type-stacked-line-series.component";
// import { DataChartTypeStackedSplineSeriesComponent } from "./data-chart/data-chart-type-stacked-spline-series/data-chart-type-stacked-spline-series.component";
// import { DataChartTypeStackedSplineAreaSeriesComponent } from "./data-chart/data-chart-type-stacked-spline-area-series/data-chart-type-stacked-spline-area-series.component";
// import { DataChartTypeStacked100AreaSeriesComponent } from "./data-chart/data-chart-type-stacked100-area-series/data-chart-type-stacked100-area-series.component";
// import { DataChartTypeStacked100BarSeriesComponent } from "./data-chart/data-chart-type-stacked100-bar-series/data-chart-type-stacked100-bar-series.component";
// import { DataChartTypeStacked100ColumnSeriesComponent } from "./data-chart/data-chart-type-stacked100-column-series/data-chart-type-stacked100-column-series.component";
// import { DataChartTypeStacked100LineSeriesComponent } from "./data-chart/data-chart-type-stacked100-line-series/data-chart-type-stacked100-line-series.component";
// import { DataChartTypeStacked100SplineSeriesComponent } from "./data-chart/data-chart-type-stacked100-spline-series/data-chart-type-stacked100-spline-series.component";
// import { DataChartTypeStacked100SplineAreaSeriesComponent } from "./data-chart/data-chart-type-stacked100-spline-area-series/data-chart-type-stacked100-spline-area-series.component";

// // SEO samples
// import { DataChartBarChartSingleSourceComponent } from "./data-chart/bar-chart-single-source/data-chart-bar-chart-single-source.component";
// import { DataChartBarChartMultipleSourcesComponent } from "./data-chart/bar-chart-multiple-sources/data-chart-bar-chart-multiple-sources.component";
// import { DataChartBarChartStylingComponent } from "./data-chart/bar-chart-styling/data-chart-bar-chart-styling.component";
// import { DataChartCalloutLayerStylingComponent } from "./data-chart/callout-layer-styling/data-chart-callout-layer-styling.component";
// import { DataChartColumnChartStylingComponent } from "./data-chart/column-chart-styling/data-chart-column-chart-styling.component";
// import { DataChartCompositeChartComponent } from "./data-chart/composite-chart/data-chart-composite-chart.component";
// import { DataChartCrosshairLayerStylingComponent } from "./data-chart/crosshair-layer-styling/data-chart-crosshair-layer-styling.component";
// import { DataChartFinalValueLayerStylingComponent } from "./data-chart/final-value-layer-styling/data-chart-final-value-layer-styling.component";
// import { DataChartPolarAreaChartComponent } from "./data-chart/type-polar-area-series/data-chart-polar-area-chart.component";
// import { DataChartPolarSplineAreaChartComponent } from "./data-chart/type-polar-spline-series/data-chart-polar-spline-area-chart.component";
// import { DataChartPolarAreaChartStylingComponent } from "./data-chart/polar-area-chart-styling/data-chart-polar-area-chart-styling.component";
// import { DataChartRangeAreaChartComponent } from "./data-chart/range-area-chart/data-chart-range-area-chart.component";
// import { DataChartRangeColumnChartComponent } from "./data-chart/range-column-chart/data-chart-range-column-chart.component";
// import { DataChartRadialPieChartComponent } from "./data-chart/radial-pie-chart/radial-pie-chart.component";
// import { DataChartRadialAreaChartComponent } from "./data-chart/radial-area-chart/data-chart-radial-area-chart.component";
// import { DataChartRadialLineChartComponent } from "./data-chart/radial-line-chart/data-chart-radial-line-chart.component";
// import { DataChartRadialAreaChartStylingComponent } from "./data-chart/radial-area-chart-styling/data-chart-radial-area-chart-styling.component";
// import { DataChartScatterLineChartComponent } from "./data-chart/scatter-line-chart/data-chart-scatter-line-chart.component";
// import { DataChartScatterPointChartComponent } from "./data-chart/scatter-point-chart/data-chart-scatter-point-chart.component";
// import { DataChartScatterBubbleChartMultipleSourcesComponent } from "./data-chart/scatter-bubble-chart-multiple-sources/data-chart-scatter-bubble-chart-multiple-sources.component";
// import { DataChartScatterBubbleChartSingleSourceComponent } from "./data-chart/scatter-bubble-chart-single-source/data-chart-scatter-bubble-chart-single-source.component";
// import { DataChartScatterBubbleChartStylingComponent } from "./data-chart/scatter-bubble-chart-styling/data-chart-scatter-bubble-chart-styling.component";
// import { DataChartScatterSplineChartComponent } from "./data-chart/scatter-spline-chart/data-chart-scatter-spline-chart.component";
// import { DataChartStackedSeriesComponent } from "./data-chart/stacked-series/data-chart-stacked-series.component";
// import { DataChartStackedAreaChartComponent } from "./data-chart/stacked-area-chart/data-chart-stacked-area-chart.component";
// import { DataChartStackedBarChartComponent } from "./data-chart/stacked-bar-chart/data-chart-stacked-bar-chart.component";
// import { DataChartStackedColumnChartComponent } from "./data-chart/stacked-column-chart/data-chart-stacked-column-chart.component";
// import { DataChartStackedSplineAreaChartComponent } from "./data-chart/stacked-spline-area-chart/data-chart-stacked-spline-area-chart.component";
// import { DataChartStackedSplineChartComponent } from "./data-chart/stacked-spline-chart/data-chart-stacked-spline-chart.component";
// import { DataChartStackedLineChartComponent } from "./data-chart/stacked-line-chart/data-chart-stacked-line-chart.component";
// import { DataChartStacked100AreaChartComponent } from "./data-chart/stacked-100-area-chart/data-chart-stacked-100-area-chart.component";
// import { DataChartStacked100BarChartComponent } from "./data-chart/stacked-100-bar-chart/data-chart-stacked-100-bar-chart.component";
// import { DataChartStacked100ColumnChartComponent } from "./data-chart/stacked-100-column-chart/data-chart-stacked-100-column-chart.component";
// import { DataChartStacked100SplineAreaChartComponent } from "./data-chart/stacked-100-spline-area-chart/data-chart-stacked-100-spline-area-chart.component";
// import { DataChartStacked100SplineChartComponent } from "./data-chart/stacked-100-spline-chart/data-chart-stacked-100-spline-chart.component";
// import { DataChartStacked100LineChartComponent } from "./data-chart/stacked-100-line-chart/data-chart-stacked-100-line-chart.component";
// import { DataChartWaterfallChartComponent } from "./data-chart/waterfall-chart/data-chart-waterfall-chart.component";
// import { DataChartRadialColumnChartComponent} from "./data-chart/radial-column-chart/data-chart-radial-column-chart.component";
// import { DataChartAxisCrossingComponent} from "./data-chart/axis-crossing/data-chart-axis-crossing.component";
// import { DataChartTooltipTemplateComponent} from "./data-chart/tooltip-template/data-chart-tooltip-template.component";

// // doughnut-chart samples
// import { DoughnutChartExplosionSampleComponent } from "./doughnut-chart/doughnut-chart-explosion-sample/doughnut-chart-explosion-sample.component";
// import { DoughnutChartLegendComponent } from "./doughnut-chart/doughnut-chart-legend/doughnut-chart-legend.component";
// import { DoughnutChartOverviewSampleComponent } from "./doughnut-chart/doughnut-chart-overview-sample/doughnut-chart-overview-sample.component";
// import { DoughnutChartRingsComponent } from "./doughnut-chart/doughnut-chart-rings/doughnut-chart-rings.component";
// import { DoughnutChartSamplesModule } from "./doughnut-chart/doughnut-chart-samples.module";
// import { DoughnutChartSelectionSampleComponent } from "./doughnut-chart/doughnut-chart-selection-sample/doughnut-chart-selection-sample.component";
// import { DoughnutChartAnimationSampleComponent } from "./doughnut-chart/doughnut-chart-animation-sample/doughnut-chart-animation-sample.component";

// // financial-chart samples
// import { FinancialChartAnnotationsComponent } from "./financial-chart/annotations/financial-chart-annotations.component";
// import { FinancialChartAxisTypesComponent } from "./financial-chart/axis-types/financial-chart-axis-types.component";
// import { FinancialChartCustomIndicatorsComponent } from "./financial-chart/custom-indicators/financial-chart-custom-indicators.component";
// import { FinancialChartSamplesModule } from "./financial-chart/financial-chart-samples.module";
// import { FinancialChartHighFrequencyComponent } from "./financial-chart/high-frequency/financial-chart-high-frequency.component";
// import { FinancialChartHighVolumeComponent } from "./financial-chart/high-volume/financial-chart-high-volume.component";
// import { FinancialChartIndicatorTypesComponent } from "./financial-chart/indicator-types/financial-chart-indicator-types.component";
// import { FinancialChartMultipleDataComponent } from "./financial-chart/multiple-data/financial-chart-multiple-data.component";
// import { FinancialChartMultipleFeedsComponent } from "./financial-chart/multiple-feeds/financial-chart-multiple-feeds.component";
// import { FinancialChartOverviewComponent } from "./financial-chart/overview/financial-chart-overview.component";
// import { FinancialChartPanesComponent } from "./financial-chart/panes/financial-chart-panes.component";
// import { FinancialChartPerformanceComponent } from "./financial-chart/performance/financial-chart-performance.component";
// import { FinancialChartTimeBasedDataComponent } from "./financial-chart/time-based-data/financial-chart-time-based-data.component";
// import { FinancialChartTitlesComponent } from "./financial-chart/titles/financial-chart-titles.component";
// import { FinancialChartTooltipTemplateComponent } from "./financial-chart/tooltip-template/financial-chart-tooltip-template.component";
// import { FinancialChartTooltipTypesComponent } from "./financial-chart/tooltip-types/financial-chart-tooltip-types.component";
// import { FinancialChartTrendlinesComponent } from "./financial-chart/trendlines/financial-chart-trendlines.component";
// import { FinancialChartVolumeTypeComponent } from "./financial-chart/volume-type/financial-chart-volume-type.component";
// import { FinancialChartStylingComponent } from "./financial-chart/styling/financial-chart-styling.component";
// import { FinancialChartStockIndexChartComponent } from "./financial-chart/stock-index-chart/financial-chart-stock-index-chart.component";
// // pie-chart samples
// import { PieChartDataSampleComponent } from "./pie-chart/pie-chart-overview/pie-chart-overview.component";
// import { PieChartExplosionComponent } from "./pie-chart/pie-chart-explosion/pie-chart-explosion.component";
// import { PieChartLegendComponent } from "./pie-chart/pie-chart-legend/pie-chart-legend.component";
// import { PieChartOthersComponent } from "./pie-chart/pie-chart-others/pie-chart-others.component";
// import { PieChartSamplesModule } from "./pie-chart/pie-chart-samples.module";
// import { PieChartSelectionComponent } from "./pie-chart/pie-chart-selection/pie-chart-selection.component";
// import { PieChartAnimationComponent } from "./pie-chart/pie-chart-animation/pie-chart-animation.component";
// import { PieChartStylingComponent } from "./pie-chart/pie-chart-styling/pie-chart-styling.component";

// // sparkline-chart samples
// import { SparklineDisplayTypesComponent } from "./sparkline/sparkline-display-types/sparkline-display-types.component";
// import { SparklineGridComponent } from "./sparkline/sparkline-grid/sparkline-grid.component";
// import { SparklineMarkersComponent } from "./sparkline/sparkline-markers/sparkline-markers.component";
// import { SparklineNormalRangeComponent } from "./sparkline/sparkline-normal-range/sparkline-normal-range.component";
// import { SparklineTrendlinesComponent } from "./sparkline/sparkline-trendlines/sparkline-trendlines.component";
// import { SparklineUnknownValuesComponent } from "./sparkline/sparkline-unknown-values/sparkline-unknown-values.component";
// // zoomslider-chart samples
// import { ZoomSliderOverviewComponent } from "./zoomslider/zoomslider-overview/zoomslider-overview.component";
// // tree-map samples
// import { TreeMapEventsComponent } from "./tree-map/events/tree-map-events.component";
// import { TreeMapLayoutComponent } from "./tree-map/layout/tree-map-layout.component";
// import { TreeMapStylingComponent } from "./tree-map/styling/tree-map-styling.component";
// import { TreeMapOverviewComponent } from "./tree-map/tree-map-overview/tree-map-overview.component";


// export const chartsRoutes: Routes = [
//     //  TreeMap
//     {
//         component: TreeMapEventsComponent,
//         data: chartsRoutesData["tree-map-events"],
//         path: "tree-map-events"
//     },
//     {
//         component: TreeMapLayoutComponent,
//         data: chartsRoutesData["tree-map-layout"],
//         path: "tree-map-layout"
//     },
//     {
//         component: TreeMapOverviewComponent,
//         data: chartsRoutesData["tree-map-overview"],
//         path: "tree-map-overview"
//     },
//     {
//         component: TreeMapStylingComponent,
//         data: chartsRoutesData["tree-map-styling"],
//         path: "tree-map-styling"
//     },
//     //  ZoomSlider
//     {
//         component: ZoomSliderOverviewComponent,
//         data: chartsRoutesData["zoomslider-overview"],
//         path: "zoomslider-overview"
//     },
//     // DoughnutChart
//     {
//         component: DoughnutChartExplosionSampleComponent,
//         data: chartsRoutesData["doughnut-chart-explosion"],
//         path: "doughnut-chart-explosion"
//     },
//     {
//         component: DoughnutChartOverviewSampleComponent,
//         data: chartsRoutesData["doughnut-chart-overview"],
//         path: "doughnut-chart-overview"
//     },
//     {
//         component: DoughnutChartSelectionSampleComponent,
//         data: chartsRoutesData["doughnut-chart-selection"],
//         path: "doughnut-chart-selection"
//     },
//     {
//         component: DoughnutChartLegendComponent,
//         data: chartsRoutesData["doughnut-chart-legend"],
//         path: "doughnut-chart-legend"
//     },
//     {
//         component: DoughnutChartRingsComponent,
//         data: chartsRoutesData["doughnut-chart-rings"],
//         path: "doughnut-chart-rings"
//     },
//     {
//         component: DoughnutChartAnimationSampleComponent,
//         data: chartsRoutesData["doughnut-chart-animation"],
//         path: "doughnut-chart-animation"
//     },
//     // PieChart
//     {
//         component: PieChartDataSampleComponent,
//         data: chartsRoutesData["pie-chart-overview"],
//         path: "pie-chart-overview"
//     },
//     {
//         component: PieChartExplosionComponent,
//         data: chartsRoutesData["pie-chart-explosion"],
//         path: "pie-chart-explosion"
//     },
//     {
//         component: PieChartLegendComponent,
//         data: chartsRoutesData["pie-chart-legend"],
//         path: "pie-chart-legend"
//     },
//     {
//         component: PieChartOthersComponent,
//         data: chartsRoutesData["pie-chart-others"],
//         path: "pie-chart-others"
//     },
//     {
//         component: PieChartSelectionComponent,
//         data: chartsRoutesData["pie-chart-selection"],
//         path: "pie-chart-selection"
//     },
//     {
//         component: PieChartAnimationComponent,
//         data: chartsRoutesData["pie-chart-animation"],
//         path: "pie-chart-animation"
//     },
//     {
//         component: PieChartStylingComponent,
//         data: chartsRoutesData["pie-chart-styling"],
//         path: "pie-chart-styling"
//     },
//     // category-chart
//     {
//         component: CategoryChartOverviewComponent,
//         data: chartsRoutesData["category-chart-overview"],
//         path: "category-chart-overview"
//     },
//     {
//         component: CategoryChartAnnotationsComponent,
//         data: chartsRoutesData["category-chart-annotations"],
//         path: "category-chart-annotations"
//     },
//     {
//         component: CategoryChartOverlapColumnsComponent,
//         data: chartsRoutesData["category-chart-overlap-columns"],
//         path: "category-chart-overlap-columns"
//     },
//     {
//         component: CategoryChartHighlightingComponent,
//         data: chartsRoutesData["category-chart-highlighting"],
//         path: "category-chart-highlighting"
//     },
//     {
//         component: CategoryChartHighVolumeComponent,
//         data: chartsRoutesData["category-chart-high-volume"],
//         path: "category-chart-high-volume"
//     },
//     {
//         component: CategoryChartHighFrequencyComponent,
//         data: chartsRoutesData["category-chart-high-frequency"],
//         path: "category-chart-high-frequency"
//     },
//     {
//         component: CategoryChartAxisOptionsComponent,
//         data: chartsRoutesData["category-chart-axis-options"],
//         path: "category-chart-axis-options"
//     },
//     {
//         component: CategoryChartMarkerOptionsComponent,
//         data: chartsRoutesData["category-chart-marker-options"],
//         path: "category-chart-marker-options"
//     },
//     {
//         component: CategoryChartMarkerTemplatesComponent,
//         data: chartsRoutesData["category-chart-marker-templates"],
//         path: "category-chart-marker-templates"
//     },
//     {
//         component: CategoryChartTooltipTemplateComponent,
//         data: chartsRoutesData["category-chart-tooltip-template"],
//         path: "category-chart-tooltip-template"
//     },
//     {
//         component: CategoryChartTooltipTypesComponent,
//         data: chartsRoutesData["category-chart-tooltip-types"],
//         path: "category-chart-tooltip-types"
//     },
//     {
//         component: CategoryChartTrendlinesComponent,
//         data: chartsRoutesData["category-chart-trendline"],
//         path: "category-chart-trendline"
//     },
//     {
//         component: CategoryChartAxisGapComponent ,
//         data: chartsRoutesData["category-chart-axis-gap"],
//         path: "category-chart-axis-gap"
//     },
//     {
//         component: CategoryChartAxisGridlinesComponent ,
//         data: chartsRoutesData["category-chart-axis-gridlines"],
//         path: "category-chart-axis-gridlines"
//     },
//     {
//         component: CategoryChartAxisLabelsComponent ,
//         data: chartsRoutesData["category-chart-axis-labels"],
//         path: "category-chart-axis-labels"
//     },
//     {
//         component: CategoryChartAxisLocationsComponent ,
//         data: chartsRoutesData["category-chart-axis-locations"],
//         path: "category-chart-axis-locations"
//     },
//     {
//         component: CategoryChartAxisOverlapComponent ,
//         data: chartsRoutesData["category-chart-axis-overlap"],
//         path: "category-chart-axis-overlap"
//     },
//     {
//         component: CategoryChartAxisRangeComponent ,
//         data: chartsRoutesData["category-chart-axis-range"],
//         path: "category-chart-axis-range"
//     },
//     {
//         component: CategoryChartAxisTitlesComponent ,
//         data: chartsRoutesData["category-chart-axis-titles"],
//         path: "category-chart-axis-titles"
//     },
//     {
//         component: CategoryChartAxisTickmarksComponent ,
//         data: chartsRoutesData["category-chart-axis-tickmarks"],
//         path: "category-chart-axis-tickmarks"
//     },
//     { component: CategoryChartAreaChartMultipleSourcesComponent, data: chartsRoutesData["category-chart-area-chart-multiple-sources"], path: "category-chart-area-chart-multiple-sources"},
//     { component: CategoryChartAreaChartSingleSourceComponent, data: chartsRoutesData["category-chart-area-chart-single-source"], path: "category-chart-area-chart-single-source"},
//     { component: CategoryChartAreaChartStylingComponent, data: chartsRoutesData["category-chart-area-chart-styling"], path: "category-chart-area-chart-styling"},

//     { component: CategoryChartColumnChartMultipleSourcesComponent, data: chartsRoutesData["category-chart-column-chart-multiple-sources"], path: "category-chart-column-chart-multiple-sources"},
//     { component: CategoryChartColumnChartSingleSourceComponent, data: chartsRoutesData["category-chart-column-chart-single-source"], path: "category-chart-column-chart-single-source"},
//     { component: CategoryChartColumnChartStylingComponent, data: chartsRoutesData["category-chart-column-chart-styling"], path: "category-chart-column-chart-styling"},
//     { component: CategoryChartColumnChartWithHighlightingComponent, data: chartsRoutesData["category-chart-column-chart-with-highlighting"], path: "category-chart-column-chart-with-highlighting"},
//     { component: CategoryChartColumnChartWithTooltipsComponent, data: chartsRoutesData["category-chart-column-chart-with-tooltips"], path: "category-chart-column-chart-with-tooltips"},

//     { component: CategoryChartLineChartMultipleSourcesComponent, data: chartsRoutesData["category-chart-line-chart-multiple-sources"], path: "category-chart-line-chart-multiple-sources"},
//     { component: CategoryChartLineChartSingleSourceComponent, data: chartsRoutesData["category-chart-line-chart-single-source"], path: "category-chart-line-chart-single-source"},
//     { component: CategoryChartLineChartStylingComponent, data: chartsRoutesData["category-chart-line-chart-styling"], path: "category-chart-line-chart-styling"},
//     { component: CategoryChartLineChartWithAnnotationsComponent, data: chartsRoutesData["category-chart-line-chart-with-annotations"], path: "category-chart-line-chart-with-annotations"},
//     { component: CategoryChartLineChartWithAnimationsComponent, data: chartsRoutesData["category-chart-line-chart-with-animations"], path: "category-chart-line-chart-with-animations"},
//     { component: CategoryChartLineChartWithTitlesComponent, data: chartsRoutesData["category-chart-line-chart-with-titles"], path: "category-chart-line-chart-with-titles"},

//     { component: CategoryChartSplineAreaMultipleSourcesComponent, data: chartsRoutesData["category-chart-spline-area-multiple-sources"], path: "category-chart-spline-area-multiple-sources"},
//     { component: CategoryChartSplineAreaStylingComponent, data: chartsRoutesData["category-chart-spline-area-styling"], path: "category-chart-spline-area-styling"},
//     { component: CategoryChartSplineAreaSingleSourceComponent, data: chartsRoutesData["category-chart-spline-area-single-source"], path: "category-chart-spline-area-single-source"},

//     { component: CategoryChartSplineStylingComponent, data: chartsRoutesData["category-chart-spline-styling"], path: "category-chart-spline-styling"},
//     { component: CategoryChartSplineMultipleSourcesComponent, data: chartsRoutesData["category-chart-spline-multiple-sources"], path: "category-chart-spline-multiple-sources"},
//     { component: CategoryChartSplineSingleSourceComponent, data: chartsRoutesData["category-chart-spline-single-source"], path: "category-chart-spline-single-source"},

//     { component: CategoryChartStepAreaSingleSourceComponent, data: chartsRoutesData["category-chart-step-area-single-source"], path: "category-chart-step-area-single-source"},
//     { component: CategoryChartStepAreaMultipleSourcesComponent, data: chartsRoutesData["category-chart-step-area-multiple-sources"], path: "category-chart-step-area-multiple-sources"},
//     { component: CategoryChartStepAreaStylingComponent, data: chartsRoutesData["category-chart-step-area-styling"], path: "category-chart-step-area-styling"},

//     { component: CategoryChartStepLineStylingComponent, data: chartsRoutesData["category-chart-step-line-styling"], path: "category-chart-step-line-styling"},
//     { component: CategoryChartStepLineSingleSourceComponent, data: chartsRoutesData["category-chart-step-line-single-source"], path: "category-chart-step-line-single-source"},
//     { component: CategoryChartStepLineMultipleSourcesComponent, data: chartsRoutesData["category-chart-step-line-multiple-sources"], path: "category-chart-step-line-multiple-sources"},

//     { component: CategoryChartPointChartMultipleSourcesComponent, data: chartsRoutesData["category-chart-point-chart-multiple-sources"], path: "category-chart-point-chart-multiple-sources"},
//     { component: CategoryChartPointChartSingleSourceComponent, data: chartsRoutesData["category-chart-point-chart-single-source"], path: "category-chart-point-chart-single-source"},
//     { component: CategoryChartPointChartStylingComponent, data: chartsRoutesData["category-chart-point-chart-styling"], path: "category-chart-point-chart-styling"},

//     // data-chart
//     {
//         component: DataChartRadialPieChartComponent,
//         data: chartsRoutesData["data-chart-radial-pie-chart"],
//         path: "data-chart-radial-pie-chart"
//     },
//     {
//         component: DataChartAxisLocationsComponent,
//         data: chartsRoutesData["data-chart-axis-locations"],
//         path: "data-chart-axis-locations"
//     },
//     {
//         component: DataChartAxisAnnotationsComponent,
//         data: chartsRoutesData["data-chart-axis-annotations"],
//         path: "data-chart-axis-annotations"
//     },
//     {
//         component: DataChartAxisSettingsComponent,
//         data: chartsRoutesData["data-chart-axis-settings"],
//         path: "data-chart-axis-settings"
//     },
//     {
//         component: DataChartAxisSharingComponent,
//         data: chartsRoutesData["data-chart-axis-sharing"],
//         path: "data-chart-axis-sharing"
//     },
//     {
//         component: DataChartAxisTypesComponent,
//         data: chartsRoutesData["data-chart-axis-types"],
//         path: "data-chart-axis-types"
//     },
//     {
//         component: DataChartLegendsComponent,
//         data: chartsRoutesData["data-chart-legends"],
//         path: "data-chart-legends"
//     },
//     {
//         component: DataChartNavigationComponent,
//         data: chartsRoutesData["data-chart-chart-navigation"],
//         path: "data-chart-chart-navigation"
//     },
//     {
//         component: DataChartOverviewComponent,
//         data: chartsRoutesData["data-chart-chart-overview"],
//         path: "data-chart-chart-overview"
//     },
//     {
//         component: DataChartPerformanceComponent,
//         data: chartsRoutesData["data-chart-chart-performance"],
//         path: "data-chart-chart-performance"
//     },
//     {
//         component: DataChartSeriesAnimationsComponent,
//         data: chartsRoutesData["data-chart-series-animations"],
//         path: "data-chart-series-animations"
//     },
//     {
//         component: DataChartSeriesAnnotationsComponent,
//         data: chartsRoutesData["data-chart-series-annotations"],
//         path: "data-chart-series-annotations"
//     },
//     {
//         component: DataChartSeriesHighlightingComponent,
//         data: chartsRoutesData["data-chart-series-highlighting"],
//         path: "data-chart-series-highlighting"
//     },
//     {
//         component: DataChartSeriesMarkersComponent,
//         data: chartsRoutesData["data-chart-series-markers"],
//         path: "data-chart-series-markers"
//     },
//     {
//         component: DataChartSeriesMarkerTemplateComponent,
//         data: chartsRoutesData["data-chart-series-marker-template"],
//         path: "data-chart-series-marker-template"
//     },
//     {
//         component: DataChartSeriesTooltipsComponent,
//         data: chartsRoutesData["data-chart-series-tooltips"],
//         path: "data-chart-series-tooltips"
//     },
//     {
//         component: DataChartSeriesTrendlinesComponent,
//         data: chartsRoutesData["data-chart-series-trendlines"],
//         path: "data-chart-series-trendlines"
//     },
//     {
//         component: DataChartSynchronizationComponent,
//         data: chartsRoutesData["data-chart-chart-synchronization"],
//         path: "data-chart-chart-synchronization"
//     },
//     {
//         component: DataChartTitlesComponent,
//         data: chartsRoutesData["data-chart-chart-titles"],
//         path: "data-chart-chart-titles"
//     },
//     {
//         component: DataChartTypeCategorySeriesComponent,
//         data: chartsRoutesData["data-chart-type-category-series"],
//         path: "data-chart-type-category-series"
//     },
//     {
//         component: DataChartTypeCategoryAreaSeriesComponent,
//         data: chartsRoutesData["data-chart-type-category-area-series"],
//         path: "data-chart-type-category-area-series"
//     },
//     {
//         component: DataChartTypeCategoryBarSeriesComponent,
//         data: chartsRoutesData["data-chart-type-category-bar-series"],
//         path: "data-chart-type-category-bar-series"
//     },
//     {
//         component: DataChartTypeCategoryColumnSeriesComponent,
//         data: chartsRoutesData["data-chart-type-category-column-series"],
//         path: "data-chart-type-category-column-series"
//     },
//     {
//         component: DataChartTypeCategoryLineSeriesComponent,
//         data: chartsRoutesData["data-chart-type-category-line-series"],
//         path: "data-chart-type-category-line-series"
//     },
//     {
//         component: DataChartTypeCategoryPointSeriesComponent,
//         data: chartsRoutesData["data-chart-type-category-point-series"],
//         path: "data-chart-type-category-point-series"
//     },
//     {
//         component: DataChartTypeCategorySplineAreaSeriesComponent,
//         data: chartsRoutesData["data-chart-type-category-spline-area-series"],
//         path: "data-chart-type-category-spline-area-series"
//     },
//     {
//         component: DataChartTypeCategorySplineSeriesComponent,
//         data: chartsRoutesData["data-chart-type-category-spline-series"],
//         path: "data-chart-type-category-spline-series"
//     },
//     {
//         component: DataChartTypeCategoryStepAreaSeriesComponent,
//         data: chartsRoutesData["data-chart-type-category-step-area-series"],
//         path: "data-chart-type-category-step-area-series"
//     },
//     {
//         component: DataChartTypeCategoryStepLineSeriesComponent,
//         data: chartsRoutesData["data-chart-type-category-step-line-series"],
//         path: "data-chart-type-category-step-line-series"
//     },
//     {
//         component: DataChartTypeCategoryWaterfallSeriesComponent,
//         data: chartsRoutesData["data-chart-type-category-waterfall-series"],
//         path: "data-chart-type-category-waterfall-series"
//     },
//     {
//         component: DataChartTypeFinancialSeriesComponent,
//         data: chartsRoutesData["data-chart-type-financial-series"],
//         path: "data-chart-type-financial-series"
//     },
//     {
//         component : DataChartTypeFinancialAreaIndicatorsComponent,
//         data: chartsRoutesData["data-chart-type-financial-area-indicators"],
//         path: "data-chart-type-financial-area-indicators"
//     },
//     {
//         component: DataChartTypeFinancialCandlestickSeriesComponent,
//         data: chartsRoutesData["data-chart-type-financial-candlestick-series"],
//         path: "data-chart-type-financial-candlestick-series"
//     },
//     {
//         component : DataChartTypeFinancialColumnIndicatorsComponent,
//         data: chartsRoutesData["data-chart-type-financial-column-indicators"],
//         path: "data-chart-type-financial-column-indicators"
//     },
//     {
//         component : DataChartTypeFinancialLineIndicatorsComponent,
//         data: chartsRoutesData["data-chart-type-financial-line-indicators"],
//         path: "data-chart-type-financial-line-indicators"
//     },
//     {
//         component: DataChartTypeFinancialOhlcSeriesComponent,
//         data: chartsRoutesData["data-chart-type-financial-ohlc-series"],
//         path: "data-chart-type-financial-ohlc-series"
//     },
//     {
//         component : DataChartTypeFinancialOverlaysComponent,
//         data: chartsRoutesData["data-chart-type-financial-overlays"],
//         path: "data-chart-type-financial-overlays"
//     },
//     {
//         component: DataChartTypePolarSeriesComponent,
//         data: chartsRoutesData["data-chart-polar-chart-types"],
//         path: "data-chart-polar-chart-types"
//     },
//     {
//         component: DataChartTypePolarAreaSeriesComponent,
//         data: chartsRoutesData["data-chart-polar-area-chart"],
//         path: "data-chart-polar-area-chart"
//     },
//     {
//         component: DataChartTypePolarLineSeriesComponent,
//         data: chartsRoutesData["data-chart-polar-line-chart"],
//         path: "data-chart-polar-line-chart"
//     },
//     {
//         component: DataChartTypePolarScatterSeriesComponent,
//         data: chartsRoutesData["data-chart-polar-scatter-chart"],
//         path: "data-chart-polar-scatter-chart"
//     },
//     {
//         component: DataChartTypePolarSplineAreaSeriesComponent,
//         data: chartsRoutesData["data-chart-polar-spline-area-chart"],
//         path: "data-chart-polar-spline-area-chart"
//     },
//     {
//         component: DataChartTypePolarSplineSeriesComponent,
//         data: chartsRoutesData["data-chart-polar-spline-chart"],
//         path: "data-chart-polar-spline-chart"
//     },
//     {
//         component: DataChartTypeRadialSeriesComponent,
//         data: chartsRoutesData["data-chart-radial-chart-types"],
//         path: "data-chart-radial-chart-types"
//     },
//     {
//         component: DataChartTypeRadialAreaSeriesComponent,
//         data: chartsRoutesData["data-chart-type-radial-area-series"],
//         path: "data-chart-type-radial-area-series"
//     },
//     {
//         component: DataChartTypeRadialColumnSeriesComponent,
//         data: chartsRoutesData["data-chart-type-radial-column-series"],
//         path: "data-chart-type-radial-column-series"
//     },
//     {
//         component: DataChartTypeRadialLineSeriesComponent,
//         data: chartsRoutesData["data-chart-type-radial-line-series"],
//         path: "data-chart-type-radial-line-series"
//     },
//     {
//         component: DataChartTypeRadialPieSeriesComponent,
//         data: chartsRoutesData["data-chart-type-radial-pie-series"],
//         path: "data-chart-type-radial-pie-series"
//     },
//     {
//         component: DataChartTypeRangeSeriesComponent,
//         data: chartsRoutesData["data-chart-type-range-series"],
//         path: "data-chart-type-range-series"
//     },
//     {
//         component: DataChartTypeRangeAreaSeriesComponent,
//         data: chartsRoutesData["data-chart-type-range-area-series"],
//         path: "data-chart-type-range-area-series"
//     },
//     {
//         component: DataChartTypeRangeColumnSeriesComponent,
//         data: chartsRoutesData["data-chart-type-range-column-series"],
//         path: "data-chart-type-range-column-series"
//     },
//     {
//         component: DataChartTypeScatterAreaSeriesComponent,
//         data: chartsRoutesData["data-chart-type-scatter-area-series"],
//         path: "data-chart-type-scatter-area-series"
//     },
//     {
//         component: DataChartTypeScatterBubbleSeriesComponent,
//         data: chartsRoutesData["data-chart-type-scatter-bubble-series"],
//         path: "data-chart-type-scatter-bubble-series"
//     },
//     {
//         component: DataChartTypeScatterContourSeriesComponent,
//         data: chartsRoutesData["data-chart-type-scatter-contour-series"],
//         path: "data-chart-type-scatter-contour-series"
//     },
//     {
//         component: DataChartTypeScatterHdSeriesComponent,
//         data: chartsRoutesData["data-chart-type-scatter-hd-series"],
//         path: "data-chart-type-scatter-hd-series"
//     },
//     {
//         component: DataChartTypeScatterLineSeriesComponent,
//         data: chartsRoutesData["data-chart-type-scatter-line-series"],
//         path: "data-chart-type-scatter-line-series"
//     },
//     {
//         component: DataChartTypeScatterPointSeriesComponent,
//         data: chartsRoutesData["data-chart-type-scatter-point-series"],
//         path: "data-chart-type-scatter-point-series"
//     },
//     {
//         component: DataChartScatterBubbleChartMultipleSourcesComponent,
//         data: chartsRoutesData["data-chart-scatter-bubble-chart-multiple-sources"],
//         path: "data-chart-scatter-bubble-chart-multiple-sources"
//     },
//     {
//         component: DataChartScatterBubbleChartSingleSourceComponent,
//         data: chartsRoutesData["data-chart-scatter-bubble-chart-single-source"],
//         path: "data-chart-scatter-bubble-chart-single-source"
//     },
//     {
//         component: DataChartScatterBubbleChartStylingComponent,
//         data: chartsRoutesData["data-chart-scatter-bubble-chart-styling"],
//         path: "data-chart-scatter-bubble-chart-styling"
//     },
//     {
//         component: DataChartTypeScatterSeriesComponent,
//         data: chartsRoutesData["data-chart-type-scatter-series"],
//         path: "data-chart-type-scatter-series"
//     },
//     {
//         component: DataChartTypeScatterSplineSeriesComponent,
//         data: chartsRoutesData["data-chart-type-scatter-spline-series"],
//         path: "data-chart-type-scatter-spline-series"
//     },
//     {
//         component: DataChartTypeScatterShapeSeriesComponent,
//         data: chartsRoutesData["data-chart-type-shape-series"],
//         path: "data-chart-type-shape-series"
//     },
//     {
//         component: DataChartTypeScatterPolygonSeriesComponent,
//         data: chartsRoutesData["data-chart-type-scatter-polygon-series"],
//         path: "data-chart-type-scatter-polygon-series"
//     },
//     {
//         component: DataChartTypeScatterPolylineSeriesComponent,
//         data: chartsRoutesData["data-chart-type-scatter-polyline-series"],
//         path: "data-chart-type-scatter-polyline-series"
//     },
//     {
//         component: DataChartTypeStacked100AreaSeriesComponent,
//         data: chartsRoutesData["data-chart-type-stacked-100-area-series"],
//         path: "data-chart-type-stacked-100-area-series"
//     },
//     {
//         component: DataChartTypeStacked100BarSeriesComponent,
//         data: chartsRoutesData["data-chart-type-stacked-100-bar-series"],
//         path: "data-chart-type-stacked-100-bar-series"
//     },
//     {
//         component: DataChartTypeStacked100ColumnSeriesComponent,
//         data: chartsRoutesData["data-chart-type-stacked-100-column-series"],
//         path: "data-chart-type-stacked-100-column-series"
//     },
//     {
//         component: DataChartTypeStacked100LineSeriesComponent,
//         data: chartsRoutesData["data-chart-type-stacked-100-line-series"],
//         path: "data-chart-type-stacked-100-line-series"
//     },
//     {
//         component: DataChartTypeStacked100SplineSeriesComponent,
//         data: chartsRoutesData["data-chart-type-stacked-100-spline-series"],
//         path: "data-chart-type-stacked-100-spline-series"
//     },
//     {
//         component: DataChartTypeStacked100SplineAreaSeriesComponent,
//         data: chartsRoutesData["data-chart-type-stacked-100-spline-area-series"],
//         path: "data-chart-type-stacked-100-spline-area-series"
//     },
//     {
//         component: DataChartTypeStackedAreaSeriesComponent,
//         data: chartsRoutesData["data-chart-type-stacked-area-series"],
//         path: "data-chart-type-stacked-area-series"
//     },
//     {
//         component: DataChartTypeStackedBarSeriesComponent,
//         data: chartsRoutesData["data-chart-type-stacked-bar-series"],
//         path: "data-chart-type-stacked-bar-series"
//     },
//     {
//         component: DataChartTypeStackedColumnSeriesComponent,
//         data: chartsRoutesData["data-chart-type-stacked-column-series"],
//         path: "data-chart-type-stacked-column-series"
//     },
//     {
//         component: DataChartTypeStackedLineSeriesComponent,
//         data: chartsRoutesData["data-chart-type-stacked-line-series"],
//         path: "data-chart-type-stacked-line-series"
//     },
//     {
//         component: DataChartTypeStackedSplineSeriesComponent,
//         data: chartsRoutesData["data-chart-type-stacked-spline-series"],
//         path: "data-chart-type-stacked-spline-series"
//     },
//     {
//         component: DataChartTypeStackedSplineAreaSeriesComponent,
//         data: chartsRoutesData["data-chart-type-stacked-spline-area-series"],
//         path: "data-chart-type-stacked-spline-area-series"
//     },
//     {
//         component: DataChartTypeValueOverlayComponent,
//         data: chartsRoutesData["data-chart-series-value-overlay"],
//         path: "data-chart-series-value-overlay"
//     },
//     // financial-chart
//     {
//         component: FinancialChartOverviewComponent,
//         data: chartsRoutesData["financial-chart-overview"],
//         path: "financial-chart-overview"
//     },
//     {
//         component: FinancialChartPerformanceComponent,
//         data: chartsRoutesData["financial-chart-performance"],
//         path: "financial-chart-performance"
//     },
//     {
//         component: FinancialChartAnnotationsComponent,
//         data: chartsRoutesData["financial-chart-annotations"],
//         path: "financial-chart-annotations"
//     },
//     {
//         component: FinancialChartTitlesComponent,
//         data: chartsRoutesData["financial-chart-titles"],
//         path: "financial-chart-titles"
//     },
//     {
//         component: FinancialChartPanesComponent,
//         data: chartsRoutesData["financial-chart-panes"],
//         path: "financial-chart-panes"
//     },
//     {
//         component: FinancialChartMultipleDataComponent,
//         data: chartsRoutesData["financial-chart-multiple-data"],
//         path: "financial-chart-multiple-data"
//     },
//     {
//         component: FinancialChartMultipleFeedsComponent,
//         data: chartsRoutesData["financial-chart-multiple-feeds"],
//         path: "financial-chart-multiple-feeds"
//     },
//     {
//         component: FinancialChartIndicatorTypesComponent,
//         data: chartsRoutesData["financial-chart-indicator-types"],
//         path: "financial-chart-indicator-types"
//     },
//     {
//         component: FinancialChartVolumeTypeComponent,
//         data: chartsRoutesData["financial-chart-volume-type"],
//         path: "financial-chart-volume-type"
//     },
//     {
//         component: FinancialChartCustomIndicatorsComponent,
//         data: chartsRoutesData["financial-chart-custom-indicators"],
//         path: "financial-chart-custom-indicators"
//     },
//     {
//         component: FinancialChartHighVolumeComponent,
//         data: chartsRoutesData["financial-chart-high-volume"],
//         path: "financial-chart-high-volume"
//     },
//     {
//         component: FinancialChartHighFrequencyComponent,
//         data: chartsRoutesData["financial-chart-high-frequency"],
//         path: "financial-chart-high-frequency"
//     },
//     {
//         component: FinancialChartAxisTypesComponent,
//         data: chartsRoutesData["financial-chart-axis-types"],
//         path: "financial-chart-axis-types"
//     },
//     {
//         component: FinancialChartTooltipTemplateComponent,
//         data: chartsRoutesData["financial-chart-tooltip-template"],
//         path: "financial-chart-tooltip-template"
//     },
//     {
//         component: FinancialChartTooltipTypesComponent,
//         data: chartsRoutesData["financial-chart-tooltip-types"],
//         path: "financial-chart-tooltip-types"
//     },
//     {
//         component: FinancialChartTimeBasedDataComponent,
//         data: chartsRoutesData["financial-chart-time-based-data"],
//         path: "financial-chart-time-based-data"
//     },
//     {
//         component: FinancialChartTrendlinesComponent,
//         data: chartsRoutesData["financial-chart-trendlines"],
//         path: "financial-chart-trendlines"
//     },
//     {
//         component: FinancialChartStylingComponent,
//         data: chartsRoutesData["financial-chart-styling"],
//         path: "financial-chart-styling"
//     },
//     {
//         component: FinancialChartStockIndexChartComponent,
//         data: chartsRoutesData["financial-chart-stock-index-chart"],
//         path: "financial-chart-stock-index-chart"
//     },
//     // sparkline-chart
//     {
//         component: SparklineDisplayTypesComponent,
//         data: chartsRoutesData["sparkline-display-types"],
//         path: "sparkline-display-types"
//     },
//     {
//         component: SparklineGridComponent,
//         data: chartsRoutesData["sparkline-grid"],
//         path: "sparkline-grid"
//     },
//     {
//         component: SparklineMarkersComponent,
//         data: chartsRoutesData["sparkline-markers"],
//         path: "sparkline-markers"
//     },
//     {
//         component: SparklineNormalRangeComponent,
//         data: chartsRoutesData["sparkline-normal-range"],
//         path: "sparkline-normal-range"
//     },
//     {
//         component: SparklineTrendlinesComponent,
//         data: chartsRoutesData["sparkline-trendlines"],
//         path: "sparkline-trendlines"
//     },
//     {
//         component: SparklineUnknownValuesComponent,
//         data: chartsRoutesData["sparkline-unknown-values"],
//         path: "sparkline-unknown-values"
//     },
//     {
//         component: DataChartAxisCrossingComponent,
//         data: chartsRoutesData["data-chart-axis-crossing"],
//         path: "data-chart-axis-crossing"
//     },
// 	{
//         component: DataChartBarChartMultipleSourcesComponent,
//         data: chartsRoutesData["data-chart-bar-chart-multiple-sources"],
//         path: "data-chart-bar-chart-multiple-sources"
//     },
// 	{
//         component: DataChartBarChartSingleSourceComponent,
//         data: chartsRoutesData["data-chart-bar-chart-single-source"],
//         path: "data-chart-bar-chart-single-source"
//     },
// 	{
//         component: DataChartBarChartStylingComponent,
//         data: chartsRoutesData["data-chart-bar-chart-styling"],
//         path: "data-chart-bar-chart-styling"
//     },
//     {
//         component : DataChartCalloutLayerStylingComponent,
//         data: chartsRoutesData["data-chart-callout-layer-styling"],
//         path: "data-chart-callout-layer-styling"
//     },
//     {
//         component : DataChartColumnChartStylingComponent,
//         data: chartsRoutesData["data-chart-column-chart-styling"],
//         path: "data-chart-column-chart-styling"
//     },
//     {
//         component : DataChartCompositeChartComponent,
//         data: chartsRoutesData["data-chart-composite-chart"],
//         path: "data-chart-composite-chart"
//     },
//     {
//         component : DataChartCrosshairLayerStylingComponent,
//         data: chartsRoutesData["data-chart-crosshair-layer-styling"],
//         path: "data-chart-crosshair-layer-styling"
//     },
//     {
//         component : DataChartFinalValueLayerStylingComponent,
//         data: chartsRoutesData["data-chart-final-value-layer-styling"],
//         path: "data-chart-final-value-layer-styling"
//     },
// 	{
//         component: DataChartPolarAreaChartComponent,
//         data: chartsRoutesData["data-chart-polar-area-chart"],
//         path: "data-chart-polar-area-chart"
//     },
// 	{
//         component: DataChartPolarAreaChartStylingComponent,
//         data: chartsRoutesData["data-chart-polar-area-chart-styling"],
//         path: "data-chart-polar-area-chart-styling"
//     },
//     {
//         component: DataChartPolarSplineAreaChartComponent,
//         data: chartsRoutesData["data-chart-polar-spline-area-chart"],
//         path: "data-chart-polar-spline-area-chart"
//     },
//     {
//         component: DataChartRadialAreaChartComponent,
//         data: chartsRoutesData["data-chart-radial-area-chart"],
//         path: "data-chart-radial-area-chart"
//     },
// 	{
//         component: DataChartRadialAreaChartStylingComponent,
//         data: chartsRoutesData["data-chart-radial-area-chart-styling"],
//         path: "data-chart-radial-area-chart-styling"
//     },
//     {
//         component: DataChartRadialColumnChartComponent,
//         data: chartsRoutesData["data-chart-radial-column-chart"],
//         path: "data-chart-radial-column-chart"
//     },
//     {
//         component: DataChartRadialLineChartComponent,
//         data: chartsRoutesData["data-chart-radial-line-chart"],
//         path: "data-chart-radial-line-chart"
//     },
// 	{
//         component: DataChartRangeAreaChartComponent,
//         data: chartsRoutesData["data-chart-range-area-chart"],
//         path: "data-chart-range-area-chart"
//     },
//     {
//         component: DataChartRangeColumnChartComponent,
//         data: chartsRoutesData["data-chart-range-column-chart"],
//         path: "data-chart-range-column-chart"
//     },
//     {
//         component: DataChartScatterLineChartComponent,
//         data: chartsRoutesData["data-chart-scatter-line-chart"],
//         path: "data-chart-scatter-line-chart"
//     },
//     {
//         component: DataChartScatterPointChartComponent,
//         data: chartsRoutesData["data-chart-scatter-point-chart"],
//         path: "data-chart-scatter-point-chart"
//     },
//     {
//         component: DataChartScatterSplineChartComponent,
//         data: chartsRoutesData["data-chart-scatter-spline-chart"],
//         path: "data-chart-scatter-spline-chart"
//     },
//     {
//         component: DataChartStackedSeriesComponent,
//         data: chartsRoutesData["data-chart-stacked-chart-types"],
//         path: "data-chart-stacked-chart-types"
//     },
// 	{
// 		component: DataChartStackedAreaChartComponent,
//         data: chartsRoutesData["data-chart-stacked-area-chart"],
//         path: "data-chart-stacked-area-chart"
//     },
// 	{
//         component: DataChartStackedBarChartComponent,
//         data: chartsRoutesData["data-chart-stacked-bar-chart"],
//         path: "data-chart-stacked-bar-chart"
//     },
//     {
//         component: DataChartStackedColumnChartComponent,
//         data: chartsRoutesData["data-chart-stacked-column-chart"],
//         path: "data-chart-stacked-column-chart"
//     },
// 	{
//         component: DataChartStackedSplineChartComponent,
//         data: chartsRoutesData["data-chart-stacked-spline-chart"],
//         path: "data-chart-stacked-spline-chart"
//     },
//     {
//         component: DataChartStackedLineChartComponent,
//         data: chartsRoutesData["data-chart-stacked-line-chart"],
//         path: "data-chart-stacked-line-chart"
//     },
// 	{
//         component: DataChartStackedSplineAreaChartComponent,
//         data: chartsRoutesData["data-chart-stacked-spline-area-chart"],
//         path: "data-chart-stacked-spline-area-chart"
//     },
//     {
//         component: DataChartStacked100AreaChartComponent,
//         data: chartsRoutesData["data-chart-stacked-100-area-chart"],
//         path: "data-chart-stacked-100-area-chart"
//     },
// 	{
//         component: DataChartStacked100BarChartComponent,
//         data: chartsRoutesData["data-chart-stacked-100-bar-chart"],
//         path: "data-chart-stacked-100-bar-chart"
//     },
//     {
//         component: DataChartStacked100ColumnChartComponent,
//         data: chartsRoutesData["data-chart-stacked-100-column-chart"],
//         path: "data-chart-stacked-100-column-chart"
//     },
// 	{
//         component: DataChartStacked100SplineChartComponent,
//         data: chartsRoutesData["data-chart-stacked-100-spline-chart"],
//         path: "data-chart-stacked-100-spline-chart"
//     },
//     {
//         component: DataChartStacked100LineChartComponent,
//         data: chartsRoutesData["data-chart-stacked-100-line-chart"],
//         path: "data-chart-stacked-100-line-chart"
//     },
//     {
//         component: DataChartStacked100SplineAreaChartComponent,
//         data: chartsRoutesData["data-chart-stacked-100-spline-area-chart"],
//         path: "data-chart-stacked-100-spline-area-chart"
//     },
//     {
//         component: DataChartWaterfallChartComponent,
//         data: chartsRoutesData["data-chart-waterfall-chart"],
//         path: "data-chart-waterfall-chart"
//     },
//     {
//         component: DataChartTooltipTemplateComponent,
//         data: chartsRoutesData["data-chart-tooltip-template"],
//         path: "data-chart-tooltip-template"
//     },
// ];

// @NgModule({
//     exports: [
//         RouterModule
//     ],
//     imports: [
//         CategoryChartSamplesModule,
//         CategoryChartPerformanceSamplesModule,
//         FinancialChartSamplesModule,
//         DataChartSamplesModule,
//         PieChartSamplesModule,
//         DoughnutChartSamplesModule,
//         RouterModule.forChild(chartsRoutes)
//     ]
// })
// export class ChartsRoutingModule { }
