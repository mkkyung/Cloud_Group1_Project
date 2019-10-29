sap.ui.define([ "jquery.sap.global", "sap/ui/model/json/JSONModel",
		"sap/f/FlexibleColumnLayoutSemanticHelper", "sap/ui/core/UIComponent",
		"sap/ui/Device",
		"Cloud_Group1_ProjectCloud_Group1_Project/model/models" ], function(
		jQuery, JSONModel, FlexibleColumnLayoutSemanticHelper, UIComponent,
		Device, models) {
	"use strict";

	return UIComponent.extend(
			"Cloud_Group1_ProjectCloud_Group1_Project.Component", {

				metadata : {
					manifest : "json"
				},

				init : function() {
					UIComponent.prototype.init.apply(this, arguments);

				/*	var oModel = new JSONModel();
					this.setModel(oModel);

					// set products demo model on this sample
					var oProductsModel = new JSONModel(sap.ui.require.toUrl("sap/ui/demo/mock") + "/products.json");
					oProductsModel.setSizeLimit(1000);
					this.setModel(oProductsModel, "products");
*/

					this.getRouter().initialize(); // 라우팅 초기화
					
				},
				
//				createContent: function () {
//					return sap.ui.view({
//						viewName: "sap.f.FlexibleColumnLayoutWithOneColumnStart.view.products.FlexibleColumnLayout",
//						type: "XML"
//					});
//				},
				
				/**
				 * Returns an instance of the semantic helper
				 * @returns {sap.f.FlexibleColumnLayoutSemanticHelper} An instance of the semantic helper
				 */
				getHelper: function () {
					var oFCL = this.getRootControl().byId("apps"),
						oParams = jQuery.sap.getUriParameters(),
						oSettings = {
							defaultTwoColumnLayoutType: sap.f.LayoutType.TwoColumnsMidExpanded,
							defaultThreeColumnLayoutType: sap.f.LayoutType.ThreeColumnsMidExpanded,
							mode: oParams.get("mode"),
							initialColumnsCount: oParams.get("initial"),
							maxColumnsCount: oParams.get("max")
						};

					return FlexibleColumnLayoutSemanticHelper.getInstanceFor(oFCL, oSettings);
				}

			});
});