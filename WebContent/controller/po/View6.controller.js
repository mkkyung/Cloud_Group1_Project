sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent"
], function(Controller, History, UIComponent) {
	"use strict";

	return Controller.extend("Cloud_Group1_ProjectCloud_Group1_Project.controller.po.View6", {
		onInit: function() {
			this.getData();
		},
		
//		_______________________________________
			
		getData : function(){
	        var sServiceUrl = "proxy/http/zenedus4ap1.zenconsulting.co.kr:50000"; // 로컬 서버 연결 하는 거 
	        sServiceUrl += "/sap/opu/odata/sap/Z_FUNC_ESTIMATE_TEST_SRV";   // 여기를 /n/iwfnd/maint_service 에 들어가서 내가 만든 경로를 복사 해와야 함.
	        var url;
	        url = "/getestSet";
	     
	        var oDataModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true);
	        var data;
	        oDataModel.read(url, null, null, false, function (oData) {
	           data = oData.results;
	        });
	        var oModel = new sap.ui.model.json.JSONModel({ "data": data });
	        this.getView().setModel(oModel , "estlist");
		},
		
//		onPress : function (oEvent) {	//계약서 눌렀을 때 
//			var oItem = oEvent.getSource();
//			var oRouter = UIComponent.getRouterFor(this);
//			var routerData = oItem.mAggregations.cells[0].mProperties.text;
////			routerData = oItem.getBindingContext("estlist").getPath().substr(1);
//			this.onClose(oRouter, 0);
//
//		},
		
//		onClose: function(oRouter, routerData){
//			oRouter.navTo("estlookup", {
//				EstPath: routerData
//			});
//		},

		onShow : function(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("view7");
		},
		
		goBack : function(oEvent) {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);							//just before screen
			} else {
				var oRouter = UIComponent.getRouterFor(this);	//before screen in process flow
				oRouter.navTo("view5", {}, true);
			}
		},
		
	});
});