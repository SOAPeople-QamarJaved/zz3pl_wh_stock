sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"zz3plwhstock/test/integration/pages/StockImage3PLList",
	"zz3plwhstock/test/integration/pages/StockImage3PLObjectPage"
], function (JourneyRunner, StockImage3PLList, StockImage3PLObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('zz3plwhstock') + '/test/flp.html#app-preview',
        pages: {
			onTheStockImage3PLList: StockImage3PLList,
			onTheStockImage3PLObjectPage: StockImage3PLObjectPage
        },
        async: true
    });

    return runner;
});

