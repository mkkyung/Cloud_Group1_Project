sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Cloud_Group1_ProjectCloud_Group1_Project.controller.View1", {
		onShow : function() {
//			var oCtx = this.getView().getElementBinding().getBoundContext();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("view2");
		},
		
		viewStock : function() {
//			var oCtx = this.getView().getElementBinding().getBoundContext();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("view8");
		}

	});
});