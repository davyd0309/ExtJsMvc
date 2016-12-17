/**
 * Created by Konrad on 17.12.2016.
 */
Ext.define('ExtJsMvc.view.PeopleGrid', {
        extend: 'Ext.grid.Panel',


        xtype: 'peopleGrid',
        title: 'Dane osób',
        store: 'People',

        initComponent: function () {
            var me = this;
            this.column =
            [
                {text: 'Id', dataIndex: 'id'},
                {text: 'Imię', dataIndex: 'firstName'},
                {text: 'Nazwisko', dataIndex: 'lastName'}
            ]

            this.callParent(arguments);

        }
    }
)