import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxSpreadsheetComponent } from "igniteui-angular-spreadsheet";
import { ExcelUtility } from "./ExcelUtility";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  @ViewChild("spreadsheet", { read: IgxSpreadsheetComponent, static: true })
  public spreadsheet: IgxSpreadsheetComponent;

  constructor() { }

  public ngOnInit() {
      const excelFile = "https://static.infragistics.com/xplatform/excel/SalesData.xlsx"
      ExcelUtility.loadFromUrl(excelFile).then((w) => {
          this.spreadsheet.workbook = w;
      });
  }

  public openFile(input: HTMLInputElement): void {
      if (input.files == null || input.files.length === 0) {
      return;
      }

      // console.log("Files:" + input.files[0].name);

      ExcelUtility.load(input.files[0]).then((w) => {
      this.spreadsheet.workbook = w;
      }, (e) => {
          console.error("Workbook Load Error:" + e);
      });
  }

  public workbookSave(): void {
      ExcelUtility.save(
          this.spreadsheet.workbook, ".xlsx")
  }
}
