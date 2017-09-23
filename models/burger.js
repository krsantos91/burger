var ORM = require('../config/orm.js');

var burgerActions = {
    viewAll: function(cb){
        console.log("got to burger.js")
        ORM.selectAll("burgers", cb)
    },
    addBurger: function(burger_name){
        var modify_data = {Burger_name: burger_name};
        ORM.insertOne("burgers",modify_data);
    },
    eatBurger: function(burger_id){
        var modify_data = {Devoured: 1};
        var identifier = {ID: burger_id}
        ORM.updateOne("burgers", modify_data, identifier);
    }
};

module.exports = burgerActions;

