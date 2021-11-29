Ext.onReady(function () {
    MODx.load({ xtype: "pixlman-page-home" });
});
Pixlman.page.Home = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        components: [
            {
                xtype: "pixlman-panel-home",
                renderTo: "pixlman-panel-home-div",
            },
        ],
    });
    Pixlman.page.Home.superclass.constructor.call(this, config);
};
Ext.extend(Pixlman.page.Home, MODx.Component);
Ext.reg("pixlman-page-home", Pixlman.page.Home);
