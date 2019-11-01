sap.ui.define([
		'jquery.sap.global',
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel',
		"sap/ui/core/routing/History",
		"sap/ui/core/UIComponent",
		'sap/m/Label',
		'sap/ui/model/Filter',
		'sap/m/MessageBox'
	], function(jQuery, Controller, JSONModel , History, UIComponent, Label, Filter, MessageBox) {
	"use strict";

	return Controller.extend("Cloud_Group1_ProjectCloud_Group1_Project.controller.estimate.estlookup", {

		onInit: function () {
			var oRouter = UIComponent.getRouterFor(this);
			oRouter.getRoute("estlookup").attachPatternMatched(this._onObjectMatched, this);
		},
		
		_onObjectMatched: function (oEvent) {
			var oRouter = UIComponent.getRouterFor(this);
			this.getView().bindElement({
				path: "/" + oEvent.getParameter("arguments").EstPath,
				model: "estlist"
			});
			
		},
	
		onShow : function(oEvent){
			var oItem = oEvent.getSource();
			var oRouter = UIComponent.getRouterFor(this);
//			var routerData = oItem.mAggregations.cells[1].mProperties.text;
//			
			var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
			MessageBox.warning(
					"계약서 화면으로 이동하시겠습니까?",
					{
						icon: MessageBox.Icon.WARNING,
						title: "계약서 상세 조회",
						actions: [sap.m.MessageBox.Action.OK, sap.m.MessageBox.Action.CANCEL],
						styleClass: bCompact ? "sapUiSizeCompact" : "",
						initialFocus: MessageBox.Action.CANCEL,
						onClose: function(oAction){
							if(oAction == 'OK'){
								oRouter.navTo("view3");
							}
						}
					}
			);
		},
		
		goBack : function(oEvent) {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);							//just before screen
			} else {
				var oRouter = UIComponent.getRouterFor(this);	//before screen in process flow
				oRouter.navTo("view2", {}, true);
			}
		},
		
	});

});
