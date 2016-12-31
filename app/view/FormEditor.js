/**
 * Created by Konrad on 31.12.2016.
 */
Ext.define('ExtJsMvc.view.FormEditor', {
    extend: 'Ext.window.Window',
    alias: 'widget.formEditor',

    height: 150,
    width: 350,
    layout: 'fit',
    iconCls: 'icon-user',
    title: 'Edytor',
    autoShow: true,


    items: [
        {
            xtype: 'form',
            bodyPadding: 10,
            defaults: {
                anchor: '100%'
            },
            items: [
                {
                    xtype: 'textfield',
                    name: 'firstName',
                    fieldLabel: 'Imie'
                },
                {
                    xtype: 'textfield',
                    name: 'lastName',
                    fieldLabel: 'Nazwisko'
                }


            ]
        }


    ],


    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            layout: {
                type: 'hbox',
                pack: 'end'
            },
            items: [

                {
                    xtype: 'button',
                    text: 'Zapisz',
                    iconCls: 'icon-add'
                },
                {
                    xtype: 'button',
                    text: 'Cancel',
                    iconCls: 'icon-delete'
                }

            ]

        }

    ]

})
