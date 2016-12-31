/**
 * Created by Konrad on 17.12.2016.
 */
Ext.define('ExtJsMvc.view.PeopleGrid', {
        extend: 'Ext.grid.Panel',

        alias: 'widget.peopleGrid',
        store: 'ExtJsMvc.store.People',
        title: 'Dane osób',

        iconCls: 'icon-grid',

        initComponent: function () {

            this.setupColumns();
            this.setupDockedItems();
            this.callParent();

        },

        setupColumns: function () {
            this.columns =
                [
                    {text: 'Id', dataIndex: 'Id'},
                    {text: 'Imię', dataIndex: 'firstName'},
                    {text: 'Nazwisko', dataIndex: 'lastName'}
                ]

        },

        setupDockedItems: function () {
            this.dockedItems = [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [{
                        xtype: 'button',
                        text: 'Nowy',
                        iconCls: 'icon-add'
                    },
                        {
                            xtype: 'button',
                            text: 'Usuń',
                            iconCls: 'icon-delete'
                        }

                    ]

                },
                {
                    xtype: 'pagingtoolbar',
                    store: 'ExtJsMvc.store.People',
                    dock: 'top',
                    displayInfo: true
                }
            ]
        }
    }
)