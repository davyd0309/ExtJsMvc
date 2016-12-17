    Ext.define('ExtJsMvc.view.Viewport', {

        extend: 'Ext.container.Viewport',
        requires: [
            'Ext.tab.Panel',
            'Ext.layout.container.Border',
            'ExtJsMvc.view.PeopleGrid'
        ],


        layout: {
            type: 'border'
        },
        items: [{
            region: 'west',
            xtype: 'panel',
            title: 'Formularz',
            width: 150
        }, {
            region: 'center',
            xtype: 'peopleGrid'

        }]


    });