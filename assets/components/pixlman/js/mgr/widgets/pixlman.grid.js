Pixlman.grid.Pixlman = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        id: 'pixlman-grid-items'
        ,url: Pixlman.config.connectorUrl
        ,baseParams: { action: 'mgr/item/getlist' }
        ,save_action: 'mgr/item/updatefromgrid'
        ,fields: ['id','title','pixel','location','status']
        ,paging: true
        ,autosave: true
        ,remoteSort: true
        ,anchor: '97%'
        ,autoExpandColumn: 'title'
        ,columns: [
          {
            header: _('id')
            ,dataIndex: 'id'
            ,sortable: true
            ,width: 60
          },{
              header: _('pixlman.title')
              ,dataIndex: 'title'
              ,sortable: true
              ,width: 100
              ,editor: { xtype: 'textfield' }
          },{
              header: _('pixlman.location')
              ,dataIndex: 'location'
              ,sortable: false
              ,width: 350
              ,editor: { xtype: 'pixlman-combo-location', renderer: true }
          },{
              header: _('pixlman.status')
              ,dataIndex: 'status'
              ,sortable: true
              ,width: 50
              ,editor: { xtype: 'pixlman-combo-status', renderer: true  }
          }
        ]
        ,tbar: [{
            text: _('pixlman.item_create')
            ,handler: { xtype: 'pixlman-window-item-create' ,blankValues: true }
        },'->',{
            xtype: 'textfield'
            ,id: 'pixlman-search-filter'
            ,emptyText: _('pixlman.search...')
            ,listeners: {
                'change': {fn:this.search,scope:this}
                ,'render': {fn: function(cmp) {
                    new Ext.KeyMap(cmp.getEl(), {
                        key: Ext.EventObject.ENTER
                        ,fn: function() {
                            this.fireEvent('change',this);
                            this.blur();
                            return true;
                        }
                        ,scope: cmp
                    });
                },scope:this}
            }
        }]
    });
    Pixlman.grid.Pixlman.superclass.constructor.call(this,config)
};

Pixlman.combo.Status = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        store: new Ext.data.ArrayStore({
            id: 0
            ,fields: ['status','label']
            ,data: [
                ['1','Active']
                ,['0','Non-Active']
            ]
        })
        ,mode: 'local'
        ,displayField: 'label'
        ,valueField: 'status'
    });
    Pixlman.combo.Status.superclass.constructor.call(this,config);
};
Ext.extend(Pixlman.combo.Status,MODx.combo.ComboBox);
Ext.reg('pixlman-combo-status',Pixlman.combo.Status);

Pixlman.combo.Location = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        store: new Ext.data.ArrayStore({
            id: 0
            ,fields: ['location','label']
            ,data: [
                ['Meta','Meta'],
                ['Header','Header'],
                ['Footer','Footer']
            ]
        })
        ,mode: 'local'
        ,displayField: 'label'
        ,valueField: 'location'
    });
    Pixlman.combo.Location.superclass.constructor.call(this,config);
};
Ext.extend(Pixlman.combo.Location,MODx.combo.ComboBox);
Ext.reg('pixlman-combo-location',Pixlman.combo.Location);

Ext.extend(Pixlman.grid.Pixlman,MODx.grid.Grid,{
    search: function(tf,nv,ov) {
        var s = this.getStore();
        s.baseParams.query = tf.getValue();
        this.getBottomToolbar().changePage(1);
        this.refresh();
    }
    ,getMenu: function() {
        return [{
            text: _('pixlman.item_update')
            ,handler: this.updateItem
        },'-',{
            text: _('pixlman.item_remove')
            ,handler: this.removeItem
        }];
    }
    ,updateItem: function(btn,e) {
        if (!this.updateItemWindow) {
            this.updateItemWindow = MODx.load({
                xtype: 'pixlman-window-item-update'
                ,record: this.menu.record
                ,listeners: {
                    'success': {fn:this.refresh,scope:this}
                }
            });
        }
        this.updateItemWindow.setValues(this.menu.record);
        this.updateItemWindow.show(e.target);
    }

    ,removeItem: function() {
        MODx.msg.confirm({
            title: _('pixlman.item_remove')
            ,text: _('pixlman.item_remove_confirm')
            ,url: this.config.url
            ,params: {
                action: 'mgr/item/remove'
                ,id: this.menu.record.id
            }
            ,listeners: {
                'success': {fn:this.refresh,scope:this}
            }
        });
    }
});
Ext.reg('pixlman-grid-items',Pixlman.grid.Pixlman);


Pixlman.window.CreateItem = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        title: _('pixlman.item_create')
        ,url: Pixlman.config.connectorUrl
        ,baseParams: {
            action: 'mgr/item/create'
        }
        ,fields: [
          {
            xtype: 'textfield'
            ,fieldLabel: _('pixlman.title')
            ,name: 'title'
            ,anchor: '100%'
          },{
              xtype: 'pixlman-combo-location'
              ,fieldLabel: _('pixlman.location')
              ,name: 'location'
              ,anchor: '100%'
          },{
              xtype: 'textarea'
              ,fieldLabel: _('pixlman.pixel')
              ,name: 'pixel'
              ,anchor: '100%'
          },{
              xtype: 'pixlman-combo-status'
              ,fieldLabel: _('pixlman.status')
              ,name: 'status'
              ,hiddenName: 'status'
              ,anchor: '100%'
          }
       ]
    });
    Pixlman.window.CreateItem.superclass.constructor.call(this,config);
};
Ext.extend(Pixlman.window.CreateItem,MODx.Window);
Ext.reg('pixlman-window-item-create',Pixlman.window.CreateItem);


Pixlman.window.UpdateItem = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        title: _('pixlman.item_update')
        ,url: Pixlman.config.connectorUrl
        ,baseParams: {
            action: 'mgr/item/update'
        }
        ,fields: [
          {
            xtype: 'hidden'
            ,name: 'id'
          },{
            xtype: 'textfield'
            ,fieldLabel: _('pixlman.title')
            ,name: 'title'
            ,anchor: '100%'
          },{
              xtype: 'pixlman-combo-location'
              ,fieldLabel: _('pixlman.location')
              ,name: 'location'
              ,anchor: '100%'
          },{
              xtype: 'textarea'
              ,fieldLabel: _('pixlman.pixel')
              ,name: 'pixel'
              ,anchor: '100%'
          },{
              xtype: 'pixlman-combo-status'
              ,fieldLabel: _('pixlman.status')
              ,name: 'status'
              ,hiddenName: 'status'
              ,anchor: '100%'
          }
        ]
    });
    Pixlman.window.UpdateItem.superclass.constructor.call(this,config);
};
Ext.extend(Pixlman.window.UpdateItem,MODx.Window);
Ext.reg('pixlman-window-item-update',Pixlman.window.UpdateItem);
