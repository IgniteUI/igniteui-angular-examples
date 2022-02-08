import { Component, OnInit } from "@angular/core";
import { DataTemplateMeasureInfo, DataTemplateRenderInfo } from "igniteui-angular-core";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public data: any[];

    constructor() { }

    ngOnInit(): void {

        this.data = [
            { Category: "Apparel", Desktop: 27, Mobile: 66, Tablet: 7 },
            { Category: "Beauty", Desktop: 29, Mobile: 66, Tablet: 5 },
            { Category: "Travel", Desktop: 41, Mobile: 51, Tablet: 8 },
            { Category: "Grocery", Desktop: 37, Mobile: 57, Tablet: 6 },
            { Category: "Energy", Desktop: 58, Mobile: 39, Tablet: 3 },
            { Category: "Home Supply", Desktop: 35, Mobile: 56, Tablet: 8 },
            { Category: "Financial", Desktop: 58, Mobile: 39, Tablet: 3 }
        ];

        for (let i = 0; i < this.data.length; i++) {
            const info = this.data[i];

            (info as any).DesktopMarker = info.Desktop / 2;
            (info as any).MobileMarker = info.Desktop + (info.Mobile / 2);
            (info as any).TabletMarker = info.Desktop + info.Mobile + (info.Tablet / 2);
        }
    }

    public getMarker(): any {
        let style = { text: "white" };
        const size = 12;

        return {
            measure: function (measureInfo: DataTemplateMeasureInfo) {
                const data = measureInfo.data;
                const context = measureInfo.context;
                let value = "0.00";
                let item = data.item;
                if (item != null) {
                    value = item.DesktopMarker.toString();
                }
                const height = context.measureText("M").width;
                const width = context.measureText(value).width;
                measureInfo.width = width;
                measureInfo.height = height + size;
            },
            render: function (renderInfo: DataTemplateRenderInfo) {
                const item = renderInfo.data.item;
                const series = renderInfo.data.series;

                const valuePath = series.valueColumn.propertyName;

                var value = 0;

                switch (valuePath) {
                    case "DesktopMarker":
                        value = item.Desktop;
                        break;
                    case "MobileMarker":
                        value = item.Mobile;
                        break;
                    case "TabletMarker":
                        value = item.Tablet;
                        break;
                }

                const ctx = renderInfo.context;
                let x = renderInfo.xPosition;
                let y = renderInfo.yPosition;

                if (renderInfo.isHitTestRender) {
                    ctx.fillStyle = renderInfo.data.actualItemBrush.fill;

                    let width = renderInfo.availableWidth;
                    let height = renderInfo.availableHeight;

                    ctx.fillRect(x - (width / 2), y - (height), renderInfo.availableWidth, renderInfo.availableHeight);
                    return;
                }

                let xOffset = 18;
                let yOffset = 10;

                ctx.font = '8pt Verdana';
                ctx.textBaseline = 'top';
                ctx.fillStyle = style.text;

                if (value < 10) {
                    xOffset = 12;
                }

                ctx.fillText(value, x - (xOffset / 2), y - (yOffset / 2));
            }
        }
    }
}
