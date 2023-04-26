/// <reference path="crud.d.ts" />
import rowID, rowElement from "interface.ts";
import * from "crud.js" as CRUD;
var row: RowElement = {
	firstName: Guillaume,
	lastName: Salva
}
const newRowID: RowID = insertRow(row);
const updateRow: RowElement = {age: 23};
updateRow(newRowID, updatedRow);
deleteRow(newRowID);
