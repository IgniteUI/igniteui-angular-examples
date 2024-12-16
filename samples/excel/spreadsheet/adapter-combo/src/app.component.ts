import { Component, AfterViewInit, ViewChild } from "@angular/core";

import { IgxSpreadsheetComponent } from "igniteui-angular-spreadsheet";

import { SpreadsheetChartAdapter } from "igniteui-angular-spreadsheet-chart-adapter";

import { AxisGroup, AxisPosition, AxisType, CellReferenceMode, ChartTitle, ChartType,
    FormattedString, Legend, LegendPosition, Workbook, WorkbookFormat,
    WorksheetTableColumnArea, XValues } from "igniteui-angular-excel";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent implements AfterViewInit {
  @ViewChild("spreadsheet", { read: IgxSpreadsheetComponent, static: true })
  public spreadsheet: IgxSpreadsheetComponent;

  constructor() { }

  public ngAfterViewInit() {
      this.spreadsheet.chartAdapter = new SpreadsheetChartAdapter();

      const wb = new Workbook(WorkbookFormat.Excel2007);

      const ws = wb.worksheets().add("Sheet1");
      ws.getCell("A1").value = "Date";
      ws.getCell("B1").value = "Sold Count";
      ws.getCell("C1").value = "Average Price";
      ws.getCell("A2").value = new Date(2019, 1, 1);
      ws.getCell("B2").value = 275;
      ws.getCell("C2").value = 410;
      ws.getCell("A3").value = new Date(2019, 2, 1);
      ws.getCell("B3").value = 150;
      ws.getCell("C3").value = 450;
      ws.getCell("A4").value = new Date(2019, 3, 1);
      ws.getCell("B4").value = 225;
      ws.getCell("C4").value = 430;
      ws.getCell("A5").value = new Date(2019, 4, 1);
      ws.getCell("B5").value = 275;
      ws.getCell("C5").value = 425;
      ws.getCell("A6").value = new Date(2019, 5, 1);
      ws.getCell("B6").value = 150;
      ws.getCell("C6").value = 410;
      ws.getCell("A7").value = new Date(2019, 6, 1);
      ws.getCell("B7").value = 250;
      ws.getCell("C7").value = 400;
      const tbl = ws.tables().add("A1:C7", true);
      tbl.columns(0).areaFormats(WorksheetTableColumnArea.DataArea).formatString = "mmm yy";

      this.spreadsheet.workbook = wb;

      ws.shapes().addChart(ChartType.Combo, ws.getCell("E1"),
          {x: 0, y: 0}, ws.getCell("M12"), {x: 100, y: 100}, (chart) => {
          chart.setComboChartSourceData("B1:C7", [ ChartType.ColumnClustered, ChartType.Line ]);
          const axis2 = chart.axisCollection().add(AxisType.Value, AxisGroup.Secondary);
          axis2.position = AxisPosition.Right;
          chart.seriesCollection(1).axisGroup = AxisGroup.Secondary;

          const legend = new Legend();
          legend.position = LegendPosition.Right;
          chart.legend = legend;

          const title: ChartTitle = new ChartTitle();
          title.text = new FormattedString("Combo Chart");
          chart.chartTitle = title;

          chart.seriesCollection(0).xValues = new XValues(ws, "A2:A7", CellReferenceMode.A1);
          chart.seriesCollection(1).xValues = new XValues(ws, "A2:A7", CellReferenceMode.A1);
      });

  }
}
