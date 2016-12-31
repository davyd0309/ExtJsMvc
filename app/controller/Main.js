/**
 * Created by Konrad on 17.12.2016.
 */

Ext.define('ExtJsMvc.controller.Main', {
    extend: 'Ext.app.Controller',


    models: ['ExtJsMvc.model.Person'],

    stores: ['ExtJsMvc.store.People'],

    views: ['ExtJsMvc.view.PeopleGrid',
            'ExtJsMvc.view.FormEditor'],


    init: function (application) {
        this.control({
            'peopleGrid':
                {render: this.onGridRender}
                //{select: this.onGridSelect}


})
},


onGridRender: function (grid, e0pts) {
    console.log('Ladowanie tabeli.');
    grid.getStore().load();

},

    //onGridSelect: function( grid, record, index, eOpts ){
    //    console.log("Wybrano wiersz "+record);
    //}

});