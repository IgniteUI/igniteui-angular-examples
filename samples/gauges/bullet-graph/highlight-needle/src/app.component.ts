import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxBulletGraphComponent } from "igniteui-angular-gauges";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})

export class AppComponent implements OnInit {

    @ViewChild("bulletGraph", { static: true })
    public bulletGraph: IgxBulletGraphComponent;
    public ngOnInit(): void {
    }
}
