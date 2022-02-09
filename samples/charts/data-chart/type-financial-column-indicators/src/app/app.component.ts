import { Component, OnInit, ViewChild } from "@angular/core";
import { SampleFinancialData } from "./SampleFinancialData";
import { IgxAbsoluteVolumeOscillatorIndicatorComponent } from "igniteui-angular-charts";
import { IgxAccumulationDistributionIndicatorComponent } from "igniteui-angular-charts";
import { IgxAverageDirectionalIndexIndicatorComponent } from "igniteui-angular-charts";
import { IgxAverageTrueRangeIndicatorComponent } from "igniteui-angular-charts";
import { IgxBollingerBandWidthIndicatorComponent } from "igniteui-angular-charts";
import { IgxChaikinVolatilityIndicatorComponent } from "igniteui-angular-charts";
import { IgxChaikinOscillatorIndicatorComponent } from "igniteui-angular-charts";
import { IgxCommodityChannelIndexIndicatorComponent } from "igniteui-angular-charts";
import { IgxDetrendedPriceOscillatorIndicatorComponent } from "igniteui-angular-charts";
import { IgxEaseOfMovementIndicatorComponent } from "igniteui-angular-charts";
import { IgxFastStochasticOscillatorIndicatorComponent } from "igniteui-angular-charts";
import { IgxForceIndexIndicatorComponent } from "igniteui-angular-charts";
import { IgxFullStochasticOscillatorIndicatorComponent } from "igniteui-angular-charts";
import { IgxMarketFacilitationIndexIndicatorComponent } from "igniteui-angular-charts";
import { IgxMassIndexIndicatorComponent } from "igniteui-angular-charts";
import { IgxMedianPriceIndicatorComponent } from "igniteui-angular-charts";
import { IgxMoneyFlowIndexIndicatorComponent } from "igniteui-angular-charts";
import { IgxMovingAverageConvergenceDivergenceIndicatorComponent } from "igniteui-angular-charts";
import { IgxNegativeVolumeIndexIndicatorComponent } from "igniteui-angular-charts";
import { IgxOnBalanceVolumeIndicatorComponent } from "igniteui-angular-charts";
import { IgxPercentagePriceOscillatorIndicatorComponent } from "igniteui-angular-charts";
import { IgxPercentageVolumeOscillatorIndicatorComponent } from "igniteui-angular-charts";
import { IgxPositiveVolumeIndexIndicatorComponent } from "igniteui-angular-charts";
import { IgxPriceVolumeTrendIndicatorComponent } from "igniteui-angular-charts";
import { IgxRateOfChangeAndMomentumIndicatorComponent } from "igniteui-angular-charts";
import { IgxRelativeStrengthIndexIndicatorComponent } from "igniteui-angular-charts";
import { IgxSlowStochasticOscillatorIndicatorComponent } from "igniteui-angular-charts";
import { IgxStandardDeviationIndicatorComponent } from "igniteui-angular-charts";
import { IgxStochRSIIndicatorComponent } from "igniteui-angular-charts";
import { IgxTRIXIndicatorComponent } from "igniteui-angular-charts";
import { IgxCategoryXAxisComponent } from "igniteui-angular-charts";
import { IgxDataChartComponent } from "igniteui-angular-charts";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts";
import { IndicatorDisplayType } from "igniteui-angular-charts";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    public data: any[] = SampleFinancialData.create();
    private displayType : IndicatorDisplayType = IndicatorDisplayType.Column;

    @ViewChild("chart", { static: true })
    public chart: IgxDataChartComponent;

    @ViewChild("xAxis2", { static: true })
    public xAxis: IgxCategoryXAxisComponent;

    @ViewChild("yAxis3", { static: true })
    public indicatorYAxis: IgxNumericYAxisComponent;

    constructor() { }

    ngOnInit() {
        this.switchSeries("AbsoluteVolumeOscillator");
    }

    public onIndicatorChanged = (e: any) => {
        const type = e.target.value.toString();
        this.chart.series.clear();
        this.switchSeries(type);
    }

    public switchSeries(seriesType: any) {
        switch (seriesType) {
            case "AbsoluteVolumeOscillator": {
                const indicator: IgxAbsoluteVolumeOscillatorIndicatorComponent = new IgxAbsoluteVolumeOscillatorIndicatorComponent();
                indicator.xAxis = this.xAxis;
                indicator.yAxis = this.indicatorYAxis;
                indicator.displayType = this.displayType;
                indicator.highMemberPath = "High";
                indicator.lowMemberPath = "Low";
                indicator.closeMemberPath = "Close";
                indicator.openMemberPath = "Open";
                indicator.volumeMemberPath = "Volume";
                this.chart.series.add(indicator);
                break;
            }
            case "AccumulationDistribution": {
                const indicator: IgxAccumulationDistributionIndicatorComponent = new IgxAccumulationDistributionIndicatorComponent();
                indicator.xAxis = this.xAxis;
                indicator.yAxis = this.indicatorYAxis;
                indicator.displayType = this.displayType;
                indicator.highMemberPath = "High";
                indicator.lowMemberPath = "Low";
                indicator.closeMemberPath = "Close";
                indicator.openMemberPath = "Open";
                indicator.volumeMemberPath = "Volume";
                this.chart.series.add(indicator);
                break;
            }
            case "AverageDirectionalIndex": {
                const indicator: IgxAverageDirectionalIndexIndicatorComponent = new IgxAverageDirectionalIndexIndicatorComponent();
                indicator.xAxis = this.xAxis;
                indicator.yAxis = this.indicatorYAxis;
                indicator.displayType = this.displayType;
                indicator.highMemberPath = "High";
                indicator.lowMemberPath = "Low";
                indicator.closeMemberPath = "Close";
                indicator.openMemberPath = "Open";
                indicator.volumeMemberPath = "Volume";
                this.chart.series.add(indicator);
                break;
            }
            case "AverageTrueRange": {
                const indicator: IgxAverageTrueRangeIndicatorComponent = new IgxAverageTrueRangeIndicatorComponent();
                indicator.xAxis = this.xAxis;
                indicator.yAxis = this.indicatorYAxis;
                indicator.displayType = this.displayType;
                indicator.highMemberPath = "High";
                indicator.lowMemberPath = "Low";
                indicator.closeMemberPath = "Close";
                indicator.openMemberPath = "Open";
                indicator.volumeMemberPath = "Volume";
                this.chart.series.add(indicator);
                break;
            }
            case "BollingerBandWidth": {
                const indicator: IgxBollingerBandWidthIndicatorComponent = new IgxBollingerBandWidthIndicatorComponent();
                indicator.xAxis = this.xAxis;
                indicator.yAxis = this.indicatorYAxis;
                indicator.displayType = this.displayType;
                indicator.highMemberPath = "High";
                indicator.lowMemberPath = "Low";
                indicator.closeMemberPath = "Close";
                indicator.openMemberPath = "Open";
                indicator.volumeMemberPath = "Volume";
                this.chart.series.add(indicator);
                break;
            }
            case "ChaikinVolatility": {
                const indicator: IgxChaikinVolatilityIndicatorComponent = new IgxChaikinVolatilityIndicatorComponent();
                indicator.xAxis = this.xAxis;
                indicator.yAxis = this.indicatorYAxis;
                indicator.displayType = this.displayType;
                indicator.highMemberPath = "High";
                indicator.lowMemberPath = "Low";
                indicator.closeMemberPath = "Close";
                indicator.openMemberPath = "Open";
                indicator.volumeMemberPath = "Volume";
                this.chart.series.add(indicator);
                break;
            }
            case "ChaikinOscillator": {
                const indicator: IgxChaikinOscillatorIndicatorComponent = new IgxChaikinOscillatorIndicatorComponent();
                indicator.xAxis = this.xAxis;
                indicator.yAxis = this.indicatorYAxis;
                indicator.displayType = this.displayType;
                indicator.highMemberPath = "High";
                indicator.lowMemberPath = "Low";
                indicator.closeMemberPath = "Close";
                indicator.openMemberPath = "Open";
                indicator.volumeMemberPath = "Volume";
                this.chart.series.add(indicator);
                break;
            }
            case "CommodityChannelIndex": {
                const indicator: IgxCommodityChannelIndexIndicatorComponent = new IgxCommodityChannelIndexIndicatorComponent();
                indicator.xAxis = this.xAxis;
                indicator.yAxis = this.indicatorYAxis;
                indicator.displayType = this.displayType;
                indicator.highMemberPath = "High";
                indicator.lowMemberPath = "Low";
                indicator.closeMemberPath = "Close";
                indicator.openMemberPath = "Open";
                indicator.volumeMemberPath = "Volume";
                this.chart.series.add(indicator);
                break;
            }
            case "DetrendedPriceOscillator": {
                const indicator: IgxDetrendedPriceOscillatorIndicatorComponent = new IgxDetrendedPriceOscillatorIndicatorComponent();
                indicator.xAxis = this.xAxis;
                indicator.yAxis = this.indicatorYAxis;
                indicator.displayType = this.displayType;
                indicator.highMemberPath = "High";
                indicator.lowMemberPath = "Low";
                indicator.closeMemberPath = "Close";
                indicator.openMemberPath = "Open";
                indicator.volumeMemberPath = "Volume";
                this.chart.series.add(indicator);
                break;
            }
            case "EaseOfMovement": {
                const indicator: IgxEaseOfMovementIndicatorComponent = new IgxEaseOfMovementIndicatorComponent();
                indicator.xAxis = this.xAxis;
                indicator.yAxis = this.indicatorYAxis;
                indicator.displayType = this.displayType;
                indicator.highMemberPath = "High";
                indicator.lowMemberPath = "Low";
                indicator.closeMemberPath = "Close";
                indicator.openMemberPath = "Open";
                indicator.volumeMemberPath = "Volume";
                this.chart.series.add(indicator);
                break;
            }
            case "FastStochasticOscillator": {
                const indicator: IgxFastStochasticOscillatorIndicatorComponent = new IgxFastStochasticOscillatorIndicatorComponent();
                indicator.xAxis = this.xAxis;
                indicator.yAxis = this.indicatorYAxis;
                indicator.displayType = this.displayType;
                indicator.highMemberPath = "High";
                indicator.lowMemberPath = "Low";
                indicator.closeMemberPath = "Close";
                indicator.openMemberPath = "Open";
                indicator.volumeMemberPath = "Volume";
                this.chart.series.add(indicator);
                break;
            }
            case "ForceIndex": {
                const indicator: IgxForceIndexIndicatorComponent = new IgxForceIndexIndicatorComponent();
                indicator.xAxis = this.xAxis;
                indicator.yAxis = this.indicatorYAxis;
                indicator.displayType = this.displayType;
                indicator.highMemberPath = "High";
                indicator.lowMemberPath = "Low";
                indicator.closeMemberPath = "Close";
                indicator.openMemberPath = "Open";
                indicator.volumeMemberPath = "Volume";
                this.chart.series.add(indicator);
                break;
            }
            case "FullStochasticOscillator": {
                const indicator: IgxFullStochasticOscillatorIndicatorComponent = new IgxFullStochasticOscillatorIndicatorComponent();
                indicator.xAxis = this.xAxis;
                indicator.yAxis = this.indicatorYAxis;
                indicator.displayType = this.displayType;
                indicator.highMemberPath = "High";
                indicator.lowMemberPath = "Low";
                indicator.closeMemberPath = "Close";
                indicator.openMemberPath = "Open";
                indicator.volumeMemberPath = "Volume";
                this.chart.series.add(indicator);
                break;
            }
            case "MarketFacilitationIndex": {
                const indicator: IgxMarketFacilitationIndexIndicatorComponent = new IgxMarketFacilitationIndexIndicatorComponent();
                indicator.xAxis = this.xAxis;
                indicator.yAxis = this.indicatorYAxis;
                indicator.displayType = this.displayType;
                indicator.highMemberPath = "High";
                indicator.lowMemberPath = "Low";
                indicator.closeMemberPath = "Close";
                indicator.openMemberPath = "Open";
                indicator.volumeMemberPath = "Volume";
                this.chart.series.add(indicator);
                break;
            }
            case "MassIndex": {
                const indicator: IgxMassIndexIndicatorComponent = new IgxMassIndexIndicatorComponent();
                indicator.xAxis = this.xAxis;
                indicator.yAxis = this.indicatorYAxis;
                indicator.displayType = this.displayType;
                indicator.highMemberPath = "High";
                indicator.lowMemberPath = "Low";
                indicator.closeMemberPath = "Close";
                indicator.openMemberPath = "Open";
                indicator.volumeMemberPath = "Volume";
                this.chart.series.add(indicator);
                break;
            }
            case "MedianPrice": {
                const indicator: IgxMedianPriceIndicatorComponent = new IgxMedianPriceIndicatorComponent();
                indicator.xAxis = this.xAxis;
                indicator.yAxis = this.indicatorYAxis;
                indicator.displayType = this.displayType;
                indicator.highMemberPath = "High";
                indicator.lowMemberPath = "Low";
                indicator.closeMemberPath = "Close";
                indicator.openMemberPath = "Open";
                indicator.volumeMemberPath = "Volume";
                this.chart.series.add(indicator);
                break;
            }
            case "MoneyFlowIndex": {
                const indicator: IgxMoneyFlowIndexIndicatorComponent = new IgxMoneyFlowIndexIndicatorComponent();
                indicator.xAxis = this.xAxis;
                indicator.yAxis = this.indicatorYAxis;
                indicator.displayType = this.displayType;
                indicator.highMemberPath = "High";
                indicator.lowMemberPath = "Low";
                indicator.closeMemberPath = "Close";
                indicator.openMemberPath = "Open";
                indicator.volumeMemberPath = "Volume";
                this.chart.series.add(indicator);
                break;
            }
            case "MovingAverageConvergenceDivergence": {
                const indicator: IgxMovingAverageConvergenceDivergenceIndicatorComponent = new IgxMovingAverageConvergenceDivergenceIndicatorComponent();
                indicator.xAxis = this.xAxis;
                indicator.yAxis = this.indicatorYAxis;
                indicator.displayType = this.displayType;
                indicator.highMemberPath = "High";
                indicator.lowMemberPath = "Low";
                indicator.closeMemberPath = "Close";
                indicator.openMemberPath = "Open";
                indicator.volumeMemberPath = "Volume";
                this.chart.series.add(indicator);
                break;
            }
            case "NegativeVolumeIndex": {
                const indicator: IgxNegativeVolumeIndexIndicatorComponent = new IgxNegativeVolumeIndexIndicatorComponent();
                indicator.xAxis = this.xAxis;
                indicator.yAxis = this.indicatorYAxis;
                indicator.displayType = this.displayType;
                indicator.highMemberPath = "High";
                indicator.lowMemberPath = "Low";
                indicator.closeMemberPath = "Close";
                indicator.openMemberPath = "Open";
                indicator.volumeMemberPath = "Volume";
                this.chart.series.add(indicator);
                break;
            }
            case "OnBalanceVolume": {
                const indicator: IgxOnBalanceVolumeIndicatorComponent = new IgxOnBalanceVolumeIndicatorComponent();
                indicator.xAxis = this.xAxis;
                indicator.yAxis = this.indicatorYAxis;
                indicator.displayType = this.displayType;
                indicator.highMemberPath = "High";
                indicator.lowMemberPath = "Low";
                indicator.closeMemberPath = "Close";
                indicator.openMemberPath = "Open";
                indicator.volumeMemberPath = "Volume";
                this.chart.series.add(indicator);
                break;
            }
            case "PercentagePriceOscillator": {
                const indicator: IgxPercentagePriceOscillatorIndicatorComponent = new IgxPercentagePriceOscillatorIndicatorComponent();
                indicator.xAxis = this.xAxis;
                indicator.yAxis = this.indicatorYAxis;
                indicator.displayType = this.displayType;
                indicator.highMemberPath = "High";
                indicator.lowMemberPath = "Low";
                indicator.closeMemberPath = "Close";
                indicator.openMemberPath = "Open";
                indicator.volumeMemberPath = "Volume";
                this.chart.series.add(indicator);
                break;
            }
            case "PercentageVolumeOscillator": {
                const indicator: IgxPercentageVolumeOscillatorIndicatorComponent = new IgxPercentageVolumeOscillatorIndicatorComponent();
                indicator.xAxis = this.xAxis;
                indicator.yAxis = this.indicatorYAxis;
                indicator.displayType = this.displayType;
                indicator.highMemberPath = "High";
                indicator.lowMemberPath = "Low";
                indicator.closeMemberPath = "Close";
                indicator.openMemberPath = "Open";
                indicator.volumeMemberPath = "Volume";
                this.chart.series.add(indicator);
                break;
            }
            case "PositiveVolumeIndex": {
                const indicator: IgxPositiveVolumeIndexIndicatorComponent = new IgxPositiveVolumeIndexIndicatorComponent();
                indicator.xAxis = this.xAxis;
                indicator.yAxis = this.indicatorYAxis;
                indicator.displayType = this.displayType;
                indicator.highMemberPath = "High";
                indicator.lowMemberPath = "Low";
                indicator.closeMemberPath = "Close";
                indicator.openMemberPath = "Open";
                indicator.volumeMemberPath = "Volume";
                this.chart.series.add(indicator);
                break;
            }
            case "PriceVolumeTrend": {
                const indicator: IgxPriceVolumeTrendIndicatorComponent = new IgxPriceVolumeTrendIndicatorComponent();
                indicator.xAxis = this.xAxis;
                indicator.yAxis = this.indicatorYAxis;
                indicator.displayType = this.displayType;
                indicator.highMemberPath = "High";
                indicator.lowMemberPath = "Low";
                indicator.closeMemberPath = "Close";
                indicator.openMemberPath = "Open";
                indicator.volumeMemberPath = "Volume";
                this.chart.series.add(indicator);
                break;
            }
            case "RateOfChangeAndMomentum": {
                const indicator: IgxRateOfChangeAndMomentumIndicatorComponent = new IgxRateOfChangeAndMomentumIndicatorComponent();
                indicator.xAxis = this.xAxis;
                indicator.yAxis = this.indicatorYAxis;
                indicator.displayType = this.displayType;
                indicator.highMemberPath = "High";
                indicator.lowMemberPath = "Low";
                indicator.closeMemberPath = "Close";
                indicator.openMemberPath = "Open";
                indicator.volumeMemberPath = "Volume";
                this.chart.series.add(indicator);
                break;
            }
            case "RelativeStrengthIndex": {
                const indicator: IgxRelativeStrengthIndexIndicatorComponent = new IgxRelativeStrengthIndexIndicatorComponent();
                indicator.xAxis = this.xAxis;
                indicator.yAxis = this.indicatorYAxis;
                indicator.displayType = this.displayType;
                indicator.highMemberPath = "High";
                indicator.lowMemberPath = "Low";
                indicator.closeMemberPath = "Close";
                indicator.openMemberPath = "Open";
                indicator.volumeMemberPath = "Volume";
                this.chart.series.add(indicator);
                break;
            }
            case "SlowStochasticOscillator": {
                const indicator: IgxSlowStochasticOscillatorIndicatorComponent = new IgxSlowStochasticOscillatorIndicatorComponent();
                indicator.xAxis = this.xAxis;
                indicator.yAxis = this.indicatorYAxis;
                indicator.displayType = this.displayType;
                indicator.highMemberPath = "High";
                indicator.lowMemberPath = "Low";
                indicator.closeMemberPath = "Close";
                indicator.openMemberPath = "Open";
                indicator.volumeMemberPath = "Volume";
                this.chart.series.add(indicator);
                break;
            }
            case "StandardDeviation": {
                const indicator: IgxStandardDeviationIndicatorComponent = new IgxStandardDeviationIndicatorComponent();
                indicator.xAxis = this.xAxis;
                indicator.yAxis = this.indicatorYAxis;
                indicator.displayType = this.displayType;
                indicator.highMemberPath = "High";
                indicator.lowMemberPath = "Low";
                indicator.closeMemberPath = "Close";
                indicator.openMemberPath = "Open";
                indicator.volumeMemberPath = "Volume";
                this.chart.series.add(indicator);
                break;
            }
            case "StochRSI": {
                const indicator: IgxStochRSIIndicatorComponent = new IgxStochRSIIndicatorComponent();
                indicator.xAxis = this.xAxis;
                indicator.yAxis = this.indicatorYAxis;
                indicator.displayType = this.displayType;
                indicator.highMemberPath = "High";
                indicator.lowMemberPath = "Low";
                indicator.closeMemberPath = "Close";
                indicator.openMemberPath = "Open";
                indicator.volumeMemberPath = "Volume";
                this.chart.series.add(indicator);
                break;
            }
            case "TRIX": {
                const indicator: IgxTRIXIndicatorComponent = new IgxTRIXIndicatorComponent();
                indicator.xAxis = this.xAxis;
                indicator.yAxis = this.indicatorYAxis;
                indicator.displayType = this.displayType;
                indicator.highMemberPath = "High";
                indicator.lowMemberPath = "Low";
                indicator.closeMemberPath = "Close";
                indicator.openMemberPath = "Open";
                indicator.volumeMemberPath = "Volume";
                this.chart.series.add(indicator);
                break;
            }
        }
    }
}
