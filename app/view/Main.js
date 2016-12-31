/**
 * Created by Konrad on 31.12.2016.
 */

Ext.define('ExtJsMvc.view.Main',{

    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],

    xtype:'app-main',

    layout:{
        type:'border'
    },

    items:[
        {
            region:'west',
            xtype:'panel',
            title:'wschód',
            width:150
        },
        {
           region:'center',
            xtype:'tabpanel',
            items:[
                {
                    title:'Centrum'
                }
            ]
        }
    ]
})