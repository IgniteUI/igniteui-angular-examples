import { Component, AfterViewInit, ViewChild } from "@angular/core";
import { IgxSpreadsheetComponent } from "igniteui-angular-spreadsheet";
import { SpreadsheetAction } from "igniteui-angular-spreadsheet";
import { ExcelUtility } from "./ExcelUtility";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent implements AfterViewInit {
  @ViewChild("spreadsheet", { read: IgxSpreadsheetComponent, static: true })
  public spreadsheet: IgxSpreadsheetComponent;

  constructor() { }

  public ngAfterViewInit() {
      const excelFile = "https://static.infragistics.com/xplatform/excel/SalesData.xlsx";
      ExcelUtility.loadFromUrl(excelFile).then((w) => {
          this.spreadsheet.workbook = w;
      });
  }

  public cut(): void {
      this.spreadsheet.executeAction(SpreadsheetAction.Cut);
  }

  public copy(): void {
      this.spreadsheet.executeAction(SpreadsheetAction.Copy);
  }

  public paste(): void {
      this.spreadsheet.executeAction(SpreadsheetAction.Paste);
  }

}
