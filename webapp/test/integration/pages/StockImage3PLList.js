sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'zz3plwhstock',
            componentId: 'StockImage3PLList',
            contextPath: '/StockImage3PL'
        },
        CustomPageDefinitions
    );
});