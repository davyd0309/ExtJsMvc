/**
 * Created by Konrad on 17.12.2016.
 */

Ext.define('ExtJsMvc.store.People',{
    extend:'Ext.data.Store',

    requires:'ExtJsMvc.model.Person',


    model:'ExtJsMvc.model.Person',

    data:[
        {'id':1,'firstName':'Konrad','lastName':'Kowalski'},
        {'id':2,'firstName':'Tomasz','lastName':'Romanowska'},
        {'id':3,'firstName':'Marzena','lastName':'Tracz'},
        {'id':4,'firstName':'Katarzyna','lastName':'Domańska'}
    ]

})

