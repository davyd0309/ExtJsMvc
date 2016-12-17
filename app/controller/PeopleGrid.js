/**
 * Created by Konrad on 17.12.2016.
 */

Ext.define('ExtJsMvc.controller.PeopleGrid',{
    extend : 'Ext.app.Controller',



    init:function () {
        this.control({
            'PeopleGrid':{
                select:this.onGridSelect
            }

        })
    },

    onGridSelect : function () {
        console.log("Wybrano");
    }

})