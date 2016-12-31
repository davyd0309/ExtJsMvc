/**
 * Created by Konrad on 17.12.2016.
 */

Ext.define('ExtJsMvc.store.People',{
    extend:'Ext.data.Store',

    model:'ExtJsMvc.model.Person',

    pageSize:10,



    proxy:{
        type:'ajax',
        url:'app/people.json',
        reader:{
            type:'json',
            model: 'ExtJsMvc.model.Person',

        }
    },

    autoLoad: true

})

