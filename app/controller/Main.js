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
        this.control
        ({
        'peopleGrid':{render: this.onGridRender,
                      select: this.onGridSelect,
                      itemdblclick:this.onEditRow},
        'peopleGrid button#add':{click: this.onAddClick},
        'peopleGrid button#del':{click: this.onDelClick},
        'formEditor button#save':{click: this.savePersonClick},
        'formEditor button#cancel':{click: this.closeEditorClick},
        })


},


                      onGridRender: function (grid, e0pts) {
    grid.getStore().load();
    console.log('Ladowanie tabeli.');

},

    onGridSelect: function( grid, record, eOpts ){
        console.log("Wybrano wiersz "+ record.get('Id'));
    },

    onAddClick:function( btn, e, eOpts ){
    var win = Ext.create('ExtJsMvc.view.FormEditor');
    win.setTitle('Dodawanie');
    console.log("Dodaj obiekt");
    },

     onEditRow:function( grid, record, item, index, e, eOpts ){
   var win = Ext.create('ExtJsMvc.view.FormEditor');
       win.setTitle('Edycja');
       var form = win.down('form');
       form.loadRecord(record);
    console.log("Edytuj obiekt");
        },

         closeEditorClick:function( btn, e, eOpts ){
            var win = btn.up('window');

            var form = win.down('form');
            form.getForm().reset();
            win.close();
            console.log("Zamknięto edytor.");

            },

            savePersonClick:function( btn, e, eOpts ){
            var win = btn.up('window');

                        var form = win.down('form');
                        var record = form.getValues();//or form.getRecord(); pobieranie calego obiektu zamiast wartosci

                        var newObject = Ext.create('ExtJsMvc.model.Person',{
                        firstName:record.firstName,
                        lastName:record.lastName
                        });
                        var grid = Ext.ComponentQuery.query('peopleGrid')[0];
                        var store = grid.getStore();

                          store.insert(0,record);//or store.add(record);
                          //store.sync();
                        console.log("Zapisano obiekt:" +newObject );
                        },


 onDelClick:function( btn, e, eOpts ){
    var grid = btn.up('peopleGrid');
    var record = grid.getSelectionModel().getSelection();

    var store = grid.getStore();

    store.remove(record);
 //store.sync();
    console.log("Usunięto obiekt");

    },
});