sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	'sap/ui/model/Sorter',
	'sap/m/MessageBox'
], function(JSONModel, Controller, Filter, FilterOperator, Sorter, MessageBox) {
	"use strict";

	return Controller.extend("Cloud_Group1_ProjectCloud_Group1_Project.controller.products.List", {

		onListItemPress: function (oEvent) {
			this.oRouter = this.getOwnerComponent().getRouter();
			var oNextUIState = this.getOwnerComponent().getHelper().getNextUIState(1);
//				productPath = oEvent.getSource().getBindingContext("products").getPath(),
//				product = productPath.split("/").slice(-1).pop();
			this.oRouter.navTo("Detail", {layout: oNextUIState.layout, product: product});
		},
	});
});