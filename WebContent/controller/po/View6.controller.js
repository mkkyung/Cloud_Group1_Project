sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent",
	'sap/ui/core/Fragment',
	'sap/ui/model/Filter',
	'sap/m/MessageBox'
], function(Controller, History, UIComponent, Fragment, Filter, MessageBox) {
	"use strict";

	return Controller.extend("Cloud_Group1_ProjectCloud_Group1_Project.controller.po.View6", {
		onInit: function() {
			this.getData();
		
//		var oModel = new JSONModel(jQuery.sap.getModulePath("sap.ui.demo.mock", "/products.json"));
//		// the default limit of the model is set to 100. We want to show all the entries.
//		oModel.setSizeLimit(1000000);
//		this.getView().setModel(oModel);

//		_______________________________________

		},
	
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
		
	handleValueHelp : function (oEvent) {
		var sInputValue = oEvent.getSource().getValue();

		this.inputId = oEvent.getSource().getId();
		// create value help dialog
		if (!this._valueHelpDialog) {
			this._valueHelpDialog = sap.ui.xmlfragment(
				"Cloud_Group1_ProjectCloud_Group1_Project.view.po.Dialog",
				this
			);
			this.getView().addDependent(this._valueHelpDialog);
		}

		// create a filter for the binding
		this._valueHelpDialog.getBinding("items").filter([new sap.ui.model.Filter(
			"EstCat1",
			sap.ui.model.FilterOperator.Contains, sInputValue
		)]);

		// open value help dialog filtered by the input value
		this._valueHelpDialog.open(sInputValue);
	},

	_handleValueHelpSearch : function (evt) {
		var sValue = evt.getParameter("value");
		var oFilter = new sap.ui.model.Filter(
			"EstCat1",
			sap.ui.model.FilterOperator.Contains, sValue
		);
		evt.getSource().getBinding("items").filter([oFilter]);
	},

	_handleValueHelpClose : function (evt) {
		var oSelectedItem = evt.getParameter("selectedItem");
		if (oSelectedItem) {
			var productInput = this.getView().byId(this.inputId),
				oText = this.getView().byId('selectedKey'),
				sDescription = oSelectedItem.getDescription();

			productInput.setSelectedKey(sDescription);
			oText.setText(sDescription);
		}
		evt.getSource().getBinding("items").filter([]);
	},

	suggestionItemSelected: function (evt) {

		var oItem = evt.getParameter('selectedItem'),
			oText = this.getView().byId('selectedKey'),
			sKey = oItem ? oItem.getKey() : '';

		oText.setText(sKey);
	},
	
	onPress : function (oEvent) {	//계약서 눌렀을 때 
//		var oItem = oEvent.getSource();
		var oRouter = UIComponent.getRouterFor(this);
//		var routerData = oItem.mAggregations.cells[1].mProperties.text;

		var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
		MessageBox.warning(
				"발주서를 등록하시겠습니까?\n"  + "한번 발주서 등록 시 변경이 불가능합니다.",
				{
					icon: MessageBox.Icon.WARNING,
					title: "발주서 등록",
					actions: [sap.m.MessageBox.Action.OK, sap.m.MessageBox.Action.CANCEL],
					styleClass: bCompact ? "sapUiSizeCompact" : "",
					initialFocus: MessageBox.Action.CANCEL,
					onClose: function(oAction){
						if(oAction == 'OK'){
							//abap 데이터 저장 로직 추가
							oRouter.navTo("view7");
						}
					}
				}
		);
	}
	
});
	
});