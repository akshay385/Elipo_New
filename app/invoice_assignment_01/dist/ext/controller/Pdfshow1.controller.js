sap.ui.define(["sap/ui/core/mvc/ControllerExtension","sap/ui/model/json/JSONModel"],function(e,t){"use strict";return e.extend("invoiceassignment01.ext.controller.Pdfshow1",{override:{onInit:function(){var e=this.base.getExtensionAPI().getModel()},routing:{onAfterBinding:async function(e){debugger;var n=this.getView();const o=this.base.getExtensionAPI(),i=o.getModel(),r="getPdfUrl",g=i.bindContext(`/${r}(...)`);await g.execute();var d=g.getBoundContext();var s=d.getObject();debugger;await g.execute();debugger;d=g.getBoundContext();s=d.getObject();s=s.value.file_link;console.log(s);debugger;var u=new t({pdfUrl:s});n.setModel(u,"pdfModel")}}}})});