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
		},
		toggleAreaPriority: function(){
//			this.getRouter();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("view4");//.attachPatternMatched(this._onObjectMatched, this);
		}
	});
}, true);

