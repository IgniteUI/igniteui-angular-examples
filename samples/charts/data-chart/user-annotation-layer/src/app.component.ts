import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CountryRenewableElectricity } from './CountryRenewableElectricity';
import { IgxToolbarComponent } from 'igniteui-angular-layouts';
import { IgxColorEditorComponent } from 'igniteui-angular-inputs';

import { IgxDataChartComponent, IgxUserAnnotationInformation } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{
    @ViewChild("toolbar", { static: true } )
    private toolbar: IgxToolbarComponent
    @ViewChild("chart", { static: true } )
    private chart: IgxDataChartComponent

    @ViewChild("annotationBadgeColorEditor", { static: true } )
    private annotationBadgeColorEditor: IgxColorEditorComponent
    @ViewChild("annotationMainColorEditor", { static: true } )
    private annotationMainColorEditor: IgxColorEditorComponent

    private annotationInfo: IgxUserAnnotationInformation;

    public annotationLabel: string = "Enter Label";
    public annotationDetails: string = "Enter Details";

    private _countryRenewableElectricity: CountryRenewableElectricity = null;
    public get countryRenewableElectricity(): CountryRenewableElectricity {
        if (this._countryRenewableElectricity == null)
        {
            this._countryRenewableElectricity = new CountryRenewableElectricity();
        }
        return this._countryRenewableElectricity;
    }

    public constructor(private _detector: ChangeDetectorRef)
    {
        this.onUserAnnotationInformationRequested = this.onUserAnnotationInformationRequested.bind(this);
        this.onUserAnnotationTooltipContentUpdating = this.onUserAnnotationTooltipContentUpdating.bind(this);
        this.onDoneBtnClick = this.onDoneBtnClick.bind(this);
        this.onInitializeToolbar = this.onInitializeToolbar.bind(this);
    }

    public ngAfterViewInit(): void
    {
        window.setTimeout(() => this.onInitializeToolbar(), 1000);
    }

    public onInitializeToolbar() {
        for (let toolbarMenu of this.toolbar.actualActions) {
            if (toolbarMenu.actionId === "AnnotationMenu") {
                toolbarMenu.openSubMenu();
            }
        }
    }

    public onUserAnnotationInformationRequested(e: any) {
        this.annotationInfo = e.args.annotationInfo;

        this.toggleDialogState(true);
    }

    public onUserAnnotationTooltipContentUpdating(e: any) {
        var details = e.args.annotationInfo.annotationData;

        if (e.args.content.children.length == 0) {
            var element = document.createElement("div");
            element.textContent = details;
            element.style = "color: white";
            e.args.content.appendChild(element);
        }
        else {
            var element: HTMLDivElement = e.args.content.children[0];
            element.textContent = details;
        }
    }

    public onDoneBtnClick() {

        this.annotationInfo.label = this.annotationLabel;
        this.annotationInfo.annotationData = this.annotationDetails;
        this.annotationInfo.mainColor = this.annotationMainColorEditor.value;
        this.annotationInfo.badgeColor = this.annotationBadgeColorEditor.value;
 
        this.chart.finishAnnotationFlow(this.annotationInfo);

        this.toggleDialogState(false);
    }

    public onCancelBtnClick() {
        this.chart.cancelAnnotationFlow(this.annotationInfo.annotationId);

        this.toggleDialogState(false);
    }

    public toggleDialogState(open: boolean) {
        var popup = document.getElementById('annotationPopup') as HTMLDivElement;

        if (open) {
            popup.style.display = "flex";
        }
        else {
            popup.style.display = "none";
        }
    }

}

