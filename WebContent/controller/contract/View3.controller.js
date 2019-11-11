sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",

], function(Controller, History, UIComponent,JSONModel) {
	"use strict";

	return Controller.extend("Cloud_Group1_ProjectCloud_Group1_Project.controller.contract.View3", {
		onShow : function(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("view4");
		},
		
		goBack : function(oEvent) {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);								//just before screen
			} else {
				var oRouter = UIComponent.getRouterFor(this);		//before screen in process flow
				oRouter.navTo("view2", {}, true);
			}
		},
		
		
		
		onInit : function () {
//			// set explored app's demo model on this sample
//			var oModel = new JSONModel(jQuery.sap.getModulePath("sap.ui.demo.mock", "/products.json"));
//			this.getView().setModel(oModel);
			   var sServiceUrl = "proxy/http/zenedus4ap1.zenconsulting.co.kr:50000/";	//CORSerror나면 http:// 를 proxy/http/로
				sServiceUrl +=  "/sap/opu/odata/sap/ZFIORI_STU07_DEV02_SRV/"; // 여기를 /n/iwfnd/maint_service 에 들어가서 내가 만든 경로를 복사 해와야 함.
		        var url;
		
		        url = "/getData2Set";
		     
		        var oDataModel = new sap.ui.model.odata.ODataModel(sServiceUrl,true);
		        this.oModel = new JSONModel();
				var data;
				oDataModel.read(url, null, null, false, function(oData){
					data = oData.results;
				});
				var oModel = new JSONModel({ "data" : data });
//				var oModel = new sap.ui.model.json.JSONModel(data); // {results : [] }
				this.getView().setModel(oModel, "view"); 
			
		},


		
	});
});