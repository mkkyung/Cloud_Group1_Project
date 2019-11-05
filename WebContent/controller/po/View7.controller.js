sap.ui.define([
	"sap/ui/core/mvc/Controller",

	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent",
	"sap/m/routing/Router" 
], function(Controller, History, UIComponent, Router) {
	"use strict";

	return Controller.extend("Cloud_Group1_ProjectCloud_Group1_Project.controller.po.View7", {
	onInit: function () {
		this.bus = sap.ui.getCore().getEventBus();
		this.editable(false, true, "None");
		
		var testData = {
				"PoCollection": [
					{
						"poNo": "po001",
						"poDate": "2019.11.02",
						"poCat3": "ABSD",
						"poVname": "황금복사기",
						"poVcode": "ve01",
						"poTotal": "100",
						"poAmt": "5",
						"poEprice": "1,000",
						"poTprice": "5,000",
						"poDdate": "2019.11.20",
						"poEtc": "2019.11.30",
						
					},
					{
						"poNo": "po002",
						"poDate": "2019.11.02",
						"poCat3": "ABSD2",
						"poVname": "황금복사기2",
						"poVcode": "ve01",
						"poTotal": "100",
						"poAmt": "5",
						"poEprice": "1,000",
						"poTprice": "5,000",
						"poDdate": "2019.11.20",
						"poEtc": "2019.11.30",
						
					},
					{
						"poNo": "po003",
						"poDate": "2019.11.02",
						"poCat3": "ABSD3",
						"poVname": "황금복사기3",
						"poVcode": "ve01",
						"poTotal": "100",
						"poAmt": "5",
						"poEprice": "1,000",
						"poTprice": "5,000",
						"poDdate": "2019.11.20",
						"poEtc": "2019.11.30",
						
					}
				],
				"ProductCollectionStats": {
					"Counts": {
						"Total": 123,
						"Weight": {
							"Ok": 53,
							"Heavy": 51,
							"Overweight": 19
						}
					},
					"Groups": {
						"Category": {
							"Accessories" : 34,
							"Desktop Computers" : 7,
							"Flat Screens" : 2,
							"Keyboards" : 4,
							"Laptops" : 11,
							"Printers" : 9,
							"Smartphones and Tablets" : 9,
							"Mice" : 7,
							"Computer System Accessories" : 8,
							"Graphics Card" : 4,
							"Scanners" : 4,
							"Speakers" : 3,
							"Software" : 8,
							"Telekommunikation" : 3,
							"Servers" : 3,
							"Flat Screen TVs" : 3
						},
						"SupplierName": {
							"Titanium": 21,
							"Technocom": 22,
							"Red Point Stores": 7,
							"Very Best Screens": 14,
							"Smartcards": 2,
							"Alpha Printers": 5,
							"Printer for All": 8,
							"Oxynum": 8,
							"Fasttech": 15,
							"Ultrasonic United": 15,
							"Speaker Experts": 3,
							"Brainsoft": 3
						}
					},
					"Filters": [
						{
							"type": "Category",
							"values": [
								{
									"text": "Accessories",
									"data": 34
								},
								{
									"text": "Desktop Computers",
									"data": 7
								},
								{
									"text": "Flat Screens",
									"data": 2
								},
								{
									"text": "Keyboards",
									"data": 4
								},
								{
									"text": "Laptops",
									"data": 11
								},
								{
									"text": "Printers",
									"data": 9
								},
								{
									"text": "Smartphones and Tablets",
									"data": 9
								},
								{
									"text": "Mice",
									"data": 7
								},
								{
									"text": "Computer System Accessories",
									"data": 8
								},
								{
									"text": "Graphics Card",
									"data": 4
								},
								{
									"text": "Scanners",
									"data": 4
								},
								{
									"text": "Speakers",
									"data": 3
								},
								{
									"text": "Software",
									"data": 8
								},
								{
									"text": "Telekommunikation",
									"data": 3
								},
								{
									"text": "Servers",
									"data": 3
								},
								{
								  "text": "Flat Screen TVs",
								  "data": 3
								}
							]
						},
						{
							"type": "SupplierName",
							"values": [
								{
								"text": "Titanium",
								"data": 21
							  },
							  {
								"text": "Technocom",
								"data": 22
							  },
							  {
								"text": "Red Point Stores",
								"data": 7
							  },
							  {
								"text": "Very Best Screens",
								"data": 14
							  },
							  {
								"text": "Smartcards",
								"data": 2
							  },
							  {
								"text": "Alpha Printers",
								"data": 5
							  },
							  {
								"text": "Printer for All",
								"data": 8
							  },
							  {
								"text": "Oxynum",
								"data": 8
							  },
							  {
								"text": "Fasttech",
								"data": 15
							  },
							  {
								"text": "Ultrasonic United",
								"data": 15
							  },
							  {
								"text": "Speaker Experts",
								"data": 3
							  },
							  {
								"text": "Brainsoft",
								"data": 3
							  }
							]
						}
					]
				}
			};
		
		var oJSONModel = new sap.ui.model.json.JSONModel();
		oJSONModel.setData(testData);
		this.getView().setModel(oJSONModel);
		//var oModel = new sap.ui.model.json.JSONModel({ "data": testData });
        //this.getView().setModel(oModel , "polist");
        
        console.log(this.getView().getModel());

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
//	toggleAreaPriority: function(){
////		this.getRouter();
//		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
//		oRouter.getRoute("view6");//.attachPatternMatched(this._onObjectMatched, this);
//	},
//	handleClose : function() {
//		sap.ui.getCore().byId("__xmlview0--fcl").setLayout(sap.f.LayoutType.OneColumn);	
//	}
//});
//}, true);
	
	
	

		goBack : function(oEvent) {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);							//just before screen
			} else {
				var oRouter = UIComponent.getRouterFor(this);	//before screen in process flow
				oRouter.navTo("view6", {}, true);
			}
		},
		
	});
});