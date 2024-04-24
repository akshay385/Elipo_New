//@ui5-bundle invoiceassignment01/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"invoiceassignment01/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("invoiceassignment01.Component",{metadata:{manifest:"json"}})});
},
	"invoiceassignment01/ext/controller/Pdfshow.js":function(){sap.ui.define(["sap/m/MessageToast"],function(e){"use strict";return{pdfshowfunc:function(e){this.showSideContent("GeneratedFacet1")}}});
},
	"invoiceassignment01/ext/controller/Pdfshow1.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/ControllerExtension","sap/ui/model/json/JSONModel"],function(e,t){"use strict";return e.extend("invoiceassignment01.ext.controller.Pdfshow1",{override:{onInit:function(){var e=this.base.getExtensionAPI().getModel()},routing:{onAfterBinding:async function(e){debugger;var n=this.getView();const o=this.base.getExtensionAPI(),s=o.getModel();var i="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";var r=new t({pdfUrl:i});n.setModel(r,"pdfModel")}}}})});
},
	"invoiceassignment01/ext/fragment/Pdf1.fragment.xml":'<core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:macros="sap.fe.macros"><PDFViewer\n            id="pdfViewer"\n            source="{pdfModel>/pdfUrl}"\n            width="100%"\n            height="600px" /></core:FragmentDefinition>',
	"invoiceassignment01/i18n/i18n.properties":'# This is the resource bundle for invoiceassignment01\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Invoice Assignment\n#YDES: Application description\nappDescription=A Fiori application.\n\nflpTitle={{flpTitle}}\n\nflpSubtitle={{flpSubtitle}}\n\nOBJECT_CREATED = Invoice assigned\\ud83d\\ude01\nC_TRANSACTION_HELPER_OBJECT_SAVED = Invoice assigned\\ud83d\\ude01\n',
	"invoiceassignment01/manifest.json":'{"_version":"1.58.0","sap.app":{"id":"invoiceassignment01","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.11.3","toolsId":"6d0561da-9ee3-4206-b7d5-d1f7c78365c8"},"dataSources":{"mainService":{"uri":"odata/v4/catalog/","type":"OData","settings":{"annotations":[],"localUri":"localService/metadata.xml","odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"invoice_assignment_01-display":{"semanticObject":"invoice_assignment_01","action":"display","title":"{{flpTitle}}","subTitle":"{{flpSubtitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.120.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"invoiceassignment01.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"routes":[{"pattern":":?query:","name":"inv_assgList","target":"inv_assgList"},{"pattern":"inv_assg({key}):?query:","name":"inv_assgObjectPage","target":"inv_assgObjectPage"}],"targets":{"inv_assgList":{"type":"Component","id":"inv_assgList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/inv_assg","variantManagement":"None","navigation":{"inv_assg":{"detail":{"route":"inv_assgObjectPage"}}},"initialLoad":"Enabled","defaultTemplateAnnotationPath":"com.sap.vocabularies.UI.v1.SelectionPresentationVariant#tableView","hideFilterBar":true}}},"inv_assgObjectPage":{"type":"Component","id":"inv_assgObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"enhanceI18n":"i18n/i18n.properties","contextPath":"/inv_assg","navigation":{},"content":{"header":{"actions":{"pdf":{"press":"invoiceassignment01.ext.controller.Pdfshow.pdfshowfunc","visible":true,"enabled":true,"text":"show/hide"}}},"body":{"sections":{"GeneratedFacet1":{"sideContent":{"template":"invoiceassignment01.ext.fragment.Pdf1","position":{"anchor":"GeneratedFacet1","placement":"After"},"type":"XMLFragment","title":"pdf"},"type":"XMLFragment"}}}},"controlConfiguration":{"item_data_parent/@com.sap.vocabularies.UI.v1.LineItem#item":{"tableSettings":{"type":"GridTable","selectionMode":"None"}}},"variantManagement":"None"}}}}},"extends":{"extensions":{"sap.ui.controllerExtensions":{"sap.fe.templates.ObjectPage.ObjectPageController#invoiceassignment01::inv_assgObjectPage":{"controllerName":"invoiceassignment01.ext.controller.Pdfshow1"}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"elipo_aks"}}'
}});
