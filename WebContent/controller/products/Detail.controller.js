sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/UIComponent",
	"sap/m/routing/Router" 
], function (Controller, MessageToast, UIComponent, Router) {
	"use strict";

	return Controller.extend("Cloud_Group1_ProjectCloud_Group1_Project.controller.products.Detail", {
		onInit: function () {
			this.bus = sap.ui.getCore().getEventBus();
			this.editable(false, true);
		},
		editable : function(unvisi, visible) {		
			var oModel = new sap.ui.model.json.JSONModel({
				"Edit" : unvisi
			});
			this.getView().setModel(oModel, "edit");
			
			var oModel2 = new sap.ui.model.json.JSONModel({
				"Enter" : unvisi
			});
			this.getView().setModel(oModel2, "enter");
			
			var oModel3 = new sap.ui.model.json.JSONModel({
				"Visible" : visible
			});
			this.getView().setModel(oModel3, "visible");
				
		},
		enter : function() {
			this.editable(false, true);
		},		
		update : function() {
			this.editable(true, false);
		},
		toggleAreaPriority: function(){
//			this.getRouter();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("view4");//.attachPatternMatched(this._onObjectMatched, this);
		},
		handleClose : function() {
			sap.ui.getCore().byId("__xmlview0--fcl").setLayout(sap.f.LayoutType.OneColumn);	
		}
	});
}, true);

