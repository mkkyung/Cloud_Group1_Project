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
			this.editable(false, true, "None");
		},
		editable : function(unvisi, visible, color) {		
			var oModel = new sap.ui.model.json.JSONModel({
				"Edit" : visible
			});
			this.getView().setModel(oModel, "edit");
			
			var oModel2 = new sap.ui.model.json.JSONModel({
				"Enter" : unvisi
			});
			this.getView().setModel(oModel2, "enter");			

			var oModel3 = new sap.ui.model.json.JSONModel({
				"Cancel" : unvisi
			});
			this.getView().setModel(oModel3, "cancel");			
			
			var oModel4 = new sap.ui.model.json.JSONModel({
				"Color" : color
			});
			this.getView().setModel(oModel4, "color");
				
		},
		enter : function() {
			this.editable(false, true, "None");
		},		
		edit : function() {
			this.editable(true, false, "Success");
		},
		cancel : function() {
			this.editable(false, true, "None");
		},
		color : function() {
			this.editable(true, false, "Success");
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

