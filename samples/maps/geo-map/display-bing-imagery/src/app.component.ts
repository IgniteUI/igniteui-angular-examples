import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {
    IgxGeographicMapComponent,
    IgxBingMapsMapImagery,
    BingMapsImageryStyle
} from 'igniteui-angular-maps';
import {
  IgxDialogComponent,
  IgxSelectComponent
} from 'igniteui-angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})

export class AppComponent implements AfterViewInit {

    @ViewChild('geoMap', { static: false })
    public geoMap!: IgxGeographicMapComponent;

    @ViewChild('dialog', { static: true })
    public keyDialog: any;

    public bingKey: string = "";

    ngAfterViewInit(): void {
        setTimeout(() => this.keyDialog.open(), 200);
    }

    public openKeyDialog(): void {
        this.keyDialog.open();
    }

    public closeKeyDialog(): void {
        this.keyDialog.close();
    }

    public onKeyDialogClosed(): void {
        if (!this.bingKey.trim()) return;
        this.applyImagery();
    }

    private applyImagery(): void {
        const imagery = new IgxBingMapsMapImagery();
        imagery.apiKey = this.bingKey;
        imagery.imageryStyle = BingMapsImageryStyle.AerialWithLabels;

        this.geoMap.backgroundContent = imagery;

        this.geoMap.zoomToGeographic({
            left: -124.77,
            top: 49.38,
            width: (124.77 - 66.95),
            height: (49.38 - 24.52)
        });
    }
}
