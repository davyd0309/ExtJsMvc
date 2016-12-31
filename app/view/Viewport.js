Ext.define('ExtJsMvc.view.Viewport', {

    extend: 'Ext.container.Viewport',
    requires: ['ExtJsMvc.view.PeopleGrid'],

    layout: {
        type: 'fit'
    },

    items: [

        {
            items: [
                {
                    xtype: 'peopleGrid'
                }
            ]
        }
    ]


});