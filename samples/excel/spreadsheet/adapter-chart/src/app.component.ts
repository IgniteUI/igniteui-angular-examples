import { Component, OnInit, ViewChild } from "@angular/core";
import { ExcelUtility } from "./ExcelUtility";
import { IgxSpreadsheetComponent } from "igniteui-angular-spreadsheet";
import { SpreadsheetChartAdapter } from "igniteui-angular-spreadsheet-chart-adapter";
import { ChartTitle, ChartType, FormattedString, Workbook } from "igniteui-angular-excel";
import { Worksheet } from "igniteui-angular-excel";
import { WorksheetCell } from "igniteui-angular-excel";

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
      this.spreadsheet.chartAdapter = new SpreadsheetChartAdapter();

      const excelFile = "https://static.infragistics.com/xplatform/excel/ChartData.xlsx";
      ExcelUtility.loadFromUrl(excelFile).then((w) => {
          this.spreadsheet.workbook = w;

          const sheet: Worksheet = this.spreadsheet.workbook.worksheets(0);

          sheet.defaultColumnWidth = 500 * 20;
          sheet.rows(0).height = 150 * 20;

          const cell1: WorksheetCell = sheet.getCell("A1");
          const cell2: WorksheetCell = sheet.getCell("B1");
          const cell3: WorksheetCell = sheet.getCell("C1");
          const cell4: WorksheetCell = sheet.getCell("D1");

          const dataCellAddress = "A3:D6";

          const chart1 = sheet.shapes().addChart(ChartType.Line, cell1, { x: 0, y: 0 }, cell1, { x: 100, y: 100 });

          const title: ChartTitle = new ChartTitle();
          title.text = new FormattedString("Line Chart");
          chart1.chartTitle = title;

          chart1.setSourceData(dataCellAddress, true);

          const chart2 = sheet.shapes().addChart(ChartType.ColumnClustered, cell2,
              { x: 0, y: 0 }, cell2, { x: 100, y: 100 });

          const title2: ChartTitle = new ChartTitle();
          title2.text = new FormattedString("Column Chart");
          chart2.chartTitle = title2;

          chart2.setSourceData(dataCellAddress, true);

          const chart3 = sheet.shapes().addChart(ChartType.Area, cell3, { x: 0, y: 0 }, cell3, { x: 100, y: 100 });

          const title3: ChartTitle = new ChartTitle();
          title3.text = new FormattedString("Area Chart");
          chart3.chartTitle = title3;

          chart3.setSourceData(dataCellAddress, true);

          const chart4 = sheet.shapes().addChart(ChartType.Pie, cell4, { x: 0, y: 0 }, cell4, { x: 100, y: 100 });

          const title4: ChartTitle = new ChartTitle();
          title4.text = new FormattedString("Pie Chart");
          chart4.chartTitle = title4;

          chart4.setSourceData(dataCellAddress, true);
      });
  }
}
