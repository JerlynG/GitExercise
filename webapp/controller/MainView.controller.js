sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("zbtp.day5exercise1gollayan.controller.MainView", {
            onInit: function () {

            },

            onPressSend: function() {
                var oView = this.getView();
                var sName = oView.byId("NameInput").getValue();
                var sSname = oView.byId("SnameInput").getValue();
                var sAge = oView.byId("AgeInput").getValue();
                var sTech = oView.byId("TechInput").getSelectedKey();
                MessageToast.show("Your name is " + sName + ", your surname is " + sSname + ", your age is " + sAge);
 
            }

        });
    });
