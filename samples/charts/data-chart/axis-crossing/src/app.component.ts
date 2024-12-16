import { Component } from "@angular/core";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent {

    public SinData: any[];
    public CosData: any[];

    public YAxisCrossingValue : number = 0;
    public XAxisCrossingValue : number = 0;

    constructor() {

      this.SinData= [];
      this.CosData= [];

        for (let i = -360; i <= 360; i+=10)
        {
            const radians = (i * Math.PI) / 180;
            const sin = Math.sin(radians);
            const cos = Math.cos(radians);

            this.SinData.push( { X : i, Y : sin });
            this.CosData.push( { X : i, Y : cos });
        }
    }

    public OnXAxisCrossingValueChanged(e : any) {
        this.XAxisCrossingValue = e.target.value;
    }

    public OnYAxisCrossingValueChanged(e : any) {
        this.YAxisCrossingValue = e.target.value;
    }
}
