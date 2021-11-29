var Pixlman = function (config) {
    config = config || {};
    Pixlman.superclass.constructor.call(this, config);
};
Ext.extend(Pixlman, Ext.Component, {
    page: {},
    window: {},
    grid: {},
    tree: {},
    panel: {},
    combo: {},
    config: {},
});
Ext.reg("pixlman", Pixlman);
Pixlman = new Pixlman();
