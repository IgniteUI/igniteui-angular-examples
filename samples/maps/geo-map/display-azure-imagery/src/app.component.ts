import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  AzureMapsImageryStyle,
  IgxAzureMapsImagery,
  IgxGeographicMapComponent,
  IgxGeographicTileSeriesComponent
} from 'igniteui-angular-maps';
import {
  IgxDialogComponent,
  IgxSelectComponent
} from 'igniteui-angular';
import { MapRegion, MapUtility } from './MapUtility';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('map', { static: false }) map!: IgxGeographicMapComponent;
  @ViewChild('tileSeries', { static: false }) tileSeries!: IgxGeographicTileSeriesComponent;
  @ViewChild('dialog', { static: false }) dialog!: IgxDialogComponent;
  @ViewChild('styleSelect', { static: false }) styleSelect!: IgxSelectComponent;

  // Bound to the input in the dialog
  public apiKeyInputValue: string = '';

  public azureTile!: IgxAzureMapsImagery;
  public azureBackground!: IgxAzureMapsImagery;
  public apiKey?: string;
  public styleChangeTimeout?: number;

  public styleOptions: string[] = [];
  public selectedStyle!: string;
  public previewImageSrc: string = '';

  public styleConfig: Record<string, { placeholder: string; background?: AzureMapsImageryStyle; zoom: () => void }> = {
    Satellite: { placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_satellite.png", zoom: () => this.zoomUS() },
    Road: { placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_road.png", zoom: () => this.zoomUS() },
    DarkGrey: { placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_darkgrey.png", zoom: () => this.zoomUS() },
    TerraOverlay: { placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_terra_overlay.png", background: AzureMapsImageryStyle.Satellite, zoom: () => this.zoomUS() },
    HybridRoadOverlay: { placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/AzureHybridRoad.png", background: AzureMapsImageryStyle.Satellite, zoom: () => this.zoomUS() },
    HybridDarkGreyOverlay: { placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_hybriddarkgrey.png", background: AzureMapsImageryStyle.Satellite, zoom: () => this.zoomUS() },
    LabelsRoadOverlay: { placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_labelsroad.png", background: AzureMapsImageryStyle.Satellite, zoom: () => this.zoomUS() },
    LabelsDarkGreyOverlay: { placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_labelsdarkgrey.png", background: AzureMapsImageryStyle.Satellite, zoom: () => this.zoomUS() },
    TrafficDelayOverlay: { placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_trafficdelay.png", background: AzureMapsImageryStyle.DarkGrey, zoom: () => this.zoomNY() },
    TrafficAbsoluteOverlay: { placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_traffic_absolute.png", background: AzureMapsImageryStyle.DarkGrey, zoom: () => this.zoomNY() },
    TrafficReducedOverlay: { placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_traffic_light.png", background: AzureMapsImageryStyle.DarkGrey, zoom: () => this.zoomNY() },
    TrafficRelativeOverlay: { placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_traffic_relative.png", background: AzureMapsImageryStyle.DarkGrey, zoom: () => this.zoomNY() },
    WeatherInfraredOverlay: { placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_weather_Infrared_road.png", background: AzureMapsImageryStyle.DarkGrey, zoom: () => this.zoomUS() },
    WeatherRadarOverlay: { placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_weather_radar.png", background: AzureMapsImageryStyle.DarkGrey, zoom: () => this.zoomUS() }
  };

  ngOnInit(): void {
    // Preload preview images
    Object.values(this.styleConfig).forEach(cfg => new Image().src = cfg.placeholder);

    // Populate dropdown options + default style
    this.styleOptions = Object.keys(this.styleConfig);
    this.selectedStyle = this.styleOptions[0];
    this.previewImageSrc = this.styleConfig[this.selectedStyle].placeholder;
  }

  ngAfterViewInit(): void {
    // We'll initialize tile imagery after the user sets the API key
  }

  public openDialog() {
    this.dialog.open();
  }

  private zoomUS() {
    if (this.map) MapUtility.navigateTo(this.map, MapRegion.UnitedStates);
  }

  private zoomNY() {
    if (this.map) {
      this.map.zoomToGeographic({
        left: -74.2591,
        top: 40.9176,
        width: -73.7004 - (-74.2591),
        height: 40.4774 - 40.9176
      });
    }
  }

  private setApiKey(key: string) {
    this.apiKey = key;

    // create azureTile & background if not yet
    if (!this.azureTile) {
      this.azureTile = new IgxAzureMapsImagery();
      this.tileSeries.tileImagery = this.azureTile;
    }
    if (!this.azureBackground) {
      this.azureBackground = new IgxAzureMapsImagery();
      this.azureBackground.imageryStyle = AzureMapsImageryStyle.DarkGrey;
      this.map.backgroundContent = this.azureBackground;
    }

    this.azureTile.apiKey = key;
    this.azureBackground.apiKey = key;
  }

  public onSubmit(form: NgForm) {
    const key = this.apiKeyInputValue;
    if (!key) return;

    this.setApiKey(key);
    if (this.selectedStyle) this.updateAzureMap(this.selectedStyle);

    // Close the dialog first, then reset form after a tick
    setTimeout(() => {
      this.dialog.close();
      form.resetForm();
    });
  }

  public onReset(form: NgForm) {
    this.apiKey = undefined;
    this.apiKeyInputValue = '';
    if (this.azureTile) this.azureTile.apiKey = '';
    if (this.azureBackground) this.azureBackground.apiKey = '';
    this.previewImageSrc = this.styleConfig[this.selectedStyle].placeholder;

    setTimeout(() => {
      this.dialog.close();
      form.resetForm();
    });
  }

  public onStyleChange(value: string) {
    const cfg = this.styleConfig[value];
    if (!cfg) return;

    this.previewImageSrc = cfg.placeholder;

    if (this.apiKey) {
      if (this.styleChangeTimeout) clearTimeout(this.styleChangeTimeout);
      this.styleChangeTimeout = window.setTimeout(() => this.updateAzureMap(value), 30);
    }
  }

  private updateAzureMap(styleName: string) {
    if (!this.azureTile || !this.azureBackground) return;

    const cfg = this.styleConfig[styleName];
    if (!cfg) return;

    this.azureTile.imageryStyle =
      AzureMapsImageryStyle[styleName as keyof typeof AzureMapsImageryStyle];

    this.azureBackground.imageryStyle = cfg.background ?? AzureMapsImageryStyle.DarkGrey;
    cfg.zoom();
  }
}
