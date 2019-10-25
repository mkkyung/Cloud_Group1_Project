sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent"
], function(Controller, History, UIComponent) {
	"use strict";

	return Controller.extend("Cloud_Group1_ProjectCloud_Group1_Project.controller.View10", {	//분출화면
//		go 입고
		onShowIn : function(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("view8");
		},
//		go 재고
		onShowStock : function(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("view9");
		},
		
		goBack : function(oEvent) {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);							//just before screen
			} else {
//				var oRouter = UIComponent.getRouterFor(this);	//before screen in process flow
//				oRouter.navTo("view4", {}, true);
				alert("전 화면이 없습니다.");
			}
		},
		
	});
});