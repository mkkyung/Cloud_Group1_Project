/*sap.ui.define(
				[ "sap/ui/core/UIComponent", "sap/m/routing/Router" ],
				function(Router, UIComponent) {
					"use strict";

					return UIComponent
							.extend(
									"Cloud_Group1_ProjectCloud_Group1_Project.Component",
									{

										metadata : {
											rootView : "Cloud_Group1_ProjectCloud_Group1_Project.view.products.FlexibleColumnLayout",
											dependencies : {
												libs : [ "sap.m", "sap.f" ]
											},
											config : {
												sample : {
													stretch : true,
													files : [
															"Component.js",
															"products.FlexibleColumnLayout.controller.js",
															"products.FlexibleColumnLayout.view.xml",
															"products.List.controller.js",
															"products.List.view.xml",
															"products.Detail.controller.js",
															"products.Detail.view.xml" ]
												}
											},
											manifest : "json"
										},

										init : function() {
											UIComponent.prototype.init.apply(
													this, arguments);

											this.getRouter().initialize(); // 라우팅
											// 초기화

										},
									});
				});
*/
sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/m/routing/Router"
], function (UIComponent, Router) {
	"use strict";

	var Component = UIComponent.extend("Cloud_Group1_ProjectCloud_Group1_Project.Component", {
		metadata: {
			rootView: "Cloud_Group1_ProjectCloud_Group1_Project.view.products.FlexibleColumnLayout",
			dependencies: {
				libs: [
					"sap.m",
					"sap.f"
				]
			},
			config: {
				sample: {
					stretch: true,
					files: [
						"Component.js",
						"FlexibleColumnLayout.controller.js",
						"FlexibleColumnLayout.view.xml",
						"List.controller.js",
						"List.view.xml",
						"Detail.controller.js",
						"Detail.view.xml"
					]
				}
			}
		}
	});
	return Component;
}, true);
