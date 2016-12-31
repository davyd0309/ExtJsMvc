/**
 * Created by Konrad on 17.12.2016.
 */
Ext.define('ExtJsMvc.model.Person',{
    extend:'Ext.data.Model',


    fields:[
        { name: 'Id', type: 'int' },
        { name: 'firstName', type: 'string' },
        { name: 'lastName', type: 'string' }
    ]


})