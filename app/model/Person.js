/**
 * Created by Konrad on 17.12.2016.
 */
Ext.define('ExtJsMvc.model.Person',{
    extend:'Ext.data.Model',

    fields:[
        {id:'id',type:'int'},
        {firstName:'firstName',type:'string'},
        {lastName:'lastName',type:'string'}
    ]


})