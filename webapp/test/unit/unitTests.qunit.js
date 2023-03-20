/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zbtp/day5exercise_1_gollayan/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
