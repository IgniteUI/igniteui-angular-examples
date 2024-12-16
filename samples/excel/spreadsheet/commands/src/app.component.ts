import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxSpreadsheetComponent } from "igniteui-angular-spreadsheet";
import { SpreadsheetAction } from "igniteui-angular-spreadsheet";
import { ExcelUtility } from "./ExcelUtility";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  @ViewChild("spreadsheet", { read: IgxSpreadsheetComponent, static: true })
  public spreadsheet: IgxSpreadsheetComponent;

  constructor() { }

  public ngOnInit() {
      const excelFile = "https://static.infragistics.com/xplatform/excel/SalesData.xlsx";
      ExcelUtility.loadFromUrl(excelFile).then((w) => {
          this.spreadsheet.workbook = w;
      });
  }

  public zoomIn(): void {
      this.spreadsheet.executeAction(SpreadsheetAction.ZoomIn);
  }

  public zoomOut(): void {
      this.spreadsheet.executeAction(SpreadsheetAction.ZoomOut);
  }
}
