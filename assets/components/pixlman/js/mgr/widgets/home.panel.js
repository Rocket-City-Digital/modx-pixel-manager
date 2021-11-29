Pixlman.panel.Home = function (config) {
    config = config || {};
    Ext.apply(config, {
        border: false,
        baseCls: "modx-formpanel",
        cls: "container",
        items: [
            {
                html: "<h2>" + _("pixlman.management") + "</h2>",
                border: false,
                cls: "modx-page-header",
            },
            {
                xtype: "modx-tabs",
                defaults: { border: false, autoHeight: true },
                border: true,
                items: [
                    {
                        title: _("pixlman"),
                        defaults: { autoHeight: true },
                        items: [
                            {
                              html:"<p>"+_("pixlman.management_desc")+"</p>",
                              border: false,
                            },{
                              xtype: 'pixlman-grid-items',
                              cls: "main-wrapper",
                              preventRender: true,
                          },
                        ]
                    },
                ],
                // only to redo the grid layout after the content is rendered
                // to fix overflow components' panels, especially when scroll bar is shown up
                listeners: {
                    afterrender: function (tabPanel) {
                        tabPanel.doLayout();
                    },
                },
            },
        ],
    });
    Pixlman.panel.Home.superclass.constructor.call(this, config);
};


Ext.extend(Pixlman.panel.Home, MODx.Panel);
Ext.reg("pixlman-panel-home", Pixlman.panel.Home);
