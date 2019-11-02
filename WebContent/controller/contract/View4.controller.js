sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent",
	'sap/ui/model/odata/v2/ODataModel',
	'sap/ui/model/json/JSONModel',
	'sap/m/Label',
	'sap/ui/model/Filter',
	'sap/m/MessageBox'
], function(Controller, History, UIComponent, ODataModel, JSONModel, Label, Filter, MessageBox) {
	"use strict";

	return Controller.extend("Cloud_Group1_ProjectCloud_Group1_Project.controller.contract.View4", {
		onInit: function() {
//			this.oModel = new JSONModel();
//			this.oModel.loadData(sap.ui.require.toUrl("sap/ui/comp/sample/filterbar/DynamicPageListReport/model.json"), null, false);
//			this.getView().setModel(this.oModel);
		
	        var sServiceUrl = "proxy/http/zenedus4ap1.zenconsulting.co.kr:50000/";	//CORSerror나면 http:// 를 proxy/http/로
			sServiceUrl +=  "/sap/opu/odata/sap/ZFIORI_STU07_DEV02_SRV/"; // 여기를 /n/iwfnd/maint_service 에 들어가서 내가 만든 경로를 복사 해와야 함.
	        var url;
	
	        url = "/getData2Set";
	     
	        var oDataModel = new sap.ui.model.odata.ODataModel(sServiceUrl,true);
	        this.oModel = new JSONModel();
			var data;
			oDataModel.read(url, null, null, false, function(oData){
//				data = oData;
				data = oData.results;
			});
			var oModel = new sap.ui.model.json.JSONModel({ "data" : data });
//			var oModel = new sap.ui.model.json.JSONModel(data); // {results : [] }
			this.getView().setModel(oModel, "view"); 
			

			this.aKeys = [
				"Zname", "Zcategory"
			];
			this.oSelectName = this.getSelect("slName");
			this.oSelectCategory = this.getSelect("slCategory");
//			this.oSelectSupplierName = this.getSelect("slSupplierName");	//key값을 가지고 value값 찾아온다.
//			this.oModel.setProperty("/Filter/text", "Filtered by None");
//			this.addSnappedLabel();

			var oFB = this.getView().byId("filterbar");
			if (oFB) {
				oFB.variantsInitialized();
			}
			
			
//			IconTabBar
			// reuse table sample component
//			var oComp = sap.ui.getCore().createComponent({
////				name : 'Table'
//			});
//			oComp.setModel(this.getView().getModel());
//			this._oTable = oComp.getTable();
//			this.getView().byId("idIconTabBar").insertContent(this._oTable);
//
//			// update table
//			this._oTable.setHeaderText(null);
//			this._oTable.setShowSeparators("Inner");

		},
		
		getSelect: function(sId) {
			return this.getView().byId(sId);
		},

		handleIconTabBarSelect: function (oEvent) {
			var oTable = new sap.m.Table("idColumeListItem", {   
			      inset : true, 
			      headerText : "List of Products",
//			      headerDesign : sap.m.ListHeaderDesign.Standard, 
			      mode : sap.m.ListMode.None,   
			      includeItemInSelection : false,   
			    });
			  var col1 = new sap.m.Column("col1",{header: new sap.m.Label({text:"Product Name"})});
			    oTable.addColumn(col1); 
			    
			  var col2 = new sap.m.Column("col2",{header: new sap.m.Label({text:"Description"})});
			    oTable.addColumn(col2); 
//			  var col3 = new sap.m.Column("col3",{header: new sap.m.Label({text:"Price"})});
//			    oTable.addColumn(col3);    
			  var colItems = new sap.m.ColumnListItem("colItems",{type:"Active"});
			    oTable.bindAggregation("items","/value",colItems);
			    
			    
		    var txtNAME = new sap.m.Text("txtNAME",{text:"{view>Zname}"});
		    colItems.addCell(txtNAME); 
		        
		    var txtNAME2 = new sap.m.Text("txtNAME2",{text:"{view>Zname}"});
		    colItems.addCell(txtNAME2); 
		       
//		    var txtNAME3 = new sap.m.Text("txtNAME3",{text:"{view>Zcategory}"});
//		    colItems.addCell(txtNAME3);  
		    
		    return new sap.m.Page({
				title: "Title",
				content: [
				            oTable
				]
			});
//			var oBinding = this._oTable.getBinding("items"),
//				sKey = oEvent.getParameter("key"),
//				oFilter;
//			if (sKey === "Ok") {
//				oFilter = new Filter("Zname", "EQ", A);
//				oBinding.filter([oFilter]);
//			} else if (sKey === "Heavy") {
//				oFilter = new Filter("Zname", "EQ", B);
//				oBinding.filter([oFilter]);
//			} else if (sKey === "Overweight") {
//				oFilter = new Filter("Zname", "EQ", C);
//				oBinding.filter([oFilter]);
//			} else {
//				oBinding.filter([]);
//			}
						
		},
		
//		__________________________________________________________________
		onShow : function(oEvent){
//			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
//			oRouter.navTo("view5");
			
		},
		
		goBack : function(oEvent) {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {	
				window.history.go(-1);								//just before screen
			} else {
				var oRouter = UIComponent.getRouterFor(this);		//before screen in process flow
				oRouter.navTo("view3", {}, true);
			}
		},
		
		onPress : function (oEvent) {	//계약서 눌렀을 때 
			var oItem = oEvent.getSource();
			var oRouter = UIComponent.getRouterFor(this);
			var routerData = oItem.mAggregations.cells[1].mProperties.text;
			
			var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
			MessageBox.warning(
					"계약서를 등록하시겠습니까?\n"  + "한번 계약서 등록 시 변경이 불가능합니다.",
					{
						icon: MessageBox.Icon.WARNING,
						title: "계약서 등록",
						actions: [sap.m.MessageBox.Action.OK, sap.m.MessageBox.Action.CANCEL],
						styleClass: bCompact ? "sapUiSizeCompact" : "",
						initialFocus: MessageBox.Action.CANCEL,
						onClose: function(oAction){
							if(oAction == 'OK'){
								oRouter.navTo("view5", {
									ContractPath: routerData
								});
							}
						}
					}
			);
		}
		
	});
});