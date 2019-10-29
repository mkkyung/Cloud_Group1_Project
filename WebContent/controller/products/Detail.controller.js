sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("Cloud_Group1_ProjectCloud_Group1_Project.controller.products.Detail", {
		onInit: function () {
			this.bus = sap.ui.getCore().getEventBus();
		}
	});
}, true);

