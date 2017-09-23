var express = require('express');
var burgerActions = require('../models/burger.js');

function router(app,path){
    app.get('/',function(req,res){
        console.log("got to burger_controller.js");
        burgerActions.viewAll(function(data){
            var uneaten = [];
            var eaten = [];
            for (index in data){
                if (data[index].Devoured == 0){
                    uneaten.push(data[index])
                }
                else{
                    eaten.push(data[index]);
                }
            }
            res.render('index', 
            {
                burgers_noteaten: uneaten, 
                burgers_eaten: eaten
            })
        })
    })

    app.post('/',function(req,res){
        var burger_name = req.body.burger;
        console.log(burger_name);
        burgerActions.addBurger(burger_name);
        res.redirect('/');
    });

    app.put('/',function(req,res){
        var burger_id = parseInt(req.body.id);
        burgerActions.eatBurger(burger_id);
        res.redirect('/');
    })

    app.get('/api',function(req,res){
        console.log("got to burger_controller.js")
        burgerActions.viewAll(function(data){
            res.json(data)
        });
    })
}

module.exports = router;

