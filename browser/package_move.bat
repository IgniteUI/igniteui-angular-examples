@echo off
ECHO moving IG development packages...
CD node_modules

IF EXIST @infragistics\igniteui-angular-charts (
 MOVE /y @infragistics\igniteui-angular-charts igniteui-angular-charts
) 

IF EXIST @infragistics\igniteui-angular-dashboards (
 MOVE /y @infragistics\igniteui-angular-dashboards igniteui-angular-dashboards
) 

IF EXIST @infragistics\igniteui-angular-core (
 MOVE /y @infragistics\igniteui-angular-core igniteui-angular-core
) 

IF EXIST @infragistics\igniteui-angular-gauges (
 MOVE /y @infragistics\igniteui-angular-gauges igniteui-angular-gauges
) 

IF EXIST @infragistics\igniteui-angular-data-grids (
 MOVE /y @infragistics\igniteui-angular-data-grids igniteui-angular-data-grids
)
 
IF EXIST @infragistics\igniteui-angular-excel (
 MOVE /y @infragistics\igniteui-angular-excel igniteui-angular-excel
) 

IF EXIST @infragistics\igniteui-angular-maps (
 MOVE /y @infragistics\igniteui-angular-maps igniteui-angular-maps
)

IF EXIST @infragistics\igniteui-angular-spreadsheet (
 MOVE /y @infragistics\igniteui-angular-spreadsheet igniteui-angular-spreadsheet
)

IF EXIST @infragistics\igniteui-angular-spreadsheet-chart-adapter (
 MOVE /y @infragistics\igniteui-angular-spreadsheet-chart-adapter igniteui-angular-spreadsheet-chart-adapter
)

ECHO moving IG development packages... completed
pause


