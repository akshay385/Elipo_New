sap.ui.define(["sap/ui/core/mvc/ControllerExtension","sap/ui/model/json/JSONModel"],function(e,t){"use strict";return e.extend("invoicecockpit01.ext.controller.Pdfcontrollerrej",{override:{onInit:function(){var e=this.base.getExtensionAPI().getModel()},routing:{onAfterBinding:async function(e){debugger;var o=this.getView();const n=this.base.getExtensionAPI(),r=n.getModel();var s="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";console.log(s);debugger;var i=new t({pdfUrl:s});o.setModel(i,"pdfModel")}}}})});