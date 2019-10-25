sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"Cloud_Group1_ProjectCloud_Group1_Project/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("Cloud_Group1_ProjectCloud_Group1_Project.Component", {

		metadata: {
            manifest: "json"
        },

        init: function () {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            // create the views based on the url/hash
            this.getRouter().initialize();	// 라우팅 초기화
        }
        
	});
});