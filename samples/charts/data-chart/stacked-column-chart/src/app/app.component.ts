import { Component, OnInit } from "@angular/core";
import { DataTemplateMeasureInfo, DataTemplateRenderInfo } from "igniteui-angular-core";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    public data: any[];
    public calloutDataSource : any[];

    constructor() { }

    ngOnInit(): void {

        this.data = [
            { Year: "2014", USA: 30, Europe: 40, China: 45 },
            { Year: "2015", USA: 20, Europe: 80, China: 50 },
            { Year: "2016", USA: 50, Europe: 15, China: 90 },
            { Year: "2017", USA: 50, Europe: 80, China: 130 },
            { Year: "2018", USA: 35, Europe: 40, China: 135 },
            { Year: "2019", USA: 40, Europe: 80, China: 95 },
        ];

        this.calloutDataSource = [];

        for (let i = 0; i < this.data.length; i++) {
            const info = this.data[i];

            info.USAMarker = info.USA / 2;
            info.EuropeMarker = info.USA + (info.Europe / 2);
            info.ChinaMarker = info.USA + info.Europe + (info.China / 2);
            info.Sum = info.USA + info.Europe + info.China;

            this.calloutDataSource.push({ X: i, Y: info.Sum, Label: info.Sum.toString()});
        }
    }

    public getMarker() : any {
        let style = { text: "white" };
        const size = 12;

        return {
            measure: function (measureInfo) {
                const data = measureInfo.data;
                const context = measureInfo.context;
                let value = "0.00";
                let item = data.item;
                if (item != null) {
                    value = item.USA.toString();
                }
                const height = context.measureText("M").width;
                const width = context.measureText(value).width;
                measureInfo.width = width;
                measureInfo.height = height + size;
            },
            render: function (renderInfo) {
                const item = renderInfo.data.item;
                const series = renderInfo.data.series;

                const valuePath = series.valueColumn.propertyName;

                var value = 0;

                switch (valuePath) {
                    case "USAMarker":
                        value = item.USA;
                        break;
                    case "EuropeMarker":
                        value = item.Europe;
                        break;
                    case "ChinaMarker":
                        value = item.China;
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

                if (value > 100) {
                    xOffset = 24;
                }

                ctx.fillText(value, x - (xOffset / 2), y - (yOffset / 2));

            }
        }
    }
}
