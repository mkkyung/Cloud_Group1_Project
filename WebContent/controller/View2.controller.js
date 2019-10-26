sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent",
	'sap/ui/model/odata/v2/ODataModel',
	'sap/m/SearchField'
], function(Controller, History, UIComponent, ODataModel, SearchField) {
	"use strict";

	return Controller.extend("Cloud_Group1_ProjectCloud_Group1_Project.controller.View2", {
		_smartFilterBar: null,

		onInit: function() {
			var oModel = new ODataModel("./mockserver", true);
			this.getView().setModel(oModel);

			this._smartFilterBar = this.getView().byId("smartFilterBar");

			if (this._smartFilterBar) {
				this._smartFilterBar.attachFilterChange(function(oEvent) {
				});

				var oBasicSearchField = new SearchField();
				oBasicSearchField.attachLiveChange(function(oEvent) {
					this.getView().byId("smartFilterBar").fireFilterChange(oEvent);
				}.bind(this));

				this._smartFilterBar.setBasicSearch(oBasicSearchField);
			}
		},

		onAfterVariantLoad: function(oEvent) {
			if (this._smartFilterBar) {

				var oData = this._smartFilterBar.getFilterData();
				var oCustomFieldData = oData["_CUSTOM"];
				if (oCustomFieldData) {

					var oCtrl = this._smartFilterBar.determineControlByName("MyOwnFilterField");

					if (oCtrl) {
						oCtrl.setSelectedKey(oCustomFieldData.MyOwnFilterField);
					}
				}
			}
		},

		onBeforeVariantSave: function(oEvent) {
			if (oEvent.getParameter("context") === "STANDARD") {
				this._updateCustomFilter();
			}
		},

		onBeforeVariantFetch: function(oEvent) {
			this._updateCustomFilter();
		},

		_updateCustomFilter: function() {
			if (this._smartFilterBar) {

				var oCtrl = this._smartFilterBar.determineControlByName("MyOwnFilterField");

				if (oCtrl) {
					this._smartFilterBar.setFilterData({
						_CUSTOM: {
							MyOwnFilterField: oCtrl.getSelectedKey()
						}
					});
				}
			}
		},
//		
		
//		_______________________________________
		
		onShow : function(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("view3");
		},
		
		goBack : function(oEvent) {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);							//just before screen
			} else {
				var oRouter = UIComponent.getRouterFor(this);	//before screen in process flow
				oRouter.navTo("view1", {}, true);
			}
		},
	
		getData : function(){
	        var sServiceUrl = "proxy/http/zenedus4ap1.zenconsulting.co.kr:50000"; // 로컬 서버 연결 하는 거 
	        sServiceUrl += "/sap/opu/odata/sap/ZFIORI_GROUP06_01_SRV";   // 여기를 /n/iwfnd/maint_service 에 들어가서 내가 만든 경로를 복사 해와야 함.
	        var url;
	
	     
	        url = "/getdataSet";
	     
	
	        var oDataModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true);
	        var data;
	        oDataModel.read(url, null, null, false, function (oData) {
	           data = oData.results;
	        });
	        var oModel = new sap.ui.model.json.JSONModel({ "data": data });
	        this.getView().setModel(oModel);
		}

	});
});