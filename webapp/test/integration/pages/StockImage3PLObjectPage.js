sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'zz3plwhstock',
            componentId: 'StockImage3PLObjectPage',
            contextPath: '/StockImage3PL'
        },
        CustomPageDefinitions
    );
});